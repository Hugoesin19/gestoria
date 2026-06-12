import { NextResponse } from "next/server";
import { legal } from "@/lib/legal";

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  privacyAccepted?: boolean;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendEmail(payload: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  const to = process.env.CONTACT_TO_EMAIL || legal.contactEmail;
  const from = process.env.CONTACT_FROM_EMAIL || legal.contactEmail;

  if (process.env.RESEND_API_KEY) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: payload.email,
        subject: `Consulta web — ${payload.name}`,
        text: [
          `Nombre: ${payload.name}`,
          `Email: ${payload.email}`,
          `Teléfono: ${payload.phone || "No indicado"}`,
          "",
          "Mensaje:",
          payload.message,
          "",
          "— Enviado desde el formulario de contacto (consentimiento RGPD aceptado)",
        ].join("\n"),
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Resend error: ${err}`);
    }
    return;
  }

  if (process.env.NODE_ENV === "development") {
    console.info("[contact] Mensaje validado (sin envío configurado):", payload);
    return;
  }

  throw new Error("EMAIL_NOT_CONFIGURED");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;

    if (!body.privacyAccepted) {
      return NextResponse.json(
        { error: "Debe aceptar la Política de Privacidad para enviar el formulario." },
        { status: 400 }
      );
    }

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || name.length < 2) {
      return NextResponse.json({ error: "Indique su nombre." }, { status: 400 });
    }
    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Indique un email válido." }, { status: 400 });
    }
    if (!message || message.length < 10) {
      return NextResponse.json(
        { error: "El mensaje debe tener al menos 10 caracteres." },
        { status: 400 }
      );
    }

    await sendEmail({ name, email, phone, message });

    return NextResponse.json({
      ok: true,
      message: "Mensaje enviado correctamente. Nos pondremos en contacto con usted lo antes posible.",
    });
  } catch (error) {
    if (error instanceof Error && error.message === "EMAIL_NOT_CONFIGURED") {
      return NextResponse.json(
        {
          error:
            "El formulario no puede enviar correos todavía. Configure RESEND_API_KEY en el servidor (ver .env.example).",
        },
        { status: 503 }
      );
    }

    console.error("[contact]", error);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Inténtelo de nuevo o llámenos por teléfono." },
      { status: 500 }
    );
  }
}
