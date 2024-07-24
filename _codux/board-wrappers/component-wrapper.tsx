import { PropsWithChildren } from 'react';
import { createRemixStub } from '@remix-run/testing';
import { ROUTES } from '~/router/config';
import { EcomAPIContextProvider } from '~/api/ecom-api-context-provider';

export interface ComponentWrapperProps extends PropsWithChildren {
    loaderData?: Record<string, unknown>;
}

export default function ComponentWrapper({ children, loaderData }: ComponentWrapperProps) {
    const RemixStub = createRemixStub([
        {
            Component: () => children,
            children: Object.values(ROUTES).map(({ path }) => ({ path })),
        },
    ]);

    return (
        <EcomAPIContextProvider>
            <RemixStub hydrationData={{ loaderData }} />
        </EcomAPIContextProvider>
    );
}
