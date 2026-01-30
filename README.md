# iOS Calculator Clone

A pixel-perfect clone of the Apple iOS Calculator app built with React and Vite.

## Features

- ✅ Exact iOS Calculator UI (colors, spacing, fonts, button shapes)
- ✅ Portrait mode (standard calculator)
- ✅ Landscape mode (scientific calculator)
- ✅ Basic operations: +, −, ×, ÷
- ✅ Functions: C, +/−, %
- ✅ Scientific functions: sin, cos, tan, log, √, π, e, ^
- ✅ Decimal support
- ✅ Calculation history (last 5 calculations)
- ✅ Button press feedback
- ✅ Mobile-optimized (100svh, WebView compatible)
- ✅ No external UI libraries

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```
ios-calculator/
├── src/
│   ├── components/
│   │   ├── Calculator.jsx
│   │   ├── calculator.css
│   │   ├── Button.jsx
│   │   └── Button.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Deployment

The app is ready to be deployed to any static hosting service or packaged as a mobile app using Capacitor.

## Mobile App (Capacitor)

To convert to a native app:

```bash
npm install @capacitor/core @capacitor/cli
npx cap init
npx cap add android
npx cap add ios
npm run build
npx cap sync
npx cap open android
```
