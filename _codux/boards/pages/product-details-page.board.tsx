import { createBoard } from '@wixc3/react-board';
import { PageWrapper } from '_codux/board-wrappers/page-wrapper';
import { MockEcomAPIContextProvider } from '_codux/mocks/mock-ecom-api-context-provider';
import { productDetailsMock } from '_codux/mocks/product-details';
import ProductDetailsPage from 'app/routes/products_.$slug/route';

export default createBoard({
    name: 'Page - ProductDetails',
    Board: () => (
        <PageWrapper
            pageRouteObject={{
                Component: () => (
                    <MockEcomAPIContextProvider>
                        <ProductDetailsPage />
                    </MockEcomAPIContextProvider>
                ),
                loader: () => ({ product: productDetailsMock }),
            }}
        />
    ),
    tags: ['Page'],
    environmentProps: {
        windowHeight: 800,
    },
});
