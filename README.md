# Feli Page UI (React)

Feli Page's React Component Library

[Storybook](https://ui.feli.page/)

## Installation

```sh
npm install @felipage/react-ui @felipage/tailwind-feli
```

> The `@felipage/tailwind-feli` tailwind preset is required custom styling

## Setup

Modify `tailwind.config.js`

```js
module.exports = {
  presets: [require('@felipage/tailwind-feli')],
  purge: ['./node_modules/\\@felipage/react-ui/**/*.{js,ts,jsx,tsx}'],
};
```

## Usage

```jsx
import { ComponentName } from '@felipage/react-ui';
```

## Useful Links

- [Feli Page](https://feli.page)
- [Our GitHub Repo](https://github.com/felipage/react-ui)

## License

Feli Page UI is licensed under the [MIT License](https://github.com/felipage/react-ui/blob/main/LICENSE)
