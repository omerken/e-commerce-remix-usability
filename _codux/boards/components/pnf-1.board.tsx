import { createBoard } from '@wixc3/react-board';
import { ReactComponent as ServererrorSvg } from '../../../src/assets/svg/servererror.svg';
import styles from './server-error.board.module.scss';
import commonStylesStyles from '../../../src/styles/common-styles.module.scss';
import Classnames from 'classnames';


export default createBoard({
    name: 'PNF 1',
    Board: () => (
        <div className={Classnames(styles.layout, commonStylesStyles.row)}>
            <div className={commonStylesStyles.dividedStrip}>
                <div className={commonStylesStyles.section}>
                    <div className={styles.div1}>
                        <h1 className={commonStylesStyles.p2}>Product not found.</h1>
                        <p className={Classnames(styles.p, styles.h4)}></p>
                        <button
                            className={Classnames(styles.secondaryButtonVar1, commonStylesStyles.linkButton)}
                        >
                            Click here to see other products
                        </button>
                    </div>
                    <div className={commonStylesStyles.imageSection}>
                        <ServererrorSvg className={styles.servererrorSvg} />
                    </div>
                </div>
            </div>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
    },
});
