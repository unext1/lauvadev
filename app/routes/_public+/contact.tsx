import { MailIcon } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="flex sticky top-0 right-0 h-screen w-full flex-col items-center mt-12 section-padding">
      <a
        href="mailto:info@lauva.dev"
        className="inline-flex items-center rounded-lg bg-secondary/30 px-3 py-1 text-sm font-medium"
      >
        <MailIcon /> <div data-orientation="vertical" role="none" className="shrink-0 bg-border w-[1px] mx-2 h-4"></div>{' '}
        <span className="inline">Send me a mail</span>
      </a>
      <h1 className="text-6xl text-center font-extrabold xl:text-7xl mt-2">Let&apos;s work togheter !</h1>
      <p className="mt-2 font-semibold text-muted-foreground text-center px-8">info@lauva.dev</p>
    </div>
  );
};

export default ContactPage;
