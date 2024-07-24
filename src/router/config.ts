import { generatePath } from '@remix-run/react';

const HOME = '/';
const ABOUT = '/about';
const PRODUCTS = '/products';
const PRODUCT = `${PRODUCTS}/:slug`;
const THANK_YOU = '/thank-you';

export const ROUTES = {
    home: { path: HOME, to: () => HOME },
    about: { path: ABOUT, to: () => ABOUT },
    products: { path: PRODUCTS, to: () => PRODUCTS },
    thankYou: { path: THANK_YOU, to: () => THANK_YOU },
    product: {
        path: PRODUCT,
        to: (productSlug: string) => generatePath(PRODUCT, { slug: productSlug }),
    },
};

export type ROUTE_KEYS = keyof typeof ROUTES;

export type RouteParams = {
    [PRODUCT]: { slug: string };
};
