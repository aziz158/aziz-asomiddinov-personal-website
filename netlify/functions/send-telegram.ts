export const handler = async (event: {
  httpMethod: string;
  body: string | null;
}) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server misconfiguration" }),
    };
  }

  let text: string;
  try {
    ({ text } = JSON.parse(event.body ?? "{}"));
    if (!text) throw new Error("missing text");
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid request body" }),
    };
  }

  const response = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "Markdown" }),
    }
  );

  const data = (await response.json()) as { ok: boolean; description?: string };

  if (!data.ok) {
    return {
      statusCode: 502,
      body: JSON.stringify({ error: data.description ?? "Telegram API error" }),
    };
  }

  return { statusCode: 200, body: JSON.stringify({ ok: true }) };
};
