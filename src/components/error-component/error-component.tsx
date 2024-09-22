import classNames from 'classnames';
import commonStyles from '~/styles/common-styles.module.scss';
import styles from './error-component.module.scss';
import CactusError from '../../../src/assets/svg/cactuserror.svg';

export interface ErrorComponentProps {
    onActionButtonClick?: () => void;
}

export const ErrorComponent = ({ onActionButtonClick }: ErrorComponentProps) => {
    return (
        <div className={styles.root}>
            <img src={CactusError} alt="cactuserror" className={styles.img} />
            <div className={styles.div1}>
                <h4 className={styles.h4}>Looks like there&apos;s nothing here.</h4>
                <p className={styles.p}>The link you followed may be broken, or the page might have moved.</p>
            </div>
            {onActionButtonClick && (
                <button
                    className={classNames(commonStyles.primaryButton, styles.actionButton)}
                    onClick={onActionButtonClick}
                >
                    Back to shopping
                </button>
            )}
        </div>
    );
};
