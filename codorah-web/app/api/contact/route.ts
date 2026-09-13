import { NextResponse } from 'next/server';

const RECIPIENT = 'diditanael@gmail.com';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
    const service = typeof body.service === 'string' ? body.service.trim() : '';
    const budget = typeof body.budget === 'string' ? body.budget.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_EMAIL_FROM;

    if (!apiKey || !from) {
      console.error('Contact email is not configured.');
      return NextResponse.json({ error: 'Email service is not configured.' }, { status: 503 });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [RECIPIENT],
        reply_to: email,
        subject: `Nouvelle demande de rendez-vous - ${name}`,
        text: [
          'Nouvelle demande depuis le site Codorah',
          '',
          `Nom : ${name}`,
          `Email : ${email}`,
          `T?l?phone / WhatsApp : ${phone || 'Non renseign?'}`,
          `Besoin : ${service || 'Non renseign?'}`,
          `Budget : ${budget || 'Non renseign?'}`,
          '',
          'Message :',
          message,
        ].join('\n'),
      }),
    });

    if (!response.ok) {
      console.error('Resend rejected the contact email.', await response.text());
      return NextResponse.json({ error: 'Unable to send the email.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form error.', error);
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
}
