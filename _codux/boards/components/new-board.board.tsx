import { createBoard } from '@wixc3/react-board';
import styles from './new-board.board.module.scss';

export default createBoard({
    name: 'New Board',
    Board: () => (
        <div className={styles.layout}>
            <h4 className={styles.h42}>
                <h1 className={styles.h12}>65px</h1>
                Looks like there&apos;s nothing here.
                <p className={styles.p2}>
                    The link you followed may be broken, or the page might have moved.
                </p>
            </h4>
            <div className={styles.div1}>
                <button className={styles.button2}>Back to Homepage</button>
            </div>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 832,
        windowHeight: 647,
    },
});
