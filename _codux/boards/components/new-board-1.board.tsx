import { createBoard } from '@wixc3/react-board';
import styles from './new-board.board.module.scss';

export default createBoard({
    name: 'New Board 1',
    Board: () => (
        <div className={styles.layout}>
            <h1 className={styles.header1}>404</h1>
            <h4 className={styles.h4}>Page Not Found</h4>
            <p className={styles.p}>
                Looks like the page you&apos;re trying to visit doesn&apos;t exist
            </p>
            <button className={styles.button1}>Back to Homepage</button>
        </div>
    ),
    isSnippet: true,
});
