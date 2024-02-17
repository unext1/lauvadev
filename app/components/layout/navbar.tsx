import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Link, NavLink } from '@remix-run/react';
import { $path } from 'remix-routes';

import { ThemeToggle } from '../theme-switcher';
import { Button } from '../ui/button';
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer';
import { motion } from 'framer-motion';

const navigation = [
  { id: 'home', label: 'Home', href: $path('/') },
  { id: 'work', label: 'Work', href: $path('/work') }
];

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed z-50 items-center justify-center flex top-5 w-full"
    >
      <div className="w-full max-w-7xl rounded-full shadow-lg h-12 md:h-16 py-2 px-6 mx-8 backdrop-blur-[8px] supports-[backdrop-filter]:bg-background/80 border border-muted flex items-center ">
        <div className="grid grid-cols-3 w-full items-center">
          <div className="hidden md:flex justify-start relative rounded-md gap-x-2 ">
            {navigation.map((link) => (
              <NavLink
                to={link.href}
                key={link.id}
                className={({ isActive }) =>
                  isActive
                    ? 'text-primary-foreground relative rounded-md px-3 py-1.5 text-sm font-medium transition focus-visible:outline-primary focus-visible:outline bg-primary'
                    : 'hover:opacity-50 relative rounded-md px-3 py-1.5 text-sm font-medium transition focus-visible:outline-primary focus-visible:outline'
                }
              >
                <span className="relative">{link.label}</span>
              </NavLink>
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
                    <DrawerClose asChild>
                      <Link to={$path('/')}>
                        <DrawerTitle className="font-bold tracking-wide text-xl uppercase">
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-foreground">
                            Lauva.Dev
                          </span>
                        </DrawerTitle>
                      </Link>
                    </DrawerClose>
                  </DrawerHeader>
                  <div className="mb-12 mt-4 space-y-4">
                    {navigation.map((link) => (
                      <div key={link.id} className="text-center mx-auto">
                        <DrawerClose asChild>
                          <Link
                            to={link.href}
                            className={
                              'text-foreground relative rounded-md px-3 py-1.5 text-sm font-medium transition '
                            }
                          >
                            {link.label}
                          </Link>
                        </DrawerClose>
                      </div>
                    ))}
                    <div className="flex justify-center items-center space-x-4">
                      <ThemeToggle />
                    </div>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
          <div className="flex justify-center">
            <Link to={$path('/')}>
              <div className="font-bold tracking-wide text-xl uppercase">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-foreground">
                  Lauva
                </span>
                .Dev
              </div>
            </Link>
          </div>
          <div className="flex justify-end items-center space-x-4">
            <Link to="/#contact" className="hidden md:block">
              <Button variant="default" className="rounded-md">
                Message Me
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
