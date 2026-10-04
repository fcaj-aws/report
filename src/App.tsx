import { HashRouter, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ContentPage } from './pages/ContentPage';

export default function App() {
  return (
    <HashRouter>
      <LanguageProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<ContentPage />} />
          </Routes>
        </Layout>
      </LanguageProvider>
    </HashRouter>
  );
}
