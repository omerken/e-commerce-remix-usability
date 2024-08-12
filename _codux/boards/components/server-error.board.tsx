import { createBoard } from '@wixc3/react-board';
import { ReactComponent as ServererrorSvg } from '../../../src/assets/svg/servererror.svg';
import styles from './server-error.board.module.scss';

export default createBoard({
    name: 'Server Error',
    Board: () => (
        <div>
            <ServererrorSvg className={styles.servererrorSvg} />
            <div>
                <h1>Heading 1</h1>
                <p>This is a paragraph.</p>
            </div>
        </div>
    ),
    isSnippet: true,
});
