import classNames from 'classnames';
import styles from './header.module.scss';
import { Cart } from '~/components/cart/cart';
import { Link } from '@remix-run/react';
import CommonStyles_module from '~/styles/common-styles.module.scss';
import { ROUTES } from '~/router/config';

export interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Link to={ROUTES.home.to()} className={styles.logo}>
                LOGO
            </Link>
            <div className={styles.menu}>
                <Link
                    to={ROUTES.home.to()}
                    className={classNames(CommonStyles_module.secondaryButton, styles.menuButton)}
                >
                    Home
                </Link>
                <Link
                    to={ROUTES.products.to()}
                    className={classNames(CommonStyles_module.secondaryButton, styles.menuButton)}
                >
                    Products
                </Link>
                <Link
                    to={ROUTES.about.to()}
                    className={classNames(CommonStyles_module.secondaryButton, styles.menuButton)}
                >
                    About
                </Link>
                <Cart className={styles.menuButton} />
            </div>
        </div>
    );
};
