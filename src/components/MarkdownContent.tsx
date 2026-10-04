import type { ComponentPropsWithoutRef } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { ExternalLink } from 'lucide-react';
import { findRouteForContentLink } from '../data/navigation';
import { normalizeAssetUrl } from '../utils/content';

interface MarkdownContentProps {
  markdown: string;
}

function MarkdownLink({ href = '', children, ...props }: ComponentPropsWithoutRef<'a'>) {
  const internalRoute = !href.startsWith('#') ? findRouteForContentLink(href) : undefined;

  if (internalRoute) {
    return <Link to={internalRoute}>{children}</Link>;
  }

  if (/^https?:/i.test(href)) {
    return (
      <a href={href} target="_blank" rel="noreferrer" {...props}>
        {children}
        <ExternalLink className="external-link-icon" size={13} aria-hidden="true" />
      </a>
    );
  }

  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}

export function MarkdownContent({ markdown }: MarkdownContentProps) {
  return (
    <div className="markdown-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
          a: MarkdownLink,
          img: ({ src, alt, ...props }) => (
            <img src={normalizeAssetUrl(src)} alt={alt ?? ''} loading="lazy" {...props} />
          ),
          table: ({ children }) => (
            <div className="table-scroll">
              <table>{children}</table>
            </div>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
