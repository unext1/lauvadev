import { type ActionFunctionArgs } from '@remix-run/node';
import { z } from 'zod';
import { zx } from 'zodix';
import { sendEmail } from '~/services/send-email.server';

export async function action({ request }: ActionFunctionArgs) {
  const { email, subject, message, checkbox } = await zx.parseForm(request, {
    email: z.string().email(),
    subject: z.string().min(1),
    message: z.string().min(1),
    checkbox: zx.CheckboxAsString
  });

  if (checkbox) {
    throw new Error('Bye');
  }
  await sendEmail({ email, subject, message });

  return { message: 'Email sent' };
}
