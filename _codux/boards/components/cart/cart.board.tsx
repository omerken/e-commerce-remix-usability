import { createBoard } from '@wixc3/react-board';
import { ComponentWrapper } from '_codux/board-wrappers';
import { sleep } from '_codux/boards/utils';
import { MockEcomAPIContextProvider } from '_codux/mocks';
import { Cart, CartOpenContextProvider } from '~/components/cart';
import { CartOpener } from './cart-opener';

export default createBoard({
    name: 'Cart',
    Board: () => (
        <ComponentWrapper>
            <MockEcomAPIContextProvider>
                <CartOpenContextProvider initialIsOpen>
                    <CartOpener />
                    <Cart />
                </CartOpenContextProvider>
            </MockEcomAPIContextProvider>
        </ComponentWrapper>
    ),
    tags: ['Component', 'Cart'],
    environmentProps: {
        windowWidth: 350,
    },
    readyToSnapshot: () => sleep(10),
});
