import { ArrowRightIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import { MouseIcon } from 'lucide-react';

import { Button } from '../ui/button';
import { OptimizedImage } from '../image';

export const Hero = () => {
  return (
    <div className="flex h-screen lg:h-fit lg:py-40 2xl:mt-24 flex-col items-center justify-center">
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative group cursor-pointer"
      >
        <div className="absolute inset-1 blur rounded-md z-0 bg-gradient-to-r from-primary to-accent animate-pulse" />
        <Link
          to="https://github.com/unext1"
          target="_blank"
          rel="noreferrer"
          className="inline-flex z-10 relative items-center rounded-md bg-background px-3 py-1 text-sm font-medium"
        >
          <GitHubLogoIcon />{' '}
          <div data-orientation="vertical" role="none" className="shrink-0 bg-border w-[1px] mx-2 h-4"></div>{' '}
          <span className="inline">Follow me on Github </span>
          <ArrowRightIcon className="ml-2" />
        </Link>
      </motion.div>

      <motion.p
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex text-base mt-6"
      >
        Hi there
        <OptimizedImage
          src="../wave.webp"
          className="flex  pl-1 pt-0.5 overflow-hidden my-auto animate-wiggle"
          alt="wave emoji"
          layout="fixed"
          width={20}
          height={18}
        />
        , I&apos;m
      </motion.p>
      <motion.h1
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-6xl -mt-4 font-extrabold xl:text-7xl 2xl:text-8xl"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-foreground">
          Laurynas
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mt-4 text-muted-foreground text-center px-8"
      >
        Turning your ideas into real life products is my calling.
      </motion.p>
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="flex gap-2 mt-6"
      >
        <div>
          <Button asChild variant="outline" className="md:h-10 h-8 px-3 md:px-8">
            <Link to="#about">About</Link>
          </Button>
        </div>
        <div>
          <Button asChild variant="default" className="md:h-10 h-8 px-3 md:px-8">
            <Link to="#portfolio">Portfolio</Link>
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="flex text-xs items-center mt-8"
      >
        <a href="#skills" className="flex animate-bounce">
          <MouseIcon className="w-4 h-4 animate-wiggle" /> Scroll to see more content
        </a>
      </motion.div>
    </div>
  );
};
