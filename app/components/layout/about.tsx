import { Badge } from '../ui/badge';

export const About = () => {
  return (
    <div className="grid grid-cols-2 gap-20 ">
      <div className="my-auto">
        <Badge variant="outline" className="px-6 py-2">
          ABOUT
        </Badge>
        <h2 className="mt-2 text-5xl mb-2 font-bold">Web Developer</h2>
        <p className="text-muted-foreground">
          I am a 19 year old programmer with a thrive to solve your problems. Currently i am following my passion for
          web development and constantly learning about new technologies and growing both professionally and personally.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img src="me.jpeg" alt="me" className="rounded-xl h-2/3 " />
      </div>
    </div>
  );
};
