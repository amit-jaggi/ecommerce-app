import './main-layout-wrapper.scss';
import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router';

const Header = lazy(() => import('../../organisms/header/header'));
const Footer = lazy(() => import('../../organisms/footer/footer'));


export default function DashboardWrapper() {
	return (
		<div className={`dashboard-wrapper`}>
			<Header />

			<Outlet />

			<Footer />
		</div>
	);
};