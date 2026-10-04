import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import type { FlatNavigationItem } from '../data/navigation';
import { NavigationIcon } from './NavigationIcon';

export function PageHeader({ item }: { item: FlatNavigationItem }) {
  const { translate } = useLanguage();
  const breadcrumbs = [...item.parents, item];

  return (
    <header className="page-header">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link to="/" aria-label="Home">
          <Home size={15} />
        </Link>
        {breadcrumbs.filter((crumb) => crumb.path !== '/').map((crumb) => (
          <span key={crumb.path}>
            <ChevronRight size={14} />
            {crumb.path === item.path ? (
              <span>{translate(crumb.label)}</span>
            ) : (
              <Link to={crumb.path}>{translate(crumb.label)}</Link>
            )}
          </span>
        ))}
      </nav>

      <div className="page-heading-row">
        <div className="page-heading-icon">
          <NavigationIcon name={item.icon ?? item.parents[0]?.icon ?? 'file'} size={25} />
        </div>
        <div>
          <span className="page-eyebrow">FCAJ INTERNSHIP REPORT</span>
          <h1>{translate(item.label)}</h1>
        </div>
      </div>
    </header>
  );
}
