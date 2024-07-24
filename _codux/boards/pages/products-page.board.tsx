import { createBoard } from '@wixc3/react-board';
import { PageWrapper } from '_codux/board-wrappers/page-wrapper';
import { productsMock } from '_codux/mocks/products';
import ProductsPage from 'app/routes/products/route';

export default createBoard({
    name: 'Page - Products',
    Board: () => (
        <PageWrapper
            pageRouteObject={{
                Component: () => <ProductsPage />,
                loader: () => ({ products: productsMock }),
            }}
        />
    ),
    tags: ['Page'],
    environmentProps: {
        windowHeight: 800,
    },
});
