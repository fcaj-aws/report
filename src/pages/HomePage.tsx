import { motion } from 'framer-motion';
import { ArrowRight, BriefcaseBusiness, Building2, GraduationCap, Mail, Phone, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { navigation } from '../data/navigation';
import { profile } from '../data/profile';
import { NavigationIcon } from '../components/NavigationIcon';

export function HomePage() {
  const { language, translate } = useLanguage();
  const reportSections = navigation.filter((item) => item.path !== '/');

  const studentDetails = [
    { icon: GraduationCap, label: { en: 'University', vi: 'Trường' }, value: translate(profile.university) },
    { icon: Sparkles, label: { en: 'Major', vi: 'Ngành' }, value: translate(profile.major) },
    { icon: Building2, label: { en: 'Company', vi: 'Công Ty' }, value: translate(profile.company) },
    { icon: BriefcaseBusiness, label: { en: 'Position', vi: 'Vị Trí' }, value: profile.position },
    { icon: Mail, label: { en: 'Email', vi: 'Email' }, value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: { en: 'Phone', vi: 'Điện Thoại' }, value: profile.phone, href: `tel:${profile.phone}` },
  ];

  return (
    <motion.div
      className="page-container home-page"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <header className="home-hero">
        <span className="hero-kicker">FIRST CLOUD AI JOURNEY</span>
        <h1>{language === 'en' ? 'INTERNSHIP REPORT' : 'BÁO CÁO THỰC TẬP'}</h1>
        <p>{language === 'en' ? 'Cloud learning, technical practice, and professional growth at AWS Vietnam.' : 'Học tập về cloud, thực hành kỹ thuật và phát triển nghề nghiệp tại AWS Vietnam.'}</p>
      </header>

      <section className="profile-layout" aria-label="Student information">
        <div className="profile-photo-card">
          <img src={`${import.meta.env.BASE_URL}images/avatar.png`} alt={profile.name} />
          <div className="profile-photo-caption">
            <span>FCAJ INTERN</span>
            <strong>{profile.name}</strong>
          </div>
        </div>

        <div className="profile-information-card">
          <div className="profile-heading">
            <span>{language === 'en' ? 'ABOUT THE INTERN' : 'THÔNG TIN THỰC TẬP SINH'}</span>
            <h2>{language === 'en' ? 'Student Information' : 'Thông Tin Sinh Viên'}</h2>
          </div>
          <div className="profile-facts">
            {studentDetails.map(({ icon: Icon, label, value, href }) => (
              <div className="profile-fact" key={label.en}>
                <Icon size={18} aria-hidden="true" />
                <div>
                  <span>{translate(label)}</span>
                  {href ? <a href={href}>{value}</a> : <strong>{value}</strong>}
                </div>
              </div>
            ))}
          </div>
          <div className="profile-meta">
            <span><small>CLASS</small>{profile.className}</span>
            <span><small>{language === 'en' ? 'DURATION' : 'THỜI GIAN'}</small>{translate(profile.duration)}</span>
          </div>
        </div>
      </section>

      <section className="report-sections">
        <div className="section-heading">
          <span>{language === 'en' ? 'EXPLORE THE JOURNEY' : 'KHÁM PHÁ HÀNH TRÌNH'}</span>
          <h2>{language === 'en' ? 'Report Content' : 'Nội Dung Báo Cáo'}</h2>
        </div>
        <div className="report-card-grid">
          {reportSections.map((section) => (
            <Link to={section.path} className="report-card" key={section.path}>
              <span className="report-card-icon">
                <NavigationIcon name={section.icon} size={23} />
              </span>
              <span className="report-card-copy">
                <strong>{translate(section.label)}</strong>
                <small>{section.summary ? translate(section.summary) : ''}</small>
              </span>
              <ArrowRight className="report-card-arrow" size={19} />
            </Link>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
