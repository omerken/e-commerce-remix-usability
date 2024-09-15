import { createBoard, Variant } from '@wixc3/react-board';
import styles from '../../../src/styles/ui-kit-typography.module.scss';
import classNames from 'classnames';
import styles0 from './ui-kit-typograpgy.board.module.scss';

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
            <Variant name="Extra Large Thin Title">
                <h1 className={styles.extraLargeThinTitle}>Heading 1</h1>
            </Variant>
            <p className={classNames(styles.variantName, styles.variantSpacing)}>
                $extra-large-thin-title:
                <span className={styles.fontDetails}> DM Sans (100) / 65px / 1.2</span>
            </p>

            <Variant name="Extra Large Title">
                <h2 className={classNames(styles.extraLargeTitle, styles0.header1)}>HEADING 2</h2>
            </Variant>
            <p className={classNames(styles.variantName, styles.variantSpacing)}>
                $extra-large-title:
                <span className={styles.fontDetails}> DM Sans (300) / 45px / 1.4</span>
            </p>

            <Variant name="Small Bold Title">
                <h3 className={classNames(styles.smallBoldTitle)}>Heading 3</h3>
            </Variant>
            <p className={classNames(styles.variantName, styles.variantSpacing)}>
                $small-bold-title:
                <span className={styles.fontDetails}> DM Sans (1000)/ 42px/ 1.4 </span>
            </p>

            <Variant name="Small Title">
                <h6 className={classNames(styles.smallTitle)}>Heading 6</h6>
            </Variant>
            <p className={classNames(styles.variantName, styles.variantSpacing)}>
                $small-title:<span className={styles.fontDetails}> DM Sans (400)/ 16px/ 1.4 </span>
            </p>

            <hr className={styles.hrLight} />
            <h4 className={styles.sectionHeader}>Paragraph</h4>

            <Variant name="Paragraph Font">
                <p className={classNames(styles.bigBoldParagraph)}>Large text</p>
            </Variant>
            <p className={classNames(styles.variantName, styles.variantSpacing)}>
                $paragraph-font:
                <span className={styles.fontDetails}> DM Sans (400)/ 52px/ 1.6</span>
            </p>

            <Variant name="Medium Bold Paragraph">
                <p className={styles.mediumBoldParagraph}>
                    We ignite opportunity by setting the world in motion. 0123456789
                </p>
            </Variant>
            <p className={classNames(styles.variantName, styles.variantSpacing)}>
                $medium-bold-paragraph:
                <span className={styles.fontDetails}> DM Sans (1000) / 24px / 1.4</span>
            </p>

            <Variant name="Medium Paragraph">
                <p className={styles.mediumParagraph}>
                    We ignite opportunity by setting the world in motion. 0123456789
                </p>
            </Variant>
            <p className={classNames(styles.variantName, styles.variantSpacing)}>
                $medium-paragraph:
                <span className={styles.fontDetails}> DM Sans (300) / 20px / 1.3</span>
            </p>

            <Variant name="Small Paragraph">
                <p className={styles.smallParagraph}>
                    We ignite opportunity by setting the world in motion. 0123456789
                </p>
            </Variant>
            <p className={classNames(styles.variantName, styles.variantSpacing)}>
                $small-paragraph:
                <span className={styles.fontDetails}> DM Sans (200) / 16px / 1.4</span>
            </p>

            <Variant name="Extra Small Paragraph">
                <p className={styles.extraSmallParagraph}>
                    We ignite opportunity by setting the world in motion. 0123456789
                </p>
            </Variant>
            <p className={classNames(styles.variantName, styles.variantSpacing)}>
                $extra-small-paragraph:
                <span className={styles.fontDetails}> DM Sans (400) / 12px / 18px</span>
            </p>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 320,
        windowHeight: 606,
    },
    tags: ['UI Kit'],
});
