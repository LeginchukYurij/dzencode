import styles from './Datetime.module.scss';
import { BiTimeFive } from 'react-icons/bi';

const Datetime = () => {
  return (
    <time
      datetime=''
      className={styles.datetime}>
      <div className={styles.date}>
        Today
        <br />
        12 MAR, 2023
      </div>
      <div className={styles.time}>
        <BiTimeFive /> 17:20
      </div>
    </time>
  );
};

export default Datetime;
