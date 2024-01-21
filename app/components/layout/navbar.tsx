import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Link, useLocation } from '@remix-run/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { $path } from 'remix-routes';
import { ThemeToggle } from '../theme-switcher';
import { Button } from '../ui/button';
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer';

const navigation = [
  { id: 'home', label: 'Home', href: $path('/') },
  { id: 'work', label: 'Work', href: $path('/work') },
  { id: 'contact', label: 'Contact', href: $path('/contact') }
];

const Navbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  const handleTabChange = (href: string) => {
    setActiveTab(href);
  };
  return (
    <div className="fixed z-50 items-center justify-center flex top-5 w-full">
      <div className="w-full max-w-7xl rounded-full shadow-xl h-16 py-2 px-6 mx-8 backdrop-blur-[8px] supports-[backdrop-filter]:bg-background/80 border border-muted flex items-center ">
        <div className="grid grid-cols-3 w-full items-center">
          <div className="hidden md:flex justify-start relative rounded-xl gap-x-2 ">
            {navigation.map((link) => (
              <Link
                to={link.href}
                key={link.id}
                onClick={() => handleTabChange(link.href)}
                className={`${
                  activeTab === link.href ? 'text-primary-foreground' : 'hover:opacity-50'
                } relative rounded-full px-3 py-1.5 text-sm font-medium transition focus-visible:outline-primary focus-visible:outline text-foreground`}
                style={{
                  WebkitTapHighlightColor: 'transparent'
                }}
              >
                {activeTab === link.href && (
                  <motion.span layoutId="pill" className="absolute inset-0 bg-primary rounded-full" />
                )}
                <span className="relative">{link.label}</span>
              </Link>
            ))}
          </div>
          <div className="block md:hidden">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="ghost">
                  <HamburgerMenuIcon />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm py-2">
                  <DrawerHeader>
                    <DrawerTitle className="uppercase text-center">Navigation</DrawerTitle>
                  </DrawerHeader>
                  <div className="mb-12 mt-4 space-y-4">
                    {navigation.map((link) => (
                      <div key={link.id} className="text-center mx-auto">
                        <DrawerClose asChild className="">
                          <Link to={link.href} className="border-b-2 border-muted w-fit px-2 py-1">
                            {link.label}
                          </Link>
                        </DrawerClose>
                      </div>
                    ))}
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
          <div className="flex justify-center">
            <Link to={$path('/')}>
              <h1 className="font-extrabold text-xl uppercase">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-foreground ">
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
  );
};

export default Navbar;
