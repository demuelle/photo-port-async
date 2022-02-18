import { render, cleanup, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";

afterEach(cleanup);

describe("ContactForm component", () => {
  it("renders", () => {
    render(<ContactForm />);
  });

  it("matches snapshot DOM node structure", () => {
    const { asFragment } = render(<ContactForm />);

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("header message appears", () => {
  it("message appears in h1", () => {
    const { getByTestId } = render(<ContactForm />);

    expect(getByTestId("header")).toHaveTextContent("Contact me");
  });
});

describe("submit button appears", () => {
  it("Submit appears in button", () => {
    const { getByTestId } = render(<ContactForm />);

    expect(getByTestId("contact-form-submit-button")).toHaveTextContent(
      "Submit"
    );
  });
});
