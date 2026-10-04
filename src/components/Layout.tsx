import { useEffect, useState, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { flatNavigation } from '../data/navigation';
import { useVisitedPages } from '../hooks/useVisitedPages';
import { Sidebar } from './Sidebar';

export function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const { translate } = useLanguage();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { visitedPages, resetVisitedPages } = useVisitedPages(location.pathname);

  const currentIndex = flatNavigation.findIndex((item) => item.path === location.pathname);
  const previousPage = currentIndex > 0 ? flatNavigation[currentIndex - 1] : undefined;
  const nextPage = currentIndex >= 0 && currentIndex < flatNavigation.length - 1
    ? flatNavigation[currentIndex + 1]
    : undefined;

  useEffect(() => {
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <Sidebar
        isOpen={sidebarOpen}
        onOpen={() => setSidebarOpen(true)}
        onClose={() => setSidebarOpen(false)}
        visitedPages={visitedPages}
        onResetProgress={resetVisitedPages}
      />

      <main className="main-content">
        {children}

        <nav className="bottom-navigation" aria-label="Sequential navigation">
          {previousPage ? (
            <Link to={previousPage.path} className="bottom-nav-link previous">
              <ChevronLeft size={18} />
              <span>
                <small>PREVIOUS</small>
                {translate(previousPage.label)}
              </span>
            </Link>
          ) : <span />}
          {nextPage && (
            <Link to={nextPage.path} className="bottom-nav-link next">
              <span>
                <small>NEXT</small>
                {translate(nextPage.label)}
              </span>
              <ChevronRight size={18} />
            </Link>
          )}
        </nav>
      </main>

      {previousPage && (
        <Link className="edge-navigation edge-navigation-left" to={previousPage.path} aria-label={`Previous: ${translate(previousPage.label)}`}>
          <ChevronLeft size={27} />
        </Link>
      )}
      {nextPage && (
        <Link className="edge-navigation edge-navigation-right" to={nextPage.path} aria-label={`Next: ${translate(nextPage.label)}`}>
          <ChevronRight size={27} />
        </Link>
      )}
    </div>
  );
}
