import classNames from 'classnames';
import commonStyles from '~/styles/common-styles.module.scss';
import styles from './error-component.module.scss';
import CactusError from '../../../src/assets/svg/cactuserror.svg';

export interface ErrorComponentProps {
    title: string;
    message?: string;
    actionButtonText?: string;
    onActionButtonClick?: () => void;
}

export const ErrorComponent = ({ title, message, actionButtonText, onActionButtonClick }: ErrorComponentProps) => {
    const shouldRenderActionButton = actionButtonText && onActionButtonClick;

    return (
        <div className={styles.layout}>
            <img src={CactusError} alt="cactuserror" className={styles.img} />
            <div className={styles.div1}>
                <h4 className={styles.h4}>Looks like there&apos;s nothing here.</h4>
                <p className={styles.p}>The link you followed may be broken, or the page might have moved.</p>
            </div>
            {message && <div className={styles.message}>{message}</div>}
            {shouldRenderActionButton && (
                <button
                    className={classNames(commonStyles.primaryButton, styles.actionButton)}
                    onClick={onActionButtonClick}
                >
                    {actionButtonText}
                </button>
            )}
        </div>
    );
};
