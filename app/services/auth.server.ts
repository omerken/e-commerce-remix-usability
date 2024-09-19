import { Authenticator } from 'remix-auth';
import { sessionStorage } from './session.server';
import { WixManagedStrategy } from './wix-auth-strategy';

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export const authenticator = new Authenticator(sessionStorage);

authenticator.use(new WixManagedStrategy({}, ({ user }) => Promise.resolve(user)), 'wix-managed');
