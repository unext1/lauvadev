import type { MetaFunction } from '@remix-run/node';

import { Hero } from '~/components/layout/hero';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  return (
    <div className="py-10">
      <Hero />
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
