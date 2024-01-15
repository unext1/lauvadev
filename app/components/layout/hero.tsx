import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Link } from '@remix-run/react';
import { Button } from '../ui/button';

export const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center mb-12 md:mb-28 py-28">
      <Link
        to="https://github.com/unext1"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center rounded-lg bg-secondary/40 px-3 py-1 text-sm font-medium"
      >
        <GitHubLogoIcon />{' '}
        <div data-orientation="vertical" role="none" className="shrink-0 bg-border w-[1px] mx-2 h-4"></div>{' '}
        <span className="inline">Follow me on Github</span>
      </Link>
      <p className="flex text-base mt-6">
        Hi there
        <img src="../wave.webp" className="flex h-4 pl-1 my-auto" alt="wave emoji" />, I&apos;m
      </p>
      <h2 className="text-6xl -mt-4 font-extrabold xl:text-7xl 2xl:text-8xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground">Laurynas.</span>
      </h2>
      <h2 className="mt-2 text-base text-muted-foreground">
        Turning your ideas into real life products is my calling.
      </h2>
      <div className="flex gap-2 mt-6">
        <Button size="sm" variant="outline">
          About
        </Button>
        <Button size="sm" variant="default">
          Something
        </Button>
      </div>
    </div>
  );
};
