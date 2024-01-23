import { Resend } from 'resend';
import { env } from '../env.server';

const resend = new Resend(env.RESEND_API_KEY);

export const sendEmail = async ({ email, subject, message }: { subject: string; message: string; email: string }) => {
  try {
    await resend.emails.send({
      from: 'info@lauva.dev',
      to: 'info@lauva.dev',
      subject,
      html: `
    <div>From: ${email}</div>
    <br/>
    <div>${message}</div>
    `
    });
  } catch (e) {
    console.error(e);
  }
};
