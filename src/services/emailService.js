import emailjs from "@emailjs/browser";

export const sendEmail = (formRef) =>
  emailjs.sendForm(
    "service_mqnkytw",
    "template_eip99yp",
    formRef.current,
    "MKIBGozBqQy1Bqm6D"
  );
