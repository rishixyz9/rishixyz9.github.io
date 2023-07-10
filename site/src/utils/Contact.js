import { useState, useRef } from 'react'

const formRef = useRef();
const [form, setForm] = useState({
  name: "",
  email: "",
  message: "",
});

const [loading, setLoading] = useState(false);

const handleChange = (e) => {
  const { target } = e;
  const { name, value } = target;

  setForm({
    ...form,
    [name]: value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);


  //template template_2n98wns
  //service 
  //public 0S9sz00kc64na2uAQ
  emailjs
    .send(
      'service_r4ra84a',
      'template_2n98wns',
      {
        from_name: form.name,
        to_name: "Nathan Crawford",
        from_email: form.email,
        to_email: "kingofthebook@gmail.com",
        message: form.message,
      },
      '0S9sz00kc64na2uAQ'
    )
    .then(
      () => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        setLoading(false);
        console.error(error);

        alert("Ahh, something went wrong. Please try again.");
      }
    );
};