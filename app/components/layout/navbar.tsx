import { Link, NavLink, useLocation } from '@remix-run/react';
import { motion } from 'framer-motion';
import { HomeIcon } from 'lucide-react';
import { ThemeToggle } from '../theme-switcher';
import { useState } from 'react';

const tabs = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'Test', label: 'Test', href: '/test' }
];

const Navbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  const handleTabChange = (href: string) => {
    setActiveTab(href);
  };
  return (
    <>
      <div className="fixed z-20 items-center justify-center flex top-5 w-full">
        <div className="w-full max-w-3xl rounded-full shadow-xl h-16 py-2 px-6 mx-8 backdrop-blur-sm supports-[backdrop-filter]:bg-secondary/40 flex items-center">
          <div className="grid grid-cols-3 w-full items-center">
            <nav className="flex justify-start">
              <div className="flex w-fit relative rounded-xl gap-x-2 ">
                {tabs.map((tab) => (
                  <Link
                    to={tab.href}
                    key={tab.id}
                    onClick={() => handleTabChange(tab.href)}
                    className={`${
                      activeTab === tab.href ? '' : 'hover:opacity-50'
                    } relative rounded-full px-3 py-1.5 text-sm font-medium transition focus-visible:outline-primary focus-visible:outline `}
                    style={{
                      WebkitTapHighlightColor: 'transparent'
                    }}
                  >
                    {activeTab === tab.href && (
                      <motion.span
                        layoutId="bubble"
                        className="absolute inset-0 bg-primary"
                        style={{ borderRadius: 9999 }}
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </Link>
                ))}
              </div>
            </nav>
            <div className="flex justify-center">
              <Link to="/">
                <h1 className="font-extrabold text-xl uppercase">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground ">
                    Lauva
                  </span>
                  .Dev
                </h1>
              </Link>
            </div>
            <div className="flex justify-end">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      <div className="fixed flex z-20 items-center justify-center w-full p-5 md:hidden bottom-5">
        <div className="w-full max-w-md mx-auto ">
          <div className="rounded-full shadow-xl backdrop-blur-sm supports-[backdrop-filter]:bg-secondary/40">
            <div className="flex py-2">
              <div className="flex justify-around w-full px-5 my-auto">
                <div className="group">group</div>
              </div>
              <div className="flex justify-center flex-1 w-full h-full mx-auto my-auto outline-none cursor-pointer group">
                <Link to="/">
                  <motion.div
                    whileTap={{ scale: 0.8 }}
                    transition={{ duration: 0.1 }}
                    className="w-12 h-12 my-auto text-center bg-primary rounded-full"
                  >
                    <span className="sr-only">Home</span>
                    <HomeIcon className="flex items-center w-full h-full p-2.5 mx-auto text-white" />
                  </motion.div>
                </Link>
              </div>
              <div className="flex justify-around w-full px-5 my-auto ">
                <div className="group">blog</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
