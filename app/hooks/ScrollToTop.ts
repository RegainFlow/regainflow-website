import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router';

export function ScrollToTop() {
  const { pathname } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    // Only scroll on client-side navigations
    if (navType !== 'POP') {
      window.document.body.scrollTo({
        top: 0,
        behavior: 'auto'
      });
    }
  }, [pathname, navType]);

  return null;
}
