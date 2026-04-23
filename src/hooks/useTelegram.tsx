import { useCallback, useState } from "react";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface TelegramMessage {
  text: string;
  chatId?: string;
  parseMode?: "HTML" | "MarkdownV2" | "Markdown";
  disableNotification?: boolean;
  silent?: boolean;
}

interface UseTelegramReturn {
  sendMessage: (message: TelegramMessage) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  isShow: boolean;
}

interface UseTelegramParams {
  botToken: string;
  defaultChatId: string;
  showNotifications?: boolean;
}

const useTelegram = ({
  botToken,
  defaultChatId,
  showNotifications = true,
}: UseTelegramParams): UseTelegramReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isShow, setIsShow] = useState(false);

  const sendMessage = useCallback(
    async ({
      text,
      chatId = defaultChatId,
      parseMode,
      disableNotification,
      silent = false,
    }: TelegramMessage) => {
      setIsLoading(true);
      setError(null);

      try {
        if (!botToken || !chatId) {
          throw new Error("Missing bot token or chat ID");
        }

        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        const { data } = await axios.post(url, {
          chat_id: chatId,
          text,
          parse_mode: parseMode,
          disable_notification: disableNotification,
        });

        if (showNotifications && !silent && data.ok) {
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      } catch (err) {
        const error = err as AxiosError<{ description?: string }>;
        const errorMessage =
          error.response?.data?.description ||
          error.message ||
          "Failed to send message";

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
    [botToken, defaultChatId, showNotifications]
  );

  return { sendMessage, isLoading, error, isShow };
};

export default useTelegram;
