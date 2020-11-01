// https://github.com/testing-library/react-testing-library

// these imports are something you'd normally configure Jest to import for you
// automatically. Learn more in the setup docs: https://testing-library.com/docs/react-testing-library/setup#cleanup
import "@testing-library/jest-dom";
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import HiddenMessage from "../hidden-message";

test("hides/shows the children when the checkbox is checked", () => {
  const testMessage = "Test Message";
  render(<HiddenMessage>{testMessage}</HiddenMessage>);

  // "query..."" functions return element, or null if not found
  // "get..."" functions return element, or throw error if not found
  expect(screen.queryByText(testMessage)).toBeNull();

  // "get..." can use regex for more flexible/robust selectors
  fireEvent.click(screen.getByLabelText(/show/i));
  // fireEvent.click(screen.getByTestId("toggle")); // data-testid="toggle"

  // .toBeInTheDocument() is an assertion that comes from jest-dom
  // otherwise you could use .toBeDefined()
  expect(screen.getByText(testMessage)).toBeInTheDocument();
});
