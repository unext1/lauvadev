import { Outlet } from '@remix-run/react';
import Navbar from '~/components/layout/navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="h-full flex-1 relative">
        {/* <img
          src="https://png.pngtree.com/png-vector/20210923/ourlarge/pngtree-white-grid-line-pattern-on-a-gray-png-image_3949647.png"
          alt="background"
          className="fixed top-0  w-full opacity-5 z-0"
        /> */}
        <Outlet />
      </div>
      <div className="border-t border-muted py-6">
        <div className="max-w-7xl mx-auto container">Footer</div>
      </div>
    </>
  );
};

export default Layout;
