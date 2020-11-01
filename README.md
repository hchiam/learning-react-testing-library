# Learning [react-testing-library](https://github.com/testing-library/react-testing-library)

Just one of the things I'm learning. <https://github.com/hchiam/learning>

`react-testing-library` focuses on best-practices by testing the DOM and what users with interact with, INSTEAD of React state/props/components, which can change (otherwise use `data-testid`s for robust tests). It works well with [`jest`](https://github.com/hchiam/learning-jest) and is great for unit tests and integration tests, but end-to-end testing may be better left to [`cypress`](https://github.com/hchiam/learning-cypress) with [`@testing-library/cypress`](https://github.com/testing-library/cypress-testing-library).

BTW:

- **unit tests** = isolated functions
- **integration tests** = functions that rely on other functions (such as network calls or functions you have access to, but also functions that you may not have access to, like with mocks for fast and reliable integration tests)
- **end-to-end tests** = UI interaction tests

<https://github.com/testing-library/react-testing-library>

<https://testing-library.com/docs/react-testing-library/intro>

<https://www.youtube.com/watch?v=JKOwJUM4_RM>

<https://raw.githubusercontent.com/testing-library/react-testing-library/master/other/cheat-sheet.pdf>

<https://testing-playground.com>

## From scratch

Using [`yarn`](https://github.com/hchiam/learning-yarn):

```bash
yarn add react react-dom
yarn add --dev @testing-library/react @testing-library/jest-dom @babel/preset-react @babel/preset-env babel-jest jest-cli;
```

Or with `npm`:

```bash
npm install react react-dom
npm install --save-dev @testing-library/react @testing-library/jest-dom @babel/preset-react @babel/preset-env babel-jest jest-cli
```

And then:

```bash
touch babel.config.js # and fill in this file
jest
```

## Starting by testing out this repo

Using [`yarn`](https://github.com/hchiam/learning-yarn): (triple-click to select all)

```bash
git clone https://github.com/hchiam/learning-react-testing-library.git && cd learning-react-testing-library && yarn && jest
```

Or with `npm`: (triple-click to select all)

```bash
git clone https://github.com/hchiam/learning-react-testing-library.git && cd learning-react-testing-library && npm install && jest
```
