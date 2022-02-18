import { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  const handleChange = (evt) => {
    let isValid = false;
    if (evt.target.name === "email") {
      isValid = validateEmail(evt.target.value);
      setErrorMessage(isValid ? "" : "email address is invalid");
    } else {
      if (!evt.target.value.length) {
        setErrorMessage(`${evt.target.name} is required.`);
      } else {
        isValid = true;
        setErrorMessage("");
      }
    }
    console.log(`errorMessage '${errorMessage}'`, "formState", formState);
    if (!errorMessage) {
      setFormState({ ...formState, [evt.target.name]: evt.target.value });
    }
  };

  function handleSubmit(e) {
    console.log("In handleSubmit:", formState);

    e.preventDefault();
  }

  return (
    <section>
      <h1 data-testid="header">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            onBlur={handleChange}
            defaultValue={name}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            name="email"
            onBlur={handleChange}
            defaultValue={email}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            onBlur={handleChange}
            defaultValue={message}
          />
        </div>
        {errorMessage && (
            <div>
                error<p className="error-text">{errorMessage}</p>
            </div>
        )}
        <button data-testid="contact-form-submit-button" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
