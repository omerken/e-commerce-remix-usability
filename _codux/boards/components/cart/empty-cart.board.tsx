import { createBoard } from '@wixc3/react-board';
import { ComponentWrapper } from '_codux/board-wrappers';
import { MockEcomAPIContextProvider } from '_codux/mocks';
import { Cart, CartOpenContextProvider } from '~/components/cart';
import { CartOpener } from './cart-opener';

export default createBoard({
    name: 'Cart - Empty',
    Board: () => (
        <ComponentWrapper>
            <MockEcomAPIContextProvider settings={{ numberOfCartItems: 0 }}>
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
        windowHeight: 800,
    },
});
