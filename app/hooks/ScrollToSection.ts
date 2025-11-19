import { useLocation, useNavigate } from 'react-router';

export const ScrollToSection = (sectionId: string, homeRoute: string = '/') => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (e?: React.MouseEvent<HTMLAnchorElement>) => {
    if (e) e.preventDefault();

    if (pathname === homeRoute) {
      const target = document.getElementById(sectionId);
      if (target) {
        const yOffset = -80;
        const y =
          target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      navigate(`${homeRoute}#${sectionId}`);
    }
  };

  return scrollToSection;
};
