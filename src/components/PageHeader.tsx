import { ChevronRight, GitBranch } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { navigation, type FlatNavigationItem } from '../data/navigation';
import type { TableOfContentsItem } from '../hooks/useTableOfContents';
import { NavigationIcon } from './NavigationIcon';
import { TableOfContentsMenu } from './TableOfContentsMenu';

interface PageHeaderProps {
  item: FlatNavigationItem;
  tableOfContents: TableOfContentsItem[];
  editFilePath?: string;
}

export function PageHeader({ item, tableOfContents, editFilePath }: PageHeaderProps) {
  const { language, translate } = useLanguage();
  const breadcrumbs = [...item.parents, item];
  const editUrl = editFilePath
    ? `https://github.com/fcaj-aws/report/edit/main/${encodeURI(editFilePath)}`
    : undefined;

  return (
    <header className="page-header">
      <div className="breadcrumb-bar">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <TableOfContentsMenu items={tableOfContents} />
          <span className="breadcrumb-divider" aria-hidden="true" />
          <Link to="/" className="breadcrumb-home-link">{translate(navigation[0].label)}</Link>
          {breadcrumbs.filter((crumb) => crumb.path !== '/').map((crumb) => (
            <span className="breadcrumb-segment" key={crumb.path}>
              <ChevronRight size={14} aria-hidden="true" />
              {crumb.path === item.path ? (
                <span aria-current="page">{translate(crumb.label)}</span>
              ) : (
                <Link to={crumb.path}>{translate(crumb.label)}</Link>
              )}
            </span>
          ))}
        </nav>
        {editUrl && (
          <a className="edit-page-link" href={editUrl} target="_blank" rel="noreferrer">
            <GitBranch size={15} aria-hidden="true" />
            {language === 'en' ? 'Edit this page' : 'Chỉnh sửa trang này'}
          </a>
        )}
      </div>

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
