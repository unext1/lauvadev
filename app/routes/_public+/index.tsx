import type { MetaFunction } from '@remix-run/node';
import { About } from '~/components/layout/about';
import ContactComponent from '~/components/layout/contact';

import { Hero } from '~/components/layout/hero';
import { PortfolioComponent } from '~/components/layout/portfolio';
import { Skills } from '~/components/layout/skills';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

const websites = [
  {
    title: 'Menulio Ritmu.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sequi magnam reiciendis, autem, ipsum molestiae aspernatur ad quisquam commodd.',
    image: '/project4.png',
    badges: ['Remix.run', 'Tailwind', 'API']
  },
  {
    title: 'Home By Aurelija.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sequi magnam reiciendis, autem, ipsum molestiae aspernatur ad quisquam commodd.',
    image: '/project5.jpg',
    badges: ['Remix.run', 'Tailwind']
  }
];

export default function Index() {
  return (
    <div>
      <Hero />
      <Skills />
      <About />
      <PortfolioComponent websites={websites} ctaButton badgeTitle="Work Page" />
      <ContactComponent />
    </div>
  );
}
