import { createBoard } from '@wixc3/react-board';
import { ProductNotFound } from '~/components/product-not-found/product-not-found';

export default createBoard({
    name: 'Product not found',
    Board: () => <ProductNotFound onActionButtonClick={() => {}} />,
    isSnippet: true,
});
