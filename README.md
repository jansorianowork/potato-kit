# 🥔 Potato Kit

Reusable component kit built with React, TypeScript, Storybook, and Tailwind CSS. Powered by Radix UI and Embla Carousel, designed for atomic scalability and rapid development.

---

## 📦 Scripts

| Command                | Description                               |
| ---------------------- | ----------------------------------------- |
| `yarn dev`             | Start the Vite dev server                 |
| `yarn build`           | Build the project using TypeScript + Vite |
| `yarn lint`            | Run ESLint on the codebase                |
| `yarn preview`         | Preview the Vite build output             |
| `yarn storybook`       | Start Storybook on `localhost:6006`       |
| `yarn build-storybook` | Build the Storybook static site           |
| `yarn generate-story`  | Custom script to generate a component     |

---

## 🛠️ Generate a story folder

You can generate a new component folder with a `.tsx` file, a corresponding `.css` file, and a `.stories.tsx` file using:

```bash
yarn generate-story StoryName
```

This will create the following structure under `src/stories/`:

```
stories/
├── storyname.css          // Lowercase CSS file
├── StoryName.tsx          // Component file (PascalCase)
└── StoryName.stories.tsx  // Storybook file
```

> ⚠️ If the folder already exists, the script will warn and exit to prevent overwriting.

---

## 🧩 Tech Stack

-   **React 18**
-   **TypeScript**
-   **Vite**
-   **Tailwind CSS**
-   **Radix UI Primitives**
-   **Storybook 8**
-   **Embla Carousel**
-   **Lucide Icons**
-   **Class Utilities**: `clsx`, `class-variance-authority`, `tailwind-merge`

---

## 📁 Project Structure (Partial)

```
src/
├── components/
│   └── Button/
│       ├── button.css
│       ├── Button.tsx
│       └── Button.stories.tsx
├── styles/
├── utils/
├── ...
```

---

## ✅ Linting & Formatting

ESLint is set up with React, Storybook, and TypeScript rules:

```bash
yarn lint
```

---

## License

MIT — © 2025 Potato Kit
