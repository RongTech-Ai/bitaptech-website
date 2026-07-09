import { NextResponse } from "next/server";
import { MailerService } from "@/lib/mailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    await MailerService.sendDemoRequestEmail({
      name,
      email,
      company: company || "",
      phone: phone || "",
      message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in /api/book-demo route:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal Server Error" },
      { status: 500 },
    );
  }
}
