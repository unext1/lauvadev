import { Outlet } from '@remix-run/react';
import Navbar from '~/components/layout/navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="h-full flex-1 max-w-7xl mx-auto relative container mt-14 md:mt-28 ">
        <Outlet />
      </div>
      <div className="max-w-7xl mx-auto container">
        <div>Footer</div>
      </div>
    </>
  );
};

export default Layout;
