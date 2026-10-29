import { NextResponse } from 'next/server';

const DEFAULT_RECIPIENT = 'diditanael@gmail.com';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(value: unknown, maxLength = 200) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = field(body.name);
    const email = field(body.email);
    const phone = field(body.phone, 50);
    const service = field(body.service);
    const budget = field(body.budget);
    const message = field(body.message, 5000);

    if (!name || !EMAIL_PATTERN.test(email) || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_EMAIL_FROM;
    const to = process.env.CONTACT_EMAIL_TO || DEFAULT_RECIPIENT;

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
        to: [to],
        reply_to: email,
        subject: `Nouvelle demande de projet - ${name}`,
        text: [
          'Nouvelle demande depuis le site Codorah',
          '',
          `Nom : ${name}`,
          `Email : ${email}`,
          `Téléphone / WhatsApp : ${phone || 'Non renseigné'}`,
          `Besoin : ${service || 'Non renseigné'}`,
          `Budget : ${budget || 'Non renseigné'}`,
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
