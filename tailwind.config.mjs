/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        themes: [
            {
                // Light theme: warm parchment tones, like sunlit paper
                solar: {
                    "primary": "#c2410c",
                    "primary-content": "#fff7ed",
                    "secondary": "#b45309",
                    "secondary-content": "#fffbeb",
                    "accent": "#f59e0b",
                    "accent-content": "#28190a",
                    "neutral": "#2a1d0e",
                    "neutral-content": "#f5e4c3",
                    "base-100": "#fffcf7",
                    "base-200": "#fdf3e3",
                    "base-300": "#f3e0bd",
                    "base-content": "#2a1d0e",
                    "info": "#0284c7",
                    "success": "#15803d",
                    "warning": "#d97706",
                    "error": "#b91c1c",
                    "--rounded-box": "1rem",
                    "--rounded-btn": "0.5rem",
                },
            },
            {
                // Dark theme: deep space navy with corona-glow amber accents
                corona: {
                    "primary": "#f59e0b",
                    "primary-content": "#22160a",
                    "secondary": "#fb923c",
                    "secondary-content": "#22160a",
                    "accent": "#fbbf24",
                    "accent-content": "#22160a",
                    "neutral": "#1e293b",
                    "neutral-content": "#f1e9da",
                    "base-100": "#0b1120",
                    "base-200": "#111827",
                    "base-300": "#1e293b",
                    "base-content": "#f1e9da",
                    "info": "#38bdf8",
                    "success": "#4ade80",
                    "warning": "#fbbf24",
                    "error": "#f87171",
                    "--rounded-box": "1rem",
                    "--rounded-btn": "0.5rem",
                },
            },
        ],
    },
};
