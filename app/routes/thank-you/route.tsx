import { Outlet } from '@remix-run/react';
import styles from './thank-you.module.scss';

export default function ThankYouLayout() {
    return (
        <div className={styles.root}>
            Thanks
            <Outlet />
        </div>
    );
}
