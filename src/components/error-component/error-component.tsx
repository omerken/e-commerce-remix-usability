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
            <img src={CactusError} alt="cactuserror" className={styles.img} />
            <div className={styles.div1}>
                <h4 className={styles.h4}>Looks like there&apos;s nothing here.</h4>
                <p className={styles.p}>
                    The link you followed may be broken, or the page might have moved.
                </p>
            </div>
            <Link className={commonStyles.primaryButton} to={ROUTES.home.to()}>
                Back to Homepage
            </Link>
        </div>
    );
};
