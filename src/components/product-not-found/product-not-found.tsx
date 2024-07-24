import React from 'react';
import CommonStyles_module from '~/styles/common-styles.module.scss';
import styles from './product-not-found.module.scss';
import classNames from 'classnames';
import { Link } from '@remix-run/react';
import { ROUTES } from '~/router/config';

export const ProductNotFound: React.FC = () => {
    return (
        <div className={styles.root}>
            <div className={styles.message}>Product not found</div>
            <Link
                to={ROUTES.products.to()}
                className={classNames(CommonStyles_module.primaryButton, styles['overlay-button'])}
            >
                Back to shopping
            </Link>
        </div>
    );
};
