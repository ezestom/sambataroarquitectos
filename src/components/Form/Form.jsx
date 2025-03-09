import { useState, useEffect } from 'react';
import { toast, Toaster } from 'sonner';
import './Form.css';
// import ReCAPTCHA from "react-google-recaptcha";

export function Form({
  name,
  name_placeholder,
  company,
  company_placeholder,
  email,
  email_placeholder,
  phone,
  phone_placeholder,
  message,
  message_placeholder,
  send,
  message_2,
}) {
  const [isLoading, setIsLoading] = useState(false);

  // const captcha = useRef(null);

  useEffect(() => {
    if (isMessageSuccess()) {
      toast('Information successfully submitted! Thank you for your trust.', {
        type: 'success',
      });
    }
  }, []); // Agrega las dependencias aquí

  const isMessageSuccess = () => {
    return new URLSearchParams(window.location.search).get('success') === 'true';
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    setIsLoading(true);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server responded with ${response.status}: ${errorText}`);
      }

      toast('Information successfully submitted! Thank you for your trust.', {
        type: 'success',
      });

      setTimeout(() => {
        const isEnglish = window.location.pathname.startsWith('/en');
        const redirectTo = isEnglish ? '/en/home' : '/';

        window.location.href = redirectTo;
        setIsLoading(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(
        `There was a problem submitting the form, please try again. (Error: ${error.message})`
      );
      setIsLoading(false);
    }
  };

  // recaptcha v2 function

  // const onChange = () => {
  //   if (captcha.current.getValue()) {
  //     setIsDisabled(false);
  //   } else {
  //     setIsDisabled(true);
  //   }

  return (
    <div className="relative h-full w-full ">
      <Toaster />
      <form
        onSubmit={handleSubmit}
        method="POST"
        action="https://formsubmit.co/alfio777@gmail.com"
        // action="https://formsubmit.co/ezequielstom@gmail.com"
        className="mx-2 mt-2"
      >
        {/* Indicador de carga */}
        {isLoading && (
          <div className="absolute bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center rounded-3xl bg-white/10 opacity-50 backdrop-blur">
            <span className="loader"></span>
          </div>
        )}

        {/* Campos ocultos necesarios para el backend */}
        <input type="hidden" name="_cc" value="ezequielstom@gmail.com" />
        <input type="hidden" name="_subject" value="🏗️ Sambataro Arq. | 📩 Nuevo Mensaje!" />
        <input
          type="hidden"
          name="_autoresponse"
          value="¡Gracias por tu mensaje! Nos pondremos en contacto pronto."
        />
        <input type="hidden" name="_captcha" value="false" />

        {/* Campo para Nombre */}
        <div className="col-span-6 mt-2 sm:col-span-3">
          <label htmlFor="name" className="text-gray-700 block text-base font-medium">
            {name}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder={name_placeholder}
            required
            className="border-gray-200 text-gray-700 my-2 w-full rounded-md bg-white p-2 text-base shadow-sm"
          />
        </div>

        {/* Campo para Compañía */}
        <div className="col-span-6 mt-2 sm:col-span-3">
          <label htmlFor="company" className="text-gray-700 block text-base font-medium">
            {company}
          </label>
          <input
            type="text"
            name="company"
            id="company"
            placeholder={company_placeholder}
            required
            className="border-gray-200 text-gray-700 my-2 w-full rounded-md bg-white p-2 text-base shadow-sm"
          />
        </div>

        {/* Campo para Correo Electrónico */}
        <div className="col-span-6 mt-2 sm:col-span-3">
          <label htmlFor="email" className="text-gray-700 block text-base font-medium">
            {email}
          </label>
          <input
            className="border-gray-200 text-gray-700 my-2 w-full rounded-md bg-white p-2 text-base shadow-sm"
            type="email"
            name="email"
            id="email"
            required
            placeholder={email_placeholder}
          />
        </div>
        {/* Campo para Teléfono */}
        <div className="col-span-6 mt-2 sm:col-span-3">
          <label htmlFor="phone" className="text-gray-700 block text-base font-medium">
            {phone}
          </label>
          <input
            className="border-gray-200 text-gray-700 my-2 w-full rounded-md bg-white p-2 text-base shadow-sm"
            type="phone"
            name="phone"
            id="phone"
            required
            placeholder={phone_placeholder}
          />
        </div>

        {/* Campo para Mensaje */}
        <fieldset className="col-span-6 mt-2">
          <legend className="text-gray-700  block text-base font-medium">{message}</legend>
          <textarea
            name="message"
            id="message"
            required
            className="border-gray-200 text-gray-700 w-full rounded-md bg-white p-2 text-base shadow-sm"
            placeholder={message_placeholder}
          ></textarea>
        </fieldset>

        {/* Botón de Envío */}
        <div className="col-span-6 mt-2 flex flex-col items-center justify-center">
          <button
            className="dark:hover-bg-primary-700 flex w-full items-center justify-center rounded-xl bg-primary-200 px-6 py-4 text-sm font-normal text-primary-700 shadow transition-all hover:text-primary-800 hover:shadow-md focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-primary-500 active:scale-95 dark:border-primary-700 dark:bg-primary-800 dark:text-primary-200 dark:hover:bg-primary-700 dark:hover:text-primary-100 dark:focus-visible:outline-primary-400"
            type="submit"
          >
            {send}
          </button>

          <p className="text-gray-700 mt-4 text-center text-sm">{message_2}</p>
        </div>
      </form>
    </div>
  );
}
