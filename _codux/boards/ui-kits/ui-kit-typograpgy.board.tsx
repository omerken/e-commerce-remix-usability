import { createBoard } from '@wixc3/react-board';
import styles from '../../../src/styles/ui-kit-typography.module.scss';
import classNames from 'classnames';

export default createBoard({
    name: 'UI Kit - Foundation',
    Board: () => (
        <div className={styles.container}>
            <div>
                <span className={styles.uikit}>UI Kit</span>
                <span className={styles.foundation}> | Foundation</span>
                <hr className={styles.hrSolid} />
                <h3 className={styles.sectionTitle}>Typography</h3>
            </div>

            <h4 className={styles.sectionHeader}>HEADING</h4>
            <h1 className={styles.extraLargeThinTitle}>Heading 1</h1>
            <p className={classNames(styles.variantName, styles.variantSpacing)}>
                $extra-large-thin-title
                <span className={styles.fontDetails}> DM Sans (100) / 65px / 1.2</span>
            </p>

            <h2 className={classNames(styles.extraLargeTitle)}>HEADING 2</h2>
            <p className={classNames(styles.variantName, styles.variantSpacing)}>
                $extra-large-title
                <span className={styles.fontDetails}> DM Sans (300) / 45px / 1.4</span>
            </p>

            <h3 className={classNames(styles.smallBoldTitle)}>Heading 3</h3>
            <p className={classNames(styles.variantName, styles.variantSpacing)}>
                $small-bold-title
                <span className={styles.fontDetails}> DM Sans (1000)/ 42px/ 1.4 </span>
            </p>

            <h6 className={classNames(styles.smallBoldTitle)}>Heading 6</h6>
            <p className={classNames(styles.variantName, styles.variantSpacing)}>
                $small-title
                <span className={styles.fontDetails}> DM Sans (400)/ 16px/ 1.4 </span>
            </p>

            <hr className={styles.hrLight} />
            <h4 className={styles.sectionHeader}>Paragraph</h4>

            <p className={classNames(styles.bigBoldParagraph)}>Large text</p>
            <p className={classNames(styles.variantName, styles.variantSpacing)}>
                $paragraph-font:
                <span className={styles.fontDetails}> DM Sans (400)/ 52px/ 1.6</span>
            </p>

            <p className={styles.mediumBoldParagraph}>
                We ignite opportunity by setting the world in motion. 0123456789
            </p>
            <p className={classNames(styles.variantName, styles.variantSpacing)}>
                $medium-bold-paragraph:
                <span className={styles.fontDetails}> DM Sans (1000) / 24px / 1.4</span>
            </p>

            <p className={styles.mediumParagraph}>
                We ignite opportunity by setting the world in motion. 0123456789
            </p>
            <p className={classNames(styles.variantName, styles.variantSpacing)}>
                $medium-bold-paragraph:
                <span className={styles.fontDetails}> DM Sans (300) / 20px / 1.3</span>
            </p>

            <p className={styles.smallParagraph}>
                We ignite opportunity by setting the world in motion. 0123456789
            </p>
            <p className={classNames(styles.variantName, styles.variantSpacing)}>
                $small-paragraph:
                <span className={styles.fontDetails}> DM Sans (200) / 16px / 1.4</span>
            </p>

            <p className={styles.extraSmallParagraph}>
                We ignite opportunity by setting the world in motion. 0123456789
            </p>
            <p className={classNames(styles.variantName, styles.variantSpacing)}>
                $extra-small-paragraph:
                <span className={styles.fontDetails}> DM Sans (400) / 12px / 18px</span>
            </p>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 284,
        windowHeight: 606,
    },
});
