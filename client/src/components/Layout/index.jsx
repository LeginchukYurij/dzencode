import styles from './Layout.module.scss';

import TopMenu from '@components/TopMenu';
import NavigationMenu from '@components/NavigationMenu';
import { useEffect } from 'react';

import { debounce } from '@utils';

const Layout = ({ children }) => {
  useEffect(() => {
    const calcHeight = () => {
      var vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    const processChange = debounce(calcHeight);

    calcHeight();
    window.addEventListener('resize', processChange);
  }, []);

  return (
    <div className={styles['app-layout']}>
      <TopMenu className={styles['app-layout__topbar']} />
      <NavigationMenu className={styles['app-layout__leftbar']} />
      <main className={styles['app-layout__main']}>{children}</main>
    </div>
  );
};

export default Layout;
