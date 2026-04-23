import useTelegram from "../../hooks/useTelegram";
import s from "./Contact.module.scss";
import { useForm, type SubmitHandler } from "react-hook-form";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const Token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  const { sendMessage, isLoading, isShow } = useTelegram({
    botToken: Token,
    defaultChatId: chatId,
    showNotifications: true,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await sendMessage({
      text: `Name: ${data.name}
Email: ${data.email}
Message: ${data.message}`,
      parseMode: "Markdown",
      silent: false,
    });
  };

  return (
    <section className={s.contact} id="contact_section">
      <div className={s.container}>
        <h2 className={s.title}>Send me a message!</h2>

        <h3 className={s.subtitle}>
          Have any questions or proposals? Just want to say hello? Please do 😄.
        </h3>

        <form
          className={s.form}
          style={{
            gap: `${isShow && "0px"}`,
            paddingBottom: `${isShow && "0px"}`,
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          {isShow ? (
            <>
              <h2 className={s.title}>
                Thank you for your message! I'll get back to you soon!😊
              </h2>

              <DotLottieReact
                src="https://lottie.host/8c99e605-6855-460d-9d3b-c4f21846e001/hrWh04SyCQ.lottie"
                autoplay
              />
            </>
          ) : (
            <>
              <img
                className={s.img}
                src="/phone.svg"
                alt="phone"
                loading="lazy"
              />

              <label className={s.label}>
                <h4 className={s.text}>Name</h4>
                <input
                  className={s.inp}
                  type="text"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p className={s.error}>Please enter a valid name.</p>
                )}
              </label>

              <label className={s.label}>
                <h4 className={s.text}>Email</h4>
                <input
                  className={s.inp}
                  type="email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className={s.error}>Email must contain @.</p>
                )}
              </label>

              <label className={s.label}>
                <h4 className={s.text}>Message</h4>
                <textarea
                  className={s.inp}
                  {...register("message", { required: true })}
                ></textarea>
                {errors.message && (
                  <p className={s.error}>
                    Please don't leave the message empty
                  </p>
                )}
              </label>

              <button className={s.btn} type="submit" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send"}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
