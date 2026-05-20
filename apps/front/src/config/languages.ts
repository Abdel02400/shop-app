export const languages = {
    fr: 'fr',
    en: 'en',
} as const;

export type Language = keyof typeof languages;

export const languageList = Object.keys(languages) as Language[];
