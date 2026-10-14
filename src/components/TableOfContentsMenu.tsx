import { useState } from 'react';
import { Home } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import type { TableOfContentsItem } from '../hooks/useTableOfContents';

export function TableOfContentsMenu({ items }: { items: TableOfContentsItem[] }) {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const label = language === 'en' ? 'Table of contents' : 'Mục lục trang';

  const scrollToHeading = (id: string) => {
    const heading = document.getElementById(id);
    heading?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    heading?.focus({ preventScroll: true });
    setIsOpen(false);
  };

  return (
    <div
      className="toc-menu"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsOpen(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          setIsOpen(false);
          (document.activeElement as HTMLElement | null)?.blur();
        }
      }}
    >
      <button
        type="button"
        className="toc-trigger"
        aria-label={label}
        aria-expanded={isOpen}
        aria-controls="page-toc"
        onClick={() => setIsOpen(true)}
      >
        <Home size={16} />
      </button>
      {isOpen && (
        <div id="page-toc" className="toc-popover" role="navigation" aria-label={label}>
          {items.length > 0 ? items.map((entry) => (
            <button
              key={entry.id}
              type="button"
              className="toc-entry"
              style={{ paddingLeft: `${14 + entry.depth * 13}px` }}
              onClick={() => scrollToHeading(entry.id)}
            >
              {entry.title}
            </button>
          )) : (
            <span className="toc-empty">
              {language === 'en' ? 'No sections on this page' : 'Trang này chưa có mục'}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
