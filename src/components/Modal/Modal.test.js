import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";

describe("Given a Modal component", () => {
  describe("When it is invoked with a function onClick", () => {
    test("Then it should render 2 buttons 'Cancel' and 'Delete'", () => {
      render(<Modal onDelete={() => {}} />);

      const deleteButton = screen.getByRole("button", { name: "Delete" });
      const cancelButton = screen.getByRole("button", { name: "Cancel" });

      expect(deleteButton).toBeInTheDocument();
      expect(cancelButton).toBeInTheDocument();
    });

    describe("And the button Delete is clicked", () => {
      test("Then it should call the function on Delete", () => {
        const onDelete = jest.fn();

        render(<Modal onDelete={onDelete} />);

        const deleteButton = screen.getByRole("button", { name: "Delete" });
        userEvent.click(deleteButton);

        expect(onDelete).toHaveBeenCalled();
      });
    });
  });
});
