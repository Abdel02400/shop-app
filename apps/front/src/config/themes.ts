const themes = {
    light: 'light',
    dark: 'dark',
} as const;

type Theme = (typeof themes)[keyof typeof themes];

export const themeList: Theme[] = Object.values(themes);
