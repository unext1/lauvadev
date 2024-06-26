import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';

import { Badge } from '~/components/ui/badge';
import { sectionVariant } from '~/lib/section-variant';
import {
  CSSIcon,
  DockerIcon,
  DrizzleIcon,
  GraphQLIcon,
  HTMLIcon,
  JavascriptIcon,
  NextJsIcon,
  NodeJsIcon,
  ReactIcon,
  RemixIcon,
  TailwindIcon,
  TypescriptIcon
} from '~/components/icons';
import { Button } from '../ui/button';
import { $path } from 'remix-routes';

const skills = [
  {
    name: 'Remix.run',
    icon: <RemixIcon />
  },
  {
    name: 'NextJs',
    icon: <NextJsIcon />
  },
  {
    name: 'React',
    icon: <ReactIcon />
  },
  {
    name: 'NodeJS',
    icon: <NodeJsIcon />
  },
  {
    name: 'Docker',
    icon: <DockerIcon />
  },
  {
    name: 'HTML',
    icon: <HTMLIcon />
  },
  {
    name: 'CSS',
    icon: <CSSIcon />
  },
  {
    name: 'Tailwind',
    icon: <TailwindIcon />
  },
  {
    name: 'Javascript',
    icon: <JavascriptIcon />
  },
  {
    name: 'Typescript',
    icon: <TypescriptIcon />
  },
  {
    name: 'GraphQL',
    icon: <GraphQLIcon />
  },
  {
    name: 'DrizzleORM',
    icon: <DrizzleIcon />
  }
];

export const Skills = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 'some' }}
      variants={sectionVariant}
      className="flex flex-col items-center relative section-padding z-10 bg-background scroll-m-20"
      id="skills"
    >
      <div className="grid md:grid-cols-2 w-full mx-auto max-w-7xl container">
        <div className=" order-0 md:order-2 text-right my-auto">
          <Badge variant="outline" className="px-6 py-2">
            Skills
          </Badge>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl mb-2 font-bold">Skills & Experience</h2>

          <div className="text-sm md:text-base text-muted-foreground">
            Visit my
            <Button variant="link" className="p-0 ml-1 border-none outline-none">
              <Link to="https://www.linkedin.com/in/laurynas-valiulis" rel="noreferrer" target="_blank">
                LinkedIn
              </Link>
            </Button>
          </div>
        </div>
        <div>
          <div className="mt-12 text-center flex flex-wrap gap-6 lg:w-4/5 justify-center md:justify-start">
            {skills.map((skill) => (
              <div key={skill.name}>
                {skill.icon}
                <p className="uppercase text-muted-foreground mt-2 text-xs">{skill.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 underline underline-offset-4">
            <Link to={$path('/skills')} className="text-xs  underline uppercase font-bold">
              Check out my skills in depth
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
