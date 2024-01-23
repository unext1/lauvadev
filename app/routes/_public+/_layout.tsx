import { Outlet } from '@remix-run/react';
import Footer from '~/components/layout/footer';

import Navbar from '~/components/layout/navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="h-full flex-1 relative">
        {/* <img
          src="https://www.lokkeestudios.com/_astro/future-grid.a0cd4189.webp"
          alt="background"
          className="h-screen absolute top-0 w-full opacity-5 animate-pulse z-20"
        /> */}
        <Outlet />
      </div>
      <div className="border-t border-muted py-6">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
