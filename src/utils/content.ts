import type { Language } from '../contexts/LanguageContext';

const activeContent = import.meta.glob('/content/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const templateContent = import.meta.glob('/content-template/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

export type ContentSource = 'active' | 'template' | 'missing';

export interface LoadedContent {
  markdown: string;
  source: ContentSource;
}

function contentPath(root: 'content' | 'content-template', key: string, language: Language) {
  const suffix = language === 'vi' ? '.vi.md' : '.md';
  return `/${root}/${key}${suffix}`;
}

function stripFrontMatter(markdown: string) {
  return markdown.replace(/^\uFEFF?---\r?\n[\s\S]*?\r?\n---\r?\n?/, '');
}

function convertNotices(markdown: string) {
  return markdown.replace(
    /\{\{%\s*notice\s+(\w+)\s*%\}\}([\s\S]*?)\{\{%\s*\/notice\s*%\}\}/g,
    (_, type: string, body: string) => {
      const label = type.charAt(0).toUpperCase() + type.slice(1);
      const quotedBody = body
        .trim()
        .split(/\r?\n/)
        .map((line) => `> ${line}`)
        .join('\n');
      return `> **${label}**\n>\n${quotedBody}`;
    },
  );
}

function prepareMarkdown(markdown: string) {
  return convertNotices(stripFrontMatter(markdown)).trim();
}

export function loadContent(key: string, language: Language): LoadedContent {
  const activePath = contentPath('content', key, language);
  const activeFallbackPath = contentPath('content', key, 'en');
  const templatePath = contentPath('content-template', key, language);
  const templateFallbackPath = contentPath('content-template', key, 'en');

  const activeMarkdown = activeContent[activePath] ?? activeContent[activeFallbackPath];
  if (activeMarkdown) {
    return { markdown: prepareMarkdown(activeMarkdown), source: 'active' };
  }

  const fallbackMarkdown = templateContent[templatePath] ?? templateContent[templateFallbackPath];
  if (fallbackMarkdown) {
    return { markdown: prepareMarkdown(fallbackMarkdown), source: 'template' };
  }

  return {
    source: 'missing',
    markdown:
      language === 'vi'
        ? '## Nội dung đang được cập nhật\n\nPhần này chưa có nội dung. Hãy thêm tệp Markdown tương ứng để hoàn thiện báo cáo.'
        : '## Content in progress\n\nThis section does not have content yet. Add the matching Markdown file to complete the report.',
  };
}

export function normalizeAssetUrl(source?: string) {
  if (!source || /^(?:https?:|data:|blob:)/i.test(source)) return source;

  let cleanSource = source.replace(/\\/g, '/').replace(/^(?:\.\.\/)+/, '').replace(/^\//, '');
  cleanSource = cleanSource.replace(/^static\//i, '');

  const imagesPosition = cleanSource.toLowerCase().indexOf('images/');
  if (imagesPosition >= 0) {
    cleanSource = cleanSource.slice(imagesPosition);
  }

  return `${import.meta.env.BASE_URL}${cleanSource}`;
}
