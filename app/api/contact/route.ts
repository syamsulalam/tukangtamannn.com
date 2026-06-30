import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge"; // Run on Cloudflare edge runtime

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, service, message, honeypot } = body;

    // 1. Honeypot Validation (Spam Protection)
    if (honeypot) {
      console.warn("[CONTACT FORM] Spam bot detected and blocked via honeypot field.");
      return NextResponse.json(
        { success: true, message: "Pesan terkirim!" }, // Return 200 to trick bots
        { status: 200 }
      );
    }

    // 2. Server-side Validation
    if (!name || !phone || !service || !message) {
      return NextResponse.json(
        { success: false, message: "Seluruh kolom wajib diisi." },
        { status: 400 }
      );
    }

    const fromEmail = "notifikasi@tukangtamannn.com";
    const toEmail = "email@tukangtamannn.com";
    const subject = `Lead Baru: ${name} (${service.toUpperCase()})`;

    // Check all possible places for Cloudflare Email Routing binding (named SE_MAILER)
    // next-on-pages puts bindings in process.env or global env objects
    const env = (process.env as any) || (globalThis as any) || {};
    const mailer = env.SE_MAILER || (globalThis as any).SE_MAILER || (globalThis as any).env?.SE_MAILER;

    if (!mailer) {
      console.warn(
        "[CONTACT FORM] Binding 'SE_MAILER' not found. App is running in Local Simulation Mode. Email content logged below:"
      );
      console.log(`--- SIMULATED EMAIL ---`);
      console.log(`From: ${fromEmail}`);
      console.log(`To: ${toEmail}`);
      console.log(`Subject: ${subject}`);
      console.log(`Content:\nName: ${name}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`);
      console.log(`-----------------------`);

      return NextResponse.json({
        success: true,
        message: "Pesan Anda sukses terkirim ke TukangTamannn.com! (Mode Simulasi Lokal)",
        simulated: true,
      });
    }

    // 3. Dynamically import cloudflare:email to prevent local compilation errors
    const moduleName = "cloudflare:email";
    let EmailMessageClass: any = null;
    try {
      const emailModule = await import(moduleName);
      EmailMessageClass = emailModule.EmailMessage;
    } catch (importError) {
      console.error("[CONTACT FORM] Failed to import 'cloudflare:email'. Make sure you are running on Cloudflare Pages.", importError);
      return NextResponse.json(
        { 
          success: false, 
          message: "Internal Server Error: cloudflare:email module missing at runtime." 
        },
        { status: 500 }
      );
    }

    if (!EmailMessageClass) {
      return NextResponse.json(
        { success: false, message: "Gagal memproses modul pengiriman email." },
        { status: 500 }
      );
    }

    // 4. Construct raw MIME Message as required by Cloudflare's EmailMessage
    const mimeParts = [
      `From: "Notifikasi TukangTamannn" <${fromEmail}>`,
      `To: ${toEmail}`,
      `Subject: ${subject}`,
      `MIME-Version: 1.0`,
      `Content-Type: text/html; charset=utf-8`,
      `Content-Transfer-Encoding: 7bit`,
      ``,
      `
        <div style="font-family: sans-serif; padding: 24px; color: #1e293b; background-color: #fcfbf7; border-radius: 16px; border: 1px solid #e2e8f0; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a3c34; border-bottom: 2px solid #1a3c34; padding-bottom: 12px; margin-top: 0; font-size: 20px;">
            Lead Kontak Baru (TukangTamannn.com)
          </h2>
          <p style="font-size: 14px; line-height: 1.6; color: #334155;">
            Seseorang telah mengirimkan permintaan penawaran/survei baru melalui website:
          </p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 24px 0;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; font-size: 13px; color: #64748b; width: 35%;">Nama Lengkap</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #0f172a; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; font-size: 13px; color: #64748b;">No. WhatsApp</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #0f172a;">
                <a href="https://wa.me/${phone.replace(/[^0-9]/g, "")}" style="color: #1a3c34; font-weight: bold; text-decoration: none;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; font-size: 13px; color: #64748b;">Layanan Terpilih</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-size: 13px; color: #0f172a; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;">${service}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; font-size: 13px; color: #64748b; vertical-align: top; padding-top: 12px;">Cerita Proyek</td>
              <td style="padding: 10px; font-size: 14px; color: #334155; line-height: 1.6; background-color: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; padding-top: 12px; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          
          <div style="text-align: center; margin-top: 28px;">
            <a href="https://wa.me/${phone.replace(/[^0-9]/g, "")}" style="background-color: #1a3c34; color: #ffffff; padding: 14px 28px; text-decoration: none; font-weight: bold; border-radius: 12px; display: inline-block; font-size: 13px; letter-spacing: 0.5px; text-transform: uppercase; box-shadow: 0 4px 12px rgba(26, 60, 52, 0.15);">
              Balas via WhatsApp
            </a>
          </div>
          
          <p style="font-size: 11px; color: #94a3b8; text-align: center; margin-top: 40px; border-top: 1px solid #f1f5f9; padding-top: 16px;">
            Pesan otomatis dikirim oleh CV. SARIJAYA MAKMUR (TukangTamannn.com)
          </p>
        </div>
      `
    ];

    const rawMessage = mimeParts.join("\r\n");

    // 5. Send raw email via Cloudflare Pages SE_MAILER binding
    const emailInstance = new EmailMessageClass(fromEmail, toEmail, rawMessage);
    await mailer.send(emailInstance);

    return NextResponse.json({
      success: true,
      message: "Pesan Anda sukses terkirim ke TukangTamannn.com!",
    });

  } catch (error: any) {
    console.error("[CONTACT FORM API ERROR]:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: error.message || "Gagal memproses pengiriman form kontak." 
      },
      { status: 500 }
    );
  }
}
