import { Outlet } from '@remix-run/react';

import Footer from '~/components/layout/footer';
import Navbar from '~/components/layout/navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="h-full flex-1 relative">
        <Outlet />
      </div>
      <div className="border-t border-muted py-6">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
