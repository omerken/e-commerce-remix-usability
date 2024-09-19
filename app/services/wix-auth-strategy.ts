import { SessionStorage } from '@remix-run/server-runtime';
import { AuthenticateOptions, Strategy, StrategyVerifyCallback } from 'remix-auth';
import { getEcomApi } from 'src/api/ecom-api';
import { members } from '@wix/members';

type User = members.GetMyMemberResponse & members.GetMyMemberResponseNonNullableFields;

/**
 * This interface declares what configuration the strategy needs from the
 * developer to correctly work.
 */
export interface MyStrategyOptions {}

/**
 * This interface declares what the developer will receive from the strategy
 * to verify the user identity in their system.
 */
export interface MyStrategyVerifyParams {
    user: User;
}

export class WixManagedStrategy extends Strategy<User, MyStrategyVerifyParams> {
    name = 'wix-managed-auth';

    constructor(
        options: MyStrategyOptions,
        verify: StrategyVerifyCallback<User, MyStrategyVerifyParams>
    ) {
        super(verify);
        // do something with the options here
    }

    async authenticate(
        request: Request,
        sessionStorage: SessionStorage,
        options: AuthenticateOptions
    ): Promise<User> {
        console.log('INSIDE AUTHENTICATE');

        const api = getEcomApi();
        api.handleLoginCallback(request.url, request);

        const user = await api.getUser();

        return this.success(user, request, sessionStorage, options);
    }
}
