import { authenticator } from 'app/services/auth.server';
import { useEffect } from 'react';
import { LoaderFunctionArgs } from 'react-router-dom';
import { getEcomApi } from '~/api/ecom-api';
import { getUrlOriginWithPath } from '~/utils';

export const loader = async ({ request }: LoaderFunctionArgs) => {
    await authenticator.authenticate('wix-managed', request, {
        throwOnError: true,
        successRedirect: '/',
    });

    return { canonicalUrl: getUrlOriginWithPath(request.url) };
};

export default function LoginCallbackPage() {
    useEffect(() => {
        const api = getEcomApi();

        api.handleLoginCallback();
    }, []);

    return <div>LOGIN CALLBACK</div>;
}
