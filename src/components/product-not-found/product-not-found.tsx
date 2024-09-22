import './product-not-found.scss';
import commonStyles from '~/styles/common-styles.module.scss';
import classNames from 'classnames';
import Classnames from 'classnames';
import commonStylesStyles from '../../styles/common-styles.module.scss';

interface ProductNotFoundProps {
    onActionButtonClick?: () => void;
}

export const ProductNotFound = ({ onActionButtonClick }: ProductNotFoundProps) => {
    return (
        <div className={commonStyles.section}>
            <div>
                <h1 className={commonStylesStyles.title}>Product not found</h1>
                <p className={Classnames(commonStyles.p, commonStyles.h4)}></p>
                {onActionButtonClick && (
                    <button className={classNames(commonStyles.linkButton)} onClick={onActionButtonClick}>
                        Click here to see other products
                    </button>
                )}
            </div>
        </div>
    );
};
