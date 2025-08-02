import { RouterLink } from '../RouterLink';
import clockImg from '../../assets/images/clock.png'

import styles from './styles.module.css';

export function Logo() {
  return (
    <div className={styles.logo}>
      <RouterLink className={styles.logoLink} href='/'>
        <img src={clockImg} alt='Logo Clock' className={styles.logoImage} />
        <span>Kairos</span>
      </RouterLink>
    </div>
  );
}
