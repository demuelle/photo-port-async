import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Modal from "..";

const photo = {
  name: "testphoto",
  description: "description of a testphoto",
  category: "food",
  index: 1,
};

const mockToggleModal = jest.fn();

afterEach(cleanup);

describe("Modal component", () => {
  it("renders", () => {
    render(<Modal photo={photo} toggleModal={mockToggleModal} />);
  });

  it("matches snapshot DOM node structure", () => {
    const { asFragment } = render(
      <Modal photo={photo} toggleModal={mockToggleModal} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Modal has a title", () => {
  it("displays the name as the title", () => {
    const { getByTestId } = render(
      <Modal photo={photo} toggleModal={mockToggleModal} />
    );

    expect(getByTestId("modal-title")).toHaveTextContent(photo.name);
  });
});

describe("Click Event", () => {
  it("calls onClose handler", () => {
    // Arrange: Render Modal
    const { getByText } = render(
      <Modal photo={photo} toggleModal={mockToggleModal} />
    );
    // Act: Simulate click event
    fireEvent.click(getByText("Close this modal"));

    // Assert: Expected matcher
    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
});
