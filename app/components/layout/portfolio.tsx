import { $path } from 'remix-routes';
import { Link } from '@remix-run/react';

import { Badge } from '../ui/badge';

export const PortfolioComponent = ({
  websites,
  ctaButton,
  badgeTitle
}: {
  websites: {
    title: string;
    description: string;
    image: string;
    badges: string[];
  }[];
  ctaButton?: boolean;
  badgeTitle: string;
}) => {
  return (
    <div className="flex flex-col items-center relative section-padding z-10 bg-background" id="portfolio">
      <div className="my-auto mx-auto container max-w-7xl ">
        <div className="text-center">
          <Badge variant="outline" className="px-6 py-2 text-center">
            {badgeTitle}
          </Badge>
          <h3 className="mt-2 text-3xl sm:text-4xl lg:text-5xl mb-2 font-bold">My Work</h3>
        </div>
        <div className="my-8 space-y-10">
          {websites.map((website) => (
            <div
              className=" px-4 py-6 md:px-8 md:py-12 bg-secondary/30 rounded-xl grid gap-8 md:gap-12 grid-cols-1 lg:grid-cols-3 group"
              key={website.title}
            >
              <div className="col-span-1 order-2 my-auto">
                <span className="font-bold text-2xl tracking-wide">{website.title}</span>

                <p className="text-sm text-muted-foreground mt-2">{website.description}</p>
                <p className="mt-4 text-sm text-muted-foreground">Created with love:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {website.badges.map((badge, index) => (
                    <Badge variant="outline" key={index} className="sm:px-6 py-1  sm:py-2 text-center">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>
              <img
                src={website.image}
                alt="project"
                className="rounded-xl lg:col-span-2 order-1 md:group-hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
        {ctaButton && (
          <div className="text-center transition hover:scale-95 w-fit mx-auto underline underline-offset-4">
            <Link to={$path('/work')} className="text-xs pb-1 uppercase font-bold">
              Check out more
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
