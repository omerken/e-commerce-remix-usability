import { createBoard } from '@wixc3/react-board';
import { ErrorComponent } from '~/components/error-component/error-component';

export default createBoard({
    name: 'ErrorComponent',
    Board: () => (
        <ErrorComponent
            onActionButtonClick={() => {}}
        />
    ),
    tags: ['Component'],
});
