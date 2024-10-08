import { createBoard } from '@wixc3/react-board';
import { PageWrapper } from '_codux/board-wrappers/page-wrapper';
import AboutPage from '~/page/about/route';

export default createBoard({
    name: 'Page - About',
    Board: () => (
        <PageWrapper>
            <AboutPage />
        </PageWrapper>
    ),
    tags: ['Page'],
});
