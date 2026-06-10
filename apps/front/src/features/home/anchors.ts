export const homeAnchors = {
    products: 'products',
} as const;

type HomeAnchorKey = keyof typeof homeAnchors;

export const homeAnchorHref = (key: HomeAnchorKey): string => `#${homeAnchors[key]}`;
