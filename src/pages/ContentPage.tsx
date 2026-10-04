import { motion } from 'framer-motion';
import { FilePenLine } from 'lucide-react';
import { Navigate, useLocation } from 'react-router-dom';
import { MarkdownContent } from '../components/MarkdownContent';
import { PageHeader } from '../components/PageHeader';
import { SectionCards } from '../components/SectionCards';
import { useLanguage } from '../contexts/LanguageContext';
import { findNavigationItem } from '../data/navigation';
import { loadContent } from '../utils/content';

export function ContentPage() {
  const location = useLocation();
  const { language } = useLanguage();
  const item = findNavigationItem(location.pathname);

  if (!item || !item.contentKey) {
    return <Navigate to="/" replace />;
  }

  const content = loadContent(item.contentKey, language);

  return (
    <motion.article
      className="page-container content-page"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28 }}
    >
      <PageHeader item={item} />

      {content.source === 'template' && (
        <div className="starter-content-notice">
          <FilePenLine size={18} />
          <span>
            {language === 'en'
              ? 'Starter content is shown here. Replace it with your own internship work when ready.'
              : 'Đây là nội dung mẫu. Hãy thay thế bằng nội dung thực tập của bạn khi sẵn sàng.'}
          </span>
        </div>
      )}

      <div className="content-surface">
        <MarkdownContent markdown={content.markdown} />
      </div>

      {item.children && item.children.length > 0 && (
        <section className="child-sections">
          <div className="section-heading compact">
            <span>{language === 'en' ? 'CONTINUE EXPLORING' : 'TIẾP TỤC KHÁM PHÁ'}</span>
            <h2>{language === 'en' ? 'Sections' : 'Các Phần'}</h2>
          </div>
          <SectionCards items={item.children} />
        </section>
      )}
    </motion.article>
  );
}
