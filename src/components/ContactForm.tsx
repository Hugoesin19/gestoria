"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!privacyAccepted) {
      setStatus("error");
      setFeedback("Debe aceptar la Política de Privacidad para continuar.");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
          privacyAccepted: true,
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        setStatus("error");
        setFeedback(json.error ?? "Error al enviar el mensaje.");
        return;
      }

      setStatus("success");
      setFeedback(json.message);
      form.reset();
      setPrivacyAccepted(false);
    } catch {
      setStatus("error");
      setFeedback("Error de conexión. Compruebe su red o llámenos por teléfono.");
    }
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-olive/15 bg-cream/80 focus:outline-none focus:ring-2 focus:ring-olive/25 focus:border-olive/30 text-base transition-shadow";

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-olive-dark mb-1.5">
            Nombre <span className="text-olive">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            autoComplete="name"
            className={inputClass}
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-olive-dark mb-1.5">
            Teléfono
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="600 000 000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-olive-dark mb-1.5">
          Email <span className="text-olive">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
          placeholder="tu@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-olive-dark mb-1.5">
          Mensaje <span className="text-olive">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          minLength={10}
          className={`${inputClass} resize-none`}
          placeholder="Cuéntenos en qué podemos ayudarle: trámite, consulta fiscal, alta de autónomo…"
        />
      </div>

      <div className="flex items-start gap-3 pt-1">
        <input
          id="privacy"
          name="privacy"
          type="checkbox"
          checked={privacyAccepted}
          onChange={(e) => setPrivacyAccepted(e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-olive/30 text-olive focus:ring-olive/40 shrink-0"
        />
        <label htmlFor="privacy" className="text-sm text-olive-dark/80 leading-snug">
          He leído y acepto la{" "}
          <Link href="/politica-privacidad" className="text-olive font-semibold hover:underline">
            Política de Privacidad
          </Link>
          . <span className="text-olive">*</span>
        </label>
      </div>

      {status === "success" && (
        <div className="flex gap-2 items-start p-4 rounded-lg bg-olive/10 border border-olive/20 text-olive-dark text-sm">
          <CheckCircle className="shrink-0 text-olive mt-0.5" size={18} />
          <p>{feedback}</p>
        </div>
      )}

      {status === "error" && (
        <div className="flex gap-2 items-start p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm">
          <AlertCircle className="shrink-0 mt-0.5" size={18} />
          <p>{feedback}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={!privacyAccepted || status === "loading"}
        className="w-full flex items-center justify-center gap-2 bg-olive text-white px-6 py-3.5 rounded-xl font-bold hover:bg-olive-dark transition-all shadow-lg shadow-olive/20 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-olive disabled:hover:translate-y-0 disabled:shadow-none"
      >
        <Send size={18} />
        {status === "loading" ? "Enviando…" : "Enviar mensaje"}
      </button>

      <p className="text-xs text-olive-dark/50 leading-relaxed">
        Los campos marcados con * son obligatorios. Sus datos se tratarán conforme a nuestra Política
        de Privacidad únicamente para atender su consulta.
      </p>
    </form>
  );
}
