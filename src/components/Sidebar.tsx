import { useEffect, useMemo, useState } from 'react';
import { Check, ChevronDown, ChevronRight, Facebook, Globe2, Menu, RotateCcw, Search, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { flatNavigation, navigation, type NavigationItem } from '../data/navigation';
import { NavigationIcon } from './NavigationIcon';

interface SidebarProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  visitedPages: string[];
  onResetProgress: () => void;
}

interface NavigationBranchProps {
  item: NavigationItem;
  depth?: number;
  expandedItems: Set<string>;
  toggleExpanded: (id: string) => void;
  visitedPages: string[];
  onNavigate: () => void;
}

function NavigationBranch({
  item,
  depth = 0,
  expandedItems,
  toggleExpanded,
  visitedPages,
  onNavigate,
}: NavigationBranchProps) {
  const { pathname } = useLocation();
  const { translate } = useLanguage();
  const hasChildren = Boolean(item.children?.length);
  const isExpanded = expandedItems.has(item.id);
  const isActive = pathname === item.path;
  const containsActivePage = item.children?.some(
    (child) => pathname === child.path || pathname.startsWith(`${child.path}/`),
  );

  return (
    <div>
      <div
        className={`sidebar-nav-row ${isActive ? 'active' : ''} ${containsActivePage ? 'active-parent' : ''}`}
        style={{ paddingLeft: `${18 + depth * 18}px` }}
      >
        <Link to={item.path} className="sidebar-nav-link" onClick={onNavigate}>
          {depth === 0 ? (
            <NavigationIcon name={item.icon} size={19} strokeWidth={1.8} />
          ) : (
            <span className="child-dot" aria-hidden="true" />
          )}
          <span>{translate(item.label)}</span>
          {visitedPages.includes(item.path) && <Check className="visited-check" size={15} />}
        </Link>

        {hasChildren && (
          <button
            type="button"
            className="sidebar-expand-button"
            onClick={() => toggleExpanded(item.id)}
            aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${translate(item.label)}`}
          >
            {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
        )}
      </div>

      {hasChildren && isExpanded && (
        <div className="sidebar-subtree">
          {item.children?.map((child) => (
            <NavigationBranch
              key={child.id}
              item={child}
              depth={depth + 1}
              expandedItems={expandedItems}
              toggleExpanded={toggleExpanded}
              visitedPages={visitedPages}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function Sidebar({ isOpen, onOpen, onClose, visitedPages, onResetProgress }: SidebarProps) {
  const { pathname } = useLocation();
  const { language, setLanguage, translate } = useLanguage();
  const [query, setQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    const activeItem = flatNavigation.find((item) => item.path === pathname);
    if (!activeItem) return;
    setExpandedItems((currentItems) => {
      const nextItems = new Set(currentItems);
      activeItem.parents.forEach((parent) => nextItems.add(parent.id));
      if (activeItem.children?.length) nextItems.add(activeItem.id);
      return nextItems;
    });
  }, [pathname]);

  const searchResults = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase(language);
    if (!normalizedQuery) return [];
    return flatNavigation
      .filter((item) => item.label[language].toLocaleLowerCase(language).includes(normalizedQuery))
      .slice(0, 7);
  }, [language, query]);

  const toggleExpanded = (id: string) => {
    setExpandedItems((currentItems) => {
      const nextItems = new Set(currentItems);
      if (nextItems.has(id)) nextItems.delete(id);
      else nextItems.add(id);
      return nextItems;
    });
  };

  return (
    <>
      <button
        type="button"
        className="mobile-menu-button"
        onClick={isOpen ? onClose : onOpen}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      <div className={`sidebar-backdrop ${isOpen ? 'visible' : ''}`} onClick={onClose} />
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-brand">
          <Link to="/" onClick={onClose} aria-label="FCAJ Internship Report home">
            <span className="aws-wordmark">aws</span>
            <span className="brand-divider" />
            <span className="brand-program">first cloud<br />journey <strong>AI</strong></span>
          </Link>
        </div>

        <div className="sidebar-search">
          <Search size={17} aria-hidden="true" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={language === 'en' ? 'Search report...' : 'Tìm trong báo cáo...'}
            aria-label="Search report"
          />
          {query && (
            <button type="button" onClick={() => setQuery('')} aria-label="Clear search">
              <X size={15} />
            </button>
          )}
          {searchResults.length > 0 && (
            <div className="search-results">
              {searchResults.map((item) => (
                <Link key={item.path} to={item.path} onClick={() => { setQuery(''); onClose(); }}>
                  <span>{translate(item.label)}</span>
                  <ChevronRight size={14} />
                </Link>
              ))}
            </div>
          )}
        </div>

        <nav className="sidebar-navigation" aria-label="Report navigation">
          {navigation.map((item) => (
            <NavigationBranch
              key={item.id}
              item={item}
              expandedItems={expandedItems}
              toggleExpanded={toggleExpanded}
              visitedPages={visitedPages}
              onNavigate={onClose}
            />
          ))}
        </nav>

        <footer className="sidebar-footer">
          <a href="https://www.facebook.com/groups/awsstudygroupfcj" target="_blank" rel="noreferrer">
            <Facebook size={17} />
            <span>AWS Study Group</span>
          </a>
          <button type="button" onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}>
            <Globe2 size={17} />
            <span>{language === 'en' ? 'English' : 'Tiếng Việt'}</span>
            <small>{language.toUpperCase()}</small>
          </button>
          <button type="button" onClick={onResetProgress} disabled={visitedPages.length === 0}>
            <RotateCcw size={17} />
            <span>{language === 'en' ? 'Reset Progress' : 'Đặt Lại Tiến Trình'}</span>
            <small>{visitedPages.length}</small>
          </button>
          <div className="sidebar-updated">
            <span>{language === 'en' ? 'LAST UPDATED' : 'CẬP NHẬT'}</span>
            <time>{__BUILD_DATE__}</time>
          </div>
        </footer>
      </aside>
    </>
  );
}
