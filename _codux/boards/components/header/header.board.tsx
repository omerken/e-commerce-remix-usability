import ComponentWrapper from '_codux/board-wrappers/component-wrapper';
import { Header } from '~/components/header/header';
import { createBoard } from '@wixc3/react-board';
import { CartOpenContextProvider } from '~/components/cart/cart-open-context';

export default createBoard({
    name: 'Header',
    Board: () => (
        <ComponentWrapper>
            <CartOpenContextProvider>
                <Header />
            </CartOpenContextProvider>
        </ComponentWrapper>
    ),
    tags: ['Component'],
    isSnippet: true,
});
