import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ ok: false });

  // Demo: we loggen alleen. In productie stuur je dit naar Mailchimp/Brevo/Supabase.
  try {
    const body = req.body;
    console.log("Notify signup (demo):", body);
    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ ok: false });
  }
}
