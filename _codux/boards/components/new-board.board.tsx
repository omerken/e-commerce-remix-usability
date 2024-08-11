import { createBoard } from '@wixc3/react-board';
import styles from './new-board.board.module.scss';
import CactusError from '../../../src/assets/svg/cactuserror.svg';
import commonStylesStyles from '../../../src/styles/common-styles.module.scss';

export default createBoard({
    name: 'Error - P',
    Board: () => (
        <div className={styles.layout}>
            <img src={CactusError} alt="cactuserror" className={styles.img1} />
            <h4 className={styles.h42}>
                Looks like there&apos;s nothing here.
                <p className={styles.p2}>
                    The link you followed may be broken, or the page might have moved.
                </p>
            </h4>
            <div className={styles.div1}>
                <button className={commonStylesStyles.primaryButton}>Back to Homepage</button>
            </div>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 832,
        windowHeight: 647,
    },
});
