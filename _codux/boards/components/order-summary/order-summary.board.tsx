import { createBoard } from '@wixc3/react-board';
import { mockOrder } from '_codux/mocks/order';
import { OrderSummary } from '../../../../src/components/order-summary/order-summary';

export default createBoard({
    name: 'OrderSummary',
    Board: () => <OrderSummary order={mockOrder} />,
    isSnippet: false,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 943,
    },
});
