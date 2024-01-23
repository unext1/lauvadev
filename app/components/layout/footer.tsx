import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

const Footer = () => {
  const navigation = [
    {
      name: 'GitHub',
      href: 'https://github.com/unext1',
      icon: <GitHubLogoIcon className="w-5 h-5" />
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/laurynas-valiulis-787628242/',
      icon: <LinkedInLogoIcon className="w-5 h-5" />
    }
  ];
  return (
    <>
      <footer className="mx-auto max-w-7xl md:flex md:items-center md:justify-between">
        <div className="md:order-2 group">
          <div className="block">
            <p className="mb-3 text-xs text-center md:text-right uppercase text-muted-foreground">SOCIALS</p>
          </div>
          <div className="flex justify-center md:justify-end space-x-6">
            {navigation.map((item) => (
              <a
                rel="noreferrer"
                key={item.name}
                href={item.href}
                target="_blank"
                className="text-white hover:text-primary transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-sm text-center text-muted-foreground">&copy; 2024 Lauva. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
