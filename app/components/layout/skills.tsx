import { Link } from '@remix-run/react';

import { Badge } from '../ui/badge';

export const Skills = () => {
  return (
    <div className="flex flex-col items-center relative section-padding z-10 bg-background" id="skills">
      <div className="grid md:grid-cols-2 w-full mx-auto max-w-7xl container">
        <div className=" order-0 md:order-2 text-right my-auto">
          <Badge variant="outline" className="px-6 py-2">
            Skills
          </Badge>
          <h3 className="mt-2 text-3xl sm:text-4xl lg:text-5xl mb-2 font-bold">Skills & Experience</h3>

          <p className="text-sm text-muted-foreground">
            Visit my{' '}
            <Link
              to="https://www.linkedin.com/in/laurynas-valiulis"
              rel="noreferrer"
              target="_blank"
              className="text-primary"
            >
              LinkedIn
            </Link>
          </p>
        </div>
        <div className="mt-12 text-center flex flex-wrap gap-6 lg:w-4/5 justify-center md:justify-start">
          <div>
            <svg viewBox="0 0 180 180" className=" w-8 h-8 md:h-12 md:w-12 mx-auto ">
              <mask id=":r8:mask0_408_134" maskUnits="userSpaceOnUse" x="0" y="0" style={{ maskType: 'alpha' }}>
                <circle cx="90" cy="90" r="90"></circle>
              </mask>
              <g mask="url(#:r8:mask0_408_134)">
                <path
                  d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                  fill="url(#:r8:paint0_linear_408_134)"
                ></path>
                <rect fill="url(#:r8:paint1_linear_408_134)" height="72" width="12" x="115" y="54"></rect>
              </g>
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id=":r8:paint0_linear_408_134"
                  x1="109"
                  x2="144.5"
                  y1="116.5"
                  y2="160.5"
                >
                  <stop stopColor="white"></stop>
                  <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id=":r8:paint1_linear_408_134"
                  x1="121"
                  x2="120.799"
                  y1="54"
                  y2="106.875"
                >
                  <stop stopColor="white"></stop>
                  <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            <p className="uppercase text-muted-foreground text-xs">NextJs</p>
          </div>
          <div>
            <svg
              className="h-12 w-12 fill-foreground mx-auto"
              viewBox="0 0 800 800"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M587.947 527.768C592.201 582.418 592.201 608.036 592.201 636H465.756C465.756 629.909 465.865 624.337 465.975 618.687C466.317 601.123 466.674 582.807 463.828 545.819C460.067 491.667 436.748 479.634 393.871 479.634H355.883H195V381.109H399.889C454.049 381.109 481.13 364.633 481.13 321.011C481.13 282.654 454.049 259.41 399.889 259.41H195V163H422.456C545.069 163 606 220.912 606 313.42C606 382.613 563.123 427.739 505.201 435.26C554.096 445.037 582.681 472.865 587.947 527.768Z"
              />
              <path d="M195 636V562.553H328.697C351.029 562.553 355.878 579.116 355.878 588.994V636H195Z" />
            </svg>
            <p className="uppercase text-muted-foreground text-xs">Remix.run</p>
          </div>
          <div>
            <img src="/remix.svg" alt="My logo" className="w-8 h-8 md:h-12 md:w-12 mx-auto" />
            <p className="uppercase text-muted-foreground text-xs">React</p>
          </div>
          <div>
            <img src="/remix.svg" alt="My logo" className="w-8 h-8 md:h-12 md:w-12 mx-auto" />
            <p className="uppercase text-muted-foreground text-xs">NodeJs</p>
          </div>
          <div>
            <img src="/remix.svg" alt="My logo" className="w-8 h-8 md:h-12 md:w-12 mx-auto" />
            <p className="uppercase text-muted-foreground text-xs">Docker</p>
          </div>
          <div>
            <img src="/remix.svg" alt="My logo" className="w-8 h-8 md:h-12 md:w-12 mx-auto" />
            <p className="uppercase text-muted-foreground text-xs">HTML</p>
          </div>
          <div>
            <img src="/remix.svg" alt="My logo" className="w-8 h-8 md:h-12 md:w-12 mx-auto" />
            <p className="uppercase text-muted-foreground text-xs">CSS</p>
          </div>
          <div>
            <img src="/remix.svg" alt="My logo" className="w-8 h-8 md:h-12 md:w-12 mx-auto" />
            <p className="uppercase text-muted-foreground text-xs">Javascript</p>
          </div>
          <div>
            <img src="/remix.svg" alt="My logo" className="w-8 h-8 md:h-12 md:w-12 mx-auto" />
            <p className="uppercase text-muted-foreground text-xs">Typescript</p>
          </div>
          <div>
            <img src="/remix.svg" alt="My logo" className="w-8 h-8 md:h-12 md:w-12 mx-auto" />
            <p className="uppercase text-muted-foreground text-xs">GraphQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Centered
{
  /* <div className="mx-auto flex flex-col items-center relative pb-40">
  <div className="text-center">
    <Badge variant="outline" className="px-6 py-2">
      Skills
    </Badge>
    <h3 className="mt-4 text-5xl font-bold">Skills & Experience</h3>

    <p className="mt-2 text-muted-foreground text-c">
      Visit my{' '}
      <Link
        to="https://www.linkedin.com/in/laurynas-valiulis"
        rel="noreferrer"
        target="_blank"
        className="text-primary"
      >
        LinkedIn
      </Link>
    </p>
  </div>
  <div className="mt-12 grid grid-cols-5 text-center gap-8">
    <div>Nextjs</div>
    <div>RemixJs</div>
    <div>React</div>
    <div>NodeJs</div>
    <div>Docker</div>
    <div>Html</div>
    <div>CSS</div>
    <div>Javascript</div>
    <div>Typescript</div>
    <div>GraphQL</div>
  </div>
</div> */
}
