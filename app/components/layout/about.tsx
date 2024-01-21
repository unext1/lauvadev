import { Badge } from '../ui/badge';

export const About = () => {
  return (
    <div className="section-padding z-10 relative bg-background" id="about">
      <div className="mx-auto max-w-7xl container grid md:grid-cols-2 gap-16 ">
        <div className="my-auto ">
          <Badge variant="outline" className="px-6 py-2">
            About
          </Badge>
          <h3 className="mt-2 text-3xl sm:text-4xl lg:text-5xl mb-2 font-bold">Web Developer</h3>
          <p className="text-sm text-muted-foreground">
            I am a 19 year old programmer with a thrive to solve your problems. Currently i am following my passion for
            web development and constantly learning about new technologies and growing both professionally and
            personally.
          </p>
        </div>
        <div className="flex justify-center items-center ">
          {/* <img src="me.jpeg" alt="me" className="rounded-xl my-auto w-1/2 sm:w-full" /> */}
          <div className="rounded-xl my-auto h-[350px] w-full sm:w-full bg-primary" />
        </div>
      </div>
    </div>
  );
};
