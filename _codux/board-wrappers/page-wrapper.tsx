import { createRemixStub } from '@remix-run/testing';
import App from 'app/root';
import { ROUTES } from '~/router/config';

// @remix-run/testing doesn't export this type
type StubRouteObject = Parameters<typeof createRemixStub>[0][0];

export function PageWrapper(props: { pageRouteObject: StubRouteObject }) {
    const Page = createRemixStub([
        {
            Component: () => {
                return <App />;
            },
            children: [
                ...Object.values(ROUTES).map((route) => ({
                    path: route.path,
                    ...props.pageRouteObject,
                })),
            ],
        },
    ]);

    return <Page />;
}
