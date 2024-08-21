import { createBoard } from '@wixc3/react-board';
import { ReactComponent as ServererrorSvg } from '../../../src/assets/svg/servererror.svg';
import styles from './server-error.board.module.scss';
import commonStylesStyles from '../../../src/styles/common-styles.module.scss';
import Classnames from 'classnames';

export default createBoard({
    name: 'Server Error 1',
    Board: () => (
        <div className={styles.layout}>
            <ServererrorSvg className={styles.servererrorSvg} />
            <div className={styles.div1}>
                <h1 className={styles.h4}>Heading 1</h1>
            </div>
            <button className={styles.secondaryButtonVar1}>Button</button>
        </div>
    ),
    isSnippet: true,
});
