import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface TelegramMessage {
  text: string;
  silent?: boolean;
}

interface UseTelegramReturn {
  sendMessage: (message: TelegramMessage) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  isShow: boolean;
}

interface UseTelegramParams {
  showNotifications?: boolean;
}

const useTelegram = ({
  showNotifications = true,
}: UseTelegramParams = {}): UseTelegramReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isShow, setIsShow] = useState(false);

  const sendMessage = useCallback(
    async ({ text, silent = false }: TelegramMessage) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("/.netlify/functions/send-telegram", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text }),
        });

        const data = (await response.json()) as { ok?: boolean; error?: string };

        if (!response.ok || !data.ok) {
          throw new Error(data.error ?? "Failed to send message");
        }

        if (showNotifications && !silent) {
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to send message";

        setError(errorMessage);

        if (showNotifications && !silent) {
          toast.error(`Error: ${errorMessage}`, {
            position: "top-right",
            autoClose: 5000,
          });
        }

        throw new Error(errorMessage);
      } finally {
        setIsLoading(false);
        setIsShow(true);
      }
    },
    [showNotifications]
  );

  return { sendMessage, isLoading, error, isShow };
};

export default useTelegram;
