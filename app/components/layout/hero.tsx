import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Link } from '@remix-run/react';

import { Button } from '../ui/button';

export const Hero = () => {
  return (
    <div className="flex mt-12 py-28 md:py-40 flex-col items-center justify-center">
      <Link
        to="https://github.com/unext1"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center rounded-lg bg-secondary/30 px-3 py-1 text-base font-medium"
      >
        <GitHubLogoIcon />{' '}
        <div data-orientation="vertical" role="none" className="shrink-0 bg-border w-[1px] mx-2 h-4"></div>{' '}
        <span className="inline">Follow me on Github</span>
      </Link>
      <p className="flex text-base mt-6">
        Hi there
        <img src="../wave.webp" className="flex h-4 pl-1 my-auto" alt="wave emoji" />, I&apos;m
      </p>
      <h1 className="text-6xl -mt-2 font-extrabold xl:text-7xl 2xl:text-8xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-foreground">
          Laurynas.
        </span>
      </h1>
      <p className="mt-4 text-muted-foreground text-center px-8">
        Turning your ideas into real life products is my calling.
      </p>
      <div className="flex gap-2 mt-6">
        <Button asChild variant="outline">
          <Link to="#about">About</Link>
        </Button>
        <Button asChild variant="default">
          <Link to="#portfolio">Portfolio</Link>
        </Button>
      </div>
    </div>
  );
};
