import { createBoard } from '@wixc3/react-board';
import { PageWrapper } from '_codux/board-wrappers/page-wrapper';
import { productsMock } from '_codux/mocks/products';
import HomePage from 'app/routes/_index/route';

export default createBoard({
    name: 'Page - Home',
    Board: () => (
        <PageWrapper
            pageRouteObject={{
                Component: () => <HomePage />,
                loader: () => ({ products: productsMock }),
            }}
        />
    ),
    tags: ['Page'],
    environmentProps: {
        windowHeight: 800,
    },
});
