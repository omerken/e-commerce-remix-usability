import { createBoard } from '@wixc3/react-board';
import { PageWrapper } from '_codux/board-wrappers/page-wrapper';
import ThankYouPage from 'app/routes/thank-you/route';

export default createBoard({
    name: 'Page - ThankYou',
    Board: () => <PageWrapper pageRouteObject={{ Component: () => <ThankYouPage /> }} />,
    tags: ['Page'],
    environmentProps: {
        windowHeight: 800,
    },
});
