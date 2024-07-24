import type { Product } from '@wix/stores_products';

export const productDetailsMock: Product = {
    name: "I'm a product",
    slug: 'i-m-a-product-5',
    priceData: {
        currency: 'USD',
        price: 15,
        discountedPrice: 15,
        formatted: {
            price: '$15.00',
            discountedPrice: '$15.00',
        },
    },
    additionalInfoSections: [
        {
            title: 'PRODUCT INFO',
            description:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
        },
        {
            title: 'RETURN & REFUND POLICY',
            description:
                'I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.',
        },
        {
            title: 'SHIPPING INFO',
            description:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
        },
    ],
    media: {
        mainMedia: {
            thumbnail: {
                url: 'https://static.wixstatic.com/media/22e53e_b53f9a53db034e178a3f2d794ae70f1c~mv2.jpg/v1/fit/w_50,h_50,q_90/file.jpg',
            },
            title: 'Chair-Product.jpg',
            image: {
                url: 'https://static.wixstatic.com/media/22e53e_b53f9a53db034e178a3f2d794ae70f1c~mv2.jpg/v1/fit/w_4000,h_4000,q_90/file.jpg',
            },
            _id: '22e53e_b53f9a53db034e178a3f2d794ae70f1c~mv2.jpg',
        },
        items: [
            {
                thumbnail: {
                    url: 'https://static.wixstatic.com/media/22e53e_b53f9a53db034e178a3f2d794ae70f1c~mv2.jpg/v1/fit/w_50,h_50,q_90/file.jpg',
                },
                title: 'Chair-Product.jpg',
                image: {
                    url: 'https://static.wixstatic.com/media/22e53e_b53f9a53db034e178a3f2d794ae70f1c~mv2.jpg/v1/fit/w_4000,h_4000,q_90/file.jpg',
                },
                _id: '22e53e_b53f9a53db034e178a3f2d794ae70f1c~mv2.jpg',
            },
            {
                thumbnail: {
                    url: 'https://static.wixstatic.com/media/22e53e_6d297acebd3b4b2890f1a0e92b8a7158~mv2.jpg/v1/fit/w_50,h_50,q_90/file.jpg',
                },
                title: 'Chair-Context.jpg',
                image: {
                    url: 'https://static.wixstatic.com/media/22e53e_6d297acebd3b4b2890f1a0e92b8a7158~mv2.jpg/v1/fit/w_2000,h_2000,q_90/file.jpg',
                },
                _id: '22e53e_6d297acebd3b4b2890f1a0e92b8a7158~mv2.jpg',
            },
        ],
    },
    _id: '3fb6a3c8-988b-8755-04bd-5c59ae0b18ea',
};
