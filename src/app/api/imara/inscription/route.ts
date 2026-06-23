import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { formation, nom, prenom, email, telephone, ville, financement, message } = body;

  if (!formation || !nom || !prenom || !email || !telephone) {
    return NextResponse.json({ error: "Champs obligatoires manquants" }, { status: 400 });
  }

  try {
    // Email to Maryline (admin)
    await resend.emails.send({
      from: "Imara Institut <noreply@imarainstitut.com>",
      to: process.env.ADMIN_EMAIL ?? "contact@imarainstitut.com",
      subject: `Nouvelle inscription — ${formation}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #2A4A5E; margin-bottom: 8px;">Nouvelle demande d'inscription</h2>
          <p style="color: #6B6B6B; margin-bottom: 24px;">Reçue via le site Imara Institut</p>

          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #E8E4DF;">
              <td style="padding: 10px 0; color: #6B6B6B; width: 40%;">Formation souhaitée</td>
              <td style="padding: 10px 0; font-weight: 600; color: #2C2C2C;">${formation}</td>
            </tr>
            <tr style="border-bottom: 1px solid #E8E4DF;">
              <td style="padding: 10px 0; color: #6B6B6B;">Nom complet</td>
              <td style="padding: 10px 0; font-weight: 600; color: #2C2C2C;">${prenom} ${nom}</td>
            </tr>
            <tr style="border-bottom: 1px solid #E8E4DF;">
              <td style="padding: 10px 0; color: #6B6B6B;">Email</td>
              <td style="padding: 10px 0; color: #2C2C2C;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #E8E4DF;">
              <td style="padding: 10px 0; color: #6B6B6B;">Téléphone</td>
              <td style="padding: 10px 0; color: #2C2C2C;">${telephone}</td>
            </tr>
            <tr style="border-bottom: 1px solid #E8E4DF;">
              <td style="padding: 10px 0; color: #6B6B6B;">Ville</td>
              <td style="padding: 10px 0; color: #2C2C2C;">${ville || "—"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #E8E4DF;">
              <td style="padding: 10px 0; color: #6B6B6B;">Financement</td>
              <td style="padding: 10px 0; color: #2C2C2C;">${financement || "—"}</td>
            </tr>
            ${message ? `
            <tr>
              <td style="padding: 10px 0; color: #6B6B6B; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #2C2C2C;">${message}</td>
            </tr>` : ""}
          </table>

          <div style="margin-top: 32px; padding: 16px; background: #FAF8F5; border-radius: 8px;">
            <p style="margin: 0; color: #6B6B6B; font-size: 14px;">
              Répondre directement à : <a href="mailto:${email}" style="color: #2A4A5E;">${email}</a>
            </p>
          </div>
        </div>
      `,
    });

    // Confirmation email to candidate
    await resend.emails.send({
      from: "Imara Institut <noreply@imarainstitut.com>",
      to: email,
      subject: `Votre demande d'inscription a bien été reçue — ${formation}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #C4906A;">Bonjour ${prenom},</h2>
          <p style="color: #2C2C2C; line-height: 1.6;">
            Votre demande d'inscription à la formation <strong>${formation}</strong> a bien été reçue.
          </p>
          <p style="color: #2C2C2C; line-height: 1.6;">
            Notre chargée de formations, Maryline, vous contactera dans les <strong>48h</strong>
            pour confirmer les dates disponibles et les modalités de financement.
          </p>
          <div style="margin: 32px 0; padding: 20px; background: #FAF8F5; border-left: 4px solid #C4906A; border-radius: 4px;">
            <p style="margin: 0 0 8px; font-weight: 600; color: #2C2C2C;">Votre demande en résumé :</p>
            <p style="margin: 4px 0; color: #6B6B6B;">Formation : ${formation}</p>
            <p style="margin: 4px 0; color: #6B6B6B;">Financement : ${financement || "À définir"}</p>
          </div>
          <p style="color: #6B6B6B; font-size: 14px;">
            Une question urgente ? Contactez-nous sur Instagram <a href="https://www.instagram.com/imara.institut/" style="color: #C4906A;">@imara.institut</a>
          </p>
          <p style="color: #6B6B6B; font-size: 14px; margin-top: 32px;">
            L'équipe Imara Institut · Lieusaint (77127)
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Erreur envoi email" }, { status: 500 });
  }
}
