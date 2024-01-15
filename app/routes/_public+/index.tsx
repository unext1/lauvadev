import type { MetaFunction } from '@remix-run/node';
import { Button } from '~/components/ui/button';

import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center text-center mb-12 md:mb-28">
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
        <p className="flex text-lg mt-6">
          Hi there
          <img src="../wave.webp" className="flex h-4 pl-1 my-auto" alt="wave emoji" />, I&apos;m
        </p>
        <h2 className="text-6xl -mt-4 font-extrabold xl:text-7xl 2xl:text-8xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground -ml-1 font-shadow">
            Laurynas.
          </span>
        </h2>
        <h2 className="mt-2 text-base text-muted-foreground">
          Turning your ideas into real life products is my calling.
        </h2>
      </div>

      <Button variant="default">Hello</Button>
      <Button variant="destructive">Hello</Button>
      <Button variant="outline">Hello</Button>
    </div>
  );
}

{
  /* <div className="items-center justify-center hidden w-full col-span-2 py-10 my-auto lg:flex bg-secondary/40 rounded-2xl">
<motion.img
  whileHover={{ rotate: 10, scale: 0.9 }}
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{
    duration: 0.3,
    y: { type: 'spring', stiffness: 120, delay: 0.1 }
  }}
  src="../peace.webp"
  alt="peace emoji"
  className="w-2/3 p-5 mx-auto"
/>
<motion.img
  alt="peace emoji"
  src="../peace.webp"
  className="absolute items-center opacity-25 h-36 w-36 xl:h-44 xl:w-44 top-16 xl:top-12 md:right-64 xl:right-96 -rotate-12"
/>
<motion.img
  alt="happy emoji"
  src="../happy.webp"
  className="absolute right-0 opacity-25 xl:h-44 xl:w-44 h-36 w-36 top-32 xl:top-20 rotate-12"
/>
</div> */
}
