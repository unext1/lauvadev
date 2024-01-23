import { Link, useFetcher, useLocation } from '@remix-run/react';
import { LinkedinIcon, MailIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';

import { $path } from 'remix-routes';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

const ContactComponent = () => {
  const location = useLocation();
  const fetcher = useFetcher();
  const isAdding = fetcher.state === 'submitting' && fetcher.formData?.get('_action') == 'send';

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!isAdding) {
      formRef.current?.reset();
    }
  }, [fetcher, isAdding]);

  return (
    <div className="max-w-7xl flex justify-center flex-col mx-auto container section-padding" id="contact">
      <div className="my-8 rounded-xl grid md:grid-cols-2 gap-6 lg:gap-12">
        <div className="flex w-full flex-col items-start ">
          <Badge variant="outline" className="px-6 py-2">
            Contact
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-left font-bold mt-2 mb-2">
            Let&apos;s build something <br /> great togheter
          </h1>
          <p className="mt-2 text-muted-foreground text-left ">
            Turning your ideas into real life products is my calling.
          </p>
          <div className="mt-6 text-sm">
            <a className="flex items-center" href="mailto:info@lauva.dev">
              <MailIcon className="pr-2" /> info@lauva.dev
            </a>
          </div>
          <div className="mt-2 text-sm">
            <Link
              to="https://www.linkedin.com/in/laurynas-valiulis/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center"
            >
              <LinkedinIcon className="pr-2" /> /Laurynas-valiulis
            </Link>
          </div>
        </div>
        <fetcher.Form method="post" ref={formRef} action={$path('/api/send-mail')} key={location.key}>
          <div>
            <input type="checkbox" name="checkbox" className="hidden" />

            <Label htmlFor="email" className="text-xs">
              Your Email
            </Label>
            <Input placeholder="Email" name="email" type="email" required />
          </div>
          <div className="mt-4">
            <Label htmlFor="subject" className="text-xs">
              Subject
            </Label>
            <Input placeholder="Subject" name="subject" required />
          </div>
          <div className="mt-4">
            <Label htmlFor="message" className="text-xs">
              Message
            </Label>
            <Textarea rows={4} placeholder="Message" name="message" required />
          </div>
          <div className="flex md:justify-end">
            <Button variant="default" className="mt-6 " size="sm" name="_action" value="send" disabled={isAdding}>
              {isAdding ? 'Messaging...' : 'Message Me!'}
            </Button>
          </div>
          {fetcher.data ? <p className="text-right mt-6 text-muted-foreground text-sm">Thanks for messaging me</p> : ''}
        </fetcher.Form>
      </div>
    </div>
  );
};
export default ContactComponent;
