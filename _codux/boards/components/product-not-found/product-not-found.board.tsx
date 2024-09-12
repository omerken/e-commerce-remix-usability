import { createBoard } from '@wixc3/react-board';
import ComponentWrapper from '_codux/board-wrappers/component-wrapper';
import { ProductNotFound } from '~/components/product-not-found/product-not-found';

export default createBoard({
    name: 'Product Not Found',
    Board: () => (
        <ComponentWrapper>
            <ProductNotFound />
        </ComponentWrapper>
    ),
    tags: ['Component'],
    environmentProps: {
        windowWidth: 500,
        windowHeight: 200,
    },
});
