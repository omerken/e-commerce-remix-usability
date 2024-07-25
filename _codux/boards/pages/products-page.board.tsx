import { createBoard } from '@wixc3/react-board';
import { PageWrapper } from '_codux/board-wrappers/page-wrapper';
import { productsMock } from '_codux/mocks/products';
import ProductsPage from 'app/routes/products/route';

export default createBoard({
    name: 'Page - Products',
    Board: () => (
        <PageWrapper
            pageRouteParams={{
                loader: () => ({ products: productsMock }),
            }}
        >
            <ProductsPage />
        </PageWrapper>
    ),
    tags: ['Page'],
    environmentProps: {
        windowHeight: 800,
    },
});
