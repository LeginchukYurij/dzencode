import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';
import logo from '@img/logo.svg';

const Logo = () => {
  return (
    <Link
      to={'/'}
      className={styles.logo}>
      <img
        src={logo}
        alt='Logo'
      />
      Inventory
    </Link>
  );
};

export default Logo;
