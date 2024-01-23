import { PortfolioComponent } from '~/components/layout/portfolio';

const websites = [
  {
    title: 'Menulio Ritmu.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sequi magnam reiciendis, autem, ipsum molestiae aspernatur ad quisquam commodd.',
    image: '/project4.png',
    badges: ['Remix.run', 'Tailwind']
  },
  {
    title: 'Home By Aurelija.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sequi magnam reiciendis, autem, ipsum molestiae aspernatur ad quisquam commodd.',
    image: '/project5.jpg',
    badges: ['Remix.run', 'Tailwind']
  }
];

const WorkPage = () => {
  return (
    <div className="mt-12 ">
      <PortfolioComponent websites={websites} badgeTitle="Work" />
    </div>
  );
};

export default WorkPage;
