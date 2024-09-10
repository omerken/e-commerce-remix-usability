import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './global-layout.module.scss';

export default function GlobalLayout() {
    return (
        <div className={styles.root}>
            <header className={styles.header}>Header</header>
            <main className={styles.main}>
                <Outlet />
            </main>
            <footer className={styles.footer}>Footer</footer>
        </div>
    );
}
