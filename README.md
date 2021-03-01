# Feli Page UI (React)

Feli Page's React Component Library


## Installation
```sh
npm install @felipage/react-ui @felipage/tailwind-feli
```
## Setup

Modify tailwind.config.js
```js
module.exports = {
    presets: [require("@felipage/tailwind-feli")],
    purge: [
        "./node_modules/\\@felipage/react-ui/**/*.{js,ts,jsx,tsx}",
    ],
};
```

## Usage

```jsx
import { ComponentName } from '@felipage/react-ui';
```