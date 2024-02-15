import type { MetaFunction } from '@remix-run/node';

import { About } from '~/components/layout/about';
import ContactComponent from '~/components/layout/contact';
import { Hero } from '~/components/layout/hero';
import { PortfolioComponent } from '~/components/layout/portfolio';
import { Skills } from '~/components/layout/skills';

export const meta: MetaFunction = ({ location }) => {
  return [
    {
      title: 'Laurynas Valiulis | Portfolio'
    },
    {
      name: 'description',
      content:
        "I'm a 20 year old programmer driven for delivering effective solutions with a strong focus on problem solving."
    },
    {
      property: 'og:url',
      content: `https://lauva.dev${location.pathname}`
    }
  ];
};

const websites = [
  {
    title: 'Menulio Ritmu.',
    description:
      "This is a website about using the moon's rhythm to plan your days, be more mindful, and improve your self discovery. It offers a calendar,tools, and insights based on the moon's phases and zodiac signs. Fun Fact all moon images are taken from nasa.",
    image: '/project4.png',
    badges: ['Remix.run', 'Tailwind'],
    href: 'https://menulioritmu.lt'
  },
  {
    title: 'Home By Aurelija.',
    description: "It's a personal portfolio website for a interior designer.",
    image: '/project5.jpg',
    badges: ['Remix.run', 'Tailwind', 'Contentful'],
    href: 'https://homebyaurelija.com'
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
