import cn from 'classnames';

import Logo from '@components/Logo';
import styles from './TopMenu.module.scss';
import Datetime from '../Datetime';

const TopMenu = ({ className }) => {
  return (
    <div className={cn(className, styles['top-bar'])}>
      <Logo />

      <Datetime />
    </div>
  );
};

export default TopMenu;
