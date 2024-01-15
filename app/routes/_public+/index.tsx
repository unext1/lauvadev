import type { MetaFunction } from '@remix-run/node';
import { About } from '~/components/layout/about';

import { Hero } from '~/components/layout/hero';
import { PortfolioComponent } from '~/components/layout/portfolio';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  return (
    <div>
      <Hero />
      <PortfolioComponent />
      <About />
    </div>
  );
}
