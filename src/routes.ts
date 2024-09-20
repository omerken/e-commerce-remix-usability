import { generatePath } from '@remix-run/react';

const HOME = '/';
const ABOUT = '/about';
const CATEGORY = '/category/:categorySlug';
const PRODUCT = `/products/:productSlug`;
const THANK_YOU = '/thank-you';

/**
 * This object centralizes link generation to maintain simplicity and consistency.
 * Note: Remix uses a file-based routing system, so modifying this object will not
 * affect the actual routes or pages available in the application.
 */
export const ROUTES = {
    home: { path: HOME, to: () => HOME },
    about: { path: ABOUT, to: () => ABOUT },
    category: {
        path: CATEGORY,
        to: (slug?: string) => generatePath(CATEGORY, { categorySlug: slug ?? 'all-products' }),
    },
    thankYou: { path: THANK_YOU, to: () => THANK_YOU },
    product: {
        path: PRODUCT,
        to: (slug: string) => generatePath(PRODUCT, { productSlug: slug }),
    },
};
