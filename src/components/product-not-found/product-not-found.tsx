import CommonStyles_module from '~/styles/common-styles.module.scss';
import styles from './product-not-found.module.scss';
import classNames from 'classnames';
import { Link } from '@remix-run/react';
import { ROUTES } from '~/router/config';
import commonStylesStyles from '../../styles/common-styles.module.scss';

export const ProductNotFound = () => {
    return (
        <div className={commonStylesStyles.row}>
            <div className={styles.message}>Product not found</div>
            <Link
                to={ROUTES.products.to()}
                className={classNames(commonStylesStyles.primaryButton, commonStylesStyles.h4)}
            >
                Back to shopping
            </Link>
        </div>
    );
};
