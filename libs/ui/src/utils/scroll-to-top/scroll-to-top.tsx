import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* eslint-disable-next-line */
interface ScrollToTopProps {}

function ScrollToTop(props: ScrollToTopProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
