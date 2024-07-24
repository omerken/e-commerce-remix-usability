import { Footer } from '~/components/site-footer/site-footer';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Footer',
    Board: () => <Footer />,
    tags: ['Component'],
    isSnippet: true,
    environmentProps: {
        windowHeight: 220,
    },
});
