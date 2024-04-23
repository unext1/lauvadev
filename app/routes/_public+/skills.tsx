import { type MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import { sectionVariant } from '~/lib/section-variant';

export const meta: MetaFunction = ({ location }) => {
  return [
    {
      title: 'Laurynas Valiulis | Skills'
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

const skills = [
  {
    category: 'Web Skills',
    skills: [
      {
        name: 'HTML/CSS/JavaScript/APIs',
        description:
          'These foundational technologies have been my toolkit since the beginning. Completed course at Yrkeshögskolan.',
        years: '5'
      },
      {
        name: 'TypeScript',
        description:
          'Good understanding of TypeScript. Promoting code maintainability, writing clean code and preventing type related errors.',
        years: '3'
      },
      {
        name: 'NextJS',
        description:
          'NextJS helped me build a deep understanding of creating modern web applications with efficient server-side rendering and static site generation.',
        years: '2'
      },
      {
        name: 'Remix.run',
        description:
          "Remix.run allows me to create powerful and efficient web applications quickly. It's been my go to framework for the past few years. Remix enhances my creativity and gives me more freedom.",
        years: '2'
      },
      {
        name: 'DrizzleORM',
        description: 'I utilize DrizzleORM for consistent and efficient database interaction across various projects.',
        years: '1'
      }
    ]
  },
  {
    category: 'Server Skills',
    skills: [
      {
        name: 'NodeJS',
        description:
          'Creating custom API routes and running quick servers. Completed a NodeJS course at Yrkeshögskolan.',
        years: '4'
      },
      {
        name: 'Docker',
        description:
          "I’m comfortable using Docker to manage containerized applications. This includes tasks such as running my own Docker instances, creating images, and using containers for various purposes. Docker has become one of my go to tools for me, especially in web application development. Whether I'm setting up a backend like Turso or preparing for hosting on platforms like Oracle Cloud or Nginx, Docker simplifies the process and provides me consistency and easy deployment.",
        years: '2'
      }
    ]
  },
  {
    category: 'Database Skills',
    skills: [
      {
        name: 'Hasura',
        description:
          'I use hasura for real-time data management. I have built powerful applications which allowed me to create seamless user experiences.',
        years: '2'
      },
      {
        name: 'NoSQL/Firebase',
        description:
          "First database I ever used was Firebase. It’s an easy to use tool for small applications, but I've moved to more scalable approaches.",
        years: '1'
      },
      {
        name: 'SQLite',
        description: '',
        years: '2'
      },
      {
        name: 'MongoDB',
        description: '',
        years: '1'
      },
      {
        name: 'Turso',
        description:
          'Good understanding of Turso. I have built powerful applications which allowed me to create seamless user experiences. I utilize the ability of creating multiple databases.',
        years: '1'
      }
    ]
  },
  {
    category: 'Cloud Skills',
    skills: [
      {
        name: 'Oracle Cloud',
        description:
          'Has allowed me to get a great understanding of server management. I have created VM and private tunels. Currently, I use Oracle as an alternative to Vercel/Web hosting platforms.',
        years: '2'
      },
      {
        name: 'Cloudflare (d1/r2)',
        description:
          'I use Cloudflare for multiple purposes. Its my domain storage and i have been exploring its database and image storage capabilities.',
        years: '1'
      }
    ]
  },
  {
    category: 'System Skills',
    skills: [
      {
        name: 'Ubuntu/Linux',
        description: 'Comfortable working with Ubuntu/Linux operating systems.',
        years: '3'
      },
      {
        name: 'MacOS',
        description: "It's my primary operating system for programming tasks",
        years: '2'
      },
      {
        name: 'Bash',
        description:
          'Utilizing Bash scripting to automate tasks, improve consistency, and streamline deployment processes.',
        years: '1'
      }
    ]
  },
  {
    category: 'Design Skills',
    skills: [
      {
        name: 'TailwindCSS',
        description:
          "Proficient in TailwindCSS. It's a great tool, which enables me the quick creation of clean and responsive user interfaces.",
        years: '3'
      },
      {
        name: 'Shadcn',
        description:
          'Combine TailwindCSS with Shadcn to efficiently build visually appealing user interfaces that are both functional and aesthetically pleasing.',
        years: '1'
      },
      {
        name: 'Figma',
        description:
          ' Experience collaborating with designers using Figma and creating personal mockups. Completed a Figma course at Yrkeshögskolan.',
        years: '1'
      }
    ]
  }
];

const WorkPage = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 'some' }}
      variants={sectionVariant}
      className="flex flex-col items-center relative section-padding z-10 bg-background scroll-m-20 mt-12"
      id="portfolio"
    >
      <div className="my-auto mx-auto container max-w-7xl  ">
        <div className="text-center mb-8">
          <Badge variant="outline" className="px-6 py-2 text-center">
            Skills
          </Badge>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl mb-2 font-bold">My Skills & Experience</h2>
          <div className="text-sm md:text-base text-muted-foreground text-center">
            Visit my
            <Button variant="link" className="p-0 ml-1 border-none outline-none">
              <Link to="https://www.linkedin.com/in/laurynas-valiulis" rel="noreferrer" target="_blank">
                LinkedIn
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          {skills.map((category) => (
            <div key={category.category} className="bg-muted/30 px-4 py-6 md:px-8 md:py-12 bg rounded-lg">
              <Badge variant="outline" className="px-6 py-2 text-center mb-4">
                {category.category}
              </Badge>
              <div className="flex flex-col space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="font-semibold">{skill.name}</div>
                    <div className="text-sm">{skill.description}</div>
                    <div className="text-muted-foreground text-sm">
                      {Number(skill.years) <= 1 ? `${skill.years} year` : `${skill.years} years`} experience
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WorkPage;
