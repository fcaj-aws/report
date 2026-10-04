import { useCallback, useEffect, useState } from 'react';

const storageKey = 'fcaj-visited-pages';

function readVisitedPages() {
  try {
    const savedPages = JSON.parse(window.localStorage.getItem(storageKey) ?? '[]');
    return Array.isArray(savedPages) ? savedPages.filter((page): page is string => typeof page === 'string') : [];
  } catch {
    return [];
  }
}

export function useVisitedPages(pathname: string) {
  const [visitedPages, setVisitedPages] = useState<string[]>(readVisitedPages);

  useEffect(() => {
    setVisitedPages((currentPages) => {
      if (currentPages.includes(pathname)) return currentPages;
      const nextPages = [...currentPages, pathname];
      window.localStorage.setItem(storageKey, JSON.stringify(nextPages));
      return nextPages;
    });
  }, [pathname]);

  const resetVisitedPages = useCallback(() => {
    window.localStorage.removeItem(storageKey);
    setVisitedPages([]);
  }, []);

  return { visitedPages, resetVisitedPages };
}
