import { createBoard } from '@wixc3/react-board';
import { PageWrapper } from '_codux/board-wrappers/page-wrapper';
import ThankYouPage from '~/page/thank-you._index/route';

export default createBoard({
    name: 'Page - ThankYou',
    Board: () => (
        <PageWrapper>
            <ThankYouPage />
        </PageWrapper>
    ),
    tags: ['Page'],
});
