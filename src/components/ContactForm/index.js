import { useState } from "react";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const {name, email, message} = formState;

  const handleChange = evt => {
      setFormState({...formState, [evt.target.name]:evt.target.value});
  }

  function handleSubmit(e) {
    console.log(formState);

      e.preventDefault();
      console.log(formState);
  }

  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" onChange={handleChange} defaultValue={name}/>
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input type="email" name="email" onChange={handleChange} defaultValue={email}/>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" onChange={handleChange} defaultValue={message}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
