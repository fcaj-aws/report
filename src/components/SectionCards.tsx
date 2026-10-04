import { ArrowRight, Layers3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import type { NavigationItem } from '../data/navigation';

export function SectionCards({ items }: { items: NavigationItem[] }) {
  const { translate } = useLanguage();

  return (
    <div className="section-card-grid">
      {items.map((item, index) => (
        <Link key={item.path} to={item.path} className="section-card">
          <div className="section-card-number">{String(index + 1).padStart(2, '0')}</div>
          <div className="section-card-copy">
            <h2>{translate(item.label).replace(/^\d+(?:\.\d+)*\s*/, '')}</h2>
            <p>{item.summary ? translate(item.summary) : translate({ en: 'Open this report section.', vi: 'Mở phần nội dung này.' })}</p>
          </div>
          <Layers3 className="section-card-watermark" size={84} aria-hidden="true" />
          <span className="section-card-action">
            <ArrowRight size={17} />
          </span>
        </Link>
      ))}
    </div>
  );
}
