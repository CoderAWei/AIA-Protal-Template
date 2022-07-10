import { Link, Outlet } from 'umi';
import style from './index.module.less';
import Header from '@/components/Header';
import Footer from '@/components/Footer'

export default function Layout() {
  return (
	//   <Outlet/>
    <div className={style['layout']}>
      	<Header/>
		<div className={style['layout.content']}>
			<Outlet />
		</div>
		<Footer/>
    </div>
  );
}
