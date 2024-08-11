import { Link } from '@remix-run/react';
import { ROUTES } from '~/router/config';
import commonStyles from '~/styles/common-styles.module.scss';
import styles from './error-component.module.scss';
import CactusError from '../../../src/assets/svg/cactuserror.svg';

export interface ErrorProps {
    title: string | undefined | null;
    message: string | undefined | null;
}

export const ErrorComponent = ({ title, message }: ErrorProps) => {
    return (
        <div className={styles.layout}>
            <img src={CactusError} alt="cactuserror" className={styles.img1} />
            <h4 className={styles.h42}>
                Looks like there&apos;s nothing here.
                <p className={styles.p2}>
                    The link you followed may be broken, or the page might have moved.
                </p>
            </h4>
            <Link className={commonStyles.primaryButton} to={ROUTES.home.to()}>
                Back to Homepage
            </Link>
        </div>
    );
};
