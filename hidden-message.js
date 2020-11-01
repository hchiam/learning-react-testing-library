// https://github.com/testing-library/react-testing-library

import * as React from "react";

// NOTE: React Testing Library works well with React Hooks and classes.
// Your tests will be the same regardless of how you write your components.
function HiddenMessage({ children }) {
  const [showMessage, setShowMessage] = React.useState(false);
  return (
    <div>
      <label htmlFor="toggle">Show Message</label>
      <input
        id="toggle"
        type="checkbox"
        onChange={(e) => setShowMessage(e.target.checked)}
        checked={showMessage}
        data-testid="toggle"
      />
      {showMessage ? children : null}
    </div>
  );
}

export default HiddenMessage;
