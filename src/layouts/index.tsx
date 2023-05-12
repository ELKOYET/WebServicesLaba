import { Link, Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/Author/">Авторы</Link>
        </li>
        <li>
          <Link to="/Diplom/index">Работы</Link>
        </li>
        <li>
          <Link to="/Direction/index">Направления</Link>
        </li>
        <li>
          <Link to="/Position/index">Позиции</Link>
        </li>    
      </ul>
        <Outlet />
    </div>
  );
}
