export const themes = {
    light: 'light',
    dark: 'dark',
} as const;

export type Theme = keyof typeof themes;

export const themeList = Object.keys(themes) as Theme[];
