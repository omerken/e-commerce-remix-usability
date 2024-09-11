import { createBoard } from '@wixc3/react-board';
import styles from './ui-kit-core-components.board.module.scss';
import commonStyles from '~/styles/common-styles.module.scss';
import classNames from 'classnames';
import { MemoryRouter } from 'react-router-dom';
import { ProductCard } from '~/components/product-card/product-card';

export default createBoard({
    name: 'UI Kit - Core Components',
    Board: () => (
        <div className={styles.container}>
            <div>
                <span className={styles.uikit}>UI Kit</span>
                <span className={styles.coreComponents}> | Core Components</span>
                <hr className={styles.hrSolid} />
                <h3 className={styles.sectionTitle}>Components</h3>
            </div>
            <h4 className={styles.sectionHeader}>CARDS</h4>
            <ProductCard
                name="Im a product"
                price={{ formatted: { price: '$15.00' } }}
                className={classNames(styles.productCard, styles.productCard)}
                imageUrl="https://wixmp-b7f7090100b13623109851bc.wixmp.com/layouters-starters/img_02.jpg"
            />
            <p className={styles.productCardInfo}>Product Card</p>
            <ProductCard
                name="Im a product"
                price={{ formatted: { price: '$15.00' } }}
                className={classNames(styles.productCard, styles.productCard)}
            />
            <p className={styles.productCardInfo}>Product Card No Image</p>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 289,
        windowHeight: 525,
    },
});
