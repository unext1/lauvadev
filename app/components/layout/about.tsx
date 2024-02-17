import { motion } from 'framer-motion';
import { Badge } from '../ui/badge';
import { sectionVariant } from '~/lib/section-variant';
import { OptimizedImage } from '../image';

export const About = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 'some' }}
      variants={sectionVariant}
      className="section-padding z-10 relative bg-background scroll-m-20"
      id="about"
    >
      <div className="mx-auto max-w-7xl container grid md:grid-cols-2 gap-16 ">
        <div className="my-auto ">
          <Badge variant="outline" className="px-6 py-2">
            About
          </Badge>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl mb-2 font-bold">Web Developer</h2>
          <p className="text-sm md:text-base text-muted-foreground">
            I&apos;m a 20 year old programmer driven for delivering effective solutions with a strong focus on problem
            solving. My current focus revolves around my passion for web development, where I am actively staying up to
            date with new technologiess and techniques. Continual learning is a core of my professional and personal
            growth.
          </p>
        </div>
        <div className="flex justify-center items-center ">
          <div className="rounded-md my-auto w-64 h-64 absolute">
            <OptimizedImage src="/peace.webp" alt="me" layout="fixed" height={256} width={256} />
          </div>
          <div className="rounded-md my-auto h-[350px] w-full sm:w-full bg-muted/30" />
        </div>
      </div>
    </motion.div>
  );
};
