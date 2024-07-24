import { HeroImage } from '~/components/hero-image/hero-image';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Hero Image',
    Board: () => (
        <HeroImage
            bottomLabel="Selected Smartphone Brands"
            buttonLabel="Shop"
            title="Up to 30% off"
            topLabel="Holiday Deals"
        />
    ),
    tags: ['Component'],
    isSnippet: true,
});
