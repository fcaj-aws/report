import { useLayoutEffect, useRef, useState } from 'react';

export interface TableOfContentsItem {
  id: string;
  title: string;
  depth: number;
}

function headingId(title: string) {
  return title
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-|-$/g, '') || 'section';
}

export function useTableOfContents(markdown: string, pagePath: string) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<TableOfContentsItem[]>([]);

  useLayoutEffect(() => {
    const headings = Array.from(
      contentRef.current?.querySelectorAll<HTMLHeadingElement>(
        '.markdown-content h2:not([data-toc-exclude]), .markdown-content h3, .markdown-content h4, .markdown-content h5, .markdown-content h6',
      ) ?? [],
    );
    const firstLevel = Math.min(...headings.map((heading) => Number(heading.tagName.slice(1))));
    const usedIds = new Set<string>();

    setItems(headings.map((heading) => {
      const title = heading.textContent?.trim() || 'Section';
      const baseId = heading.id || headingId(title);
      let id = baseId;
      let suffix = 2;
      while (usedIds.has(id)) {
        id = `${baseId}-${suffix++}`;
      }
      usedIds.add(id);
      heading.id = id;
      heading.tabIndex = -1;

      return {
        id,
        title,
        depth: Number(heading.tagName.slice(1)) - firstLevel,
      };
    }));
  }, [markdown, pagePath]);

  return { contentRef, items };
}
