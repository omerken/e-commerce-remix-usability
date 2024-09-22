import { faker } from '@faker-js/faker';
import { cart, orders } from '@wix/ecom';
import { products } from '@wix/stores';
import type { Cart, CartItemDetails, CollectionDetails, OrderDetails, Product } from '~/api/types';
import { CartTotals } from '~/api/types';

export type FakeDataSettings = {
    numberOfCartItems?: number;
    /** @important */
    numberOfProducts?: number;
    /** @important */
    numberOfWordsInTitle?: number;
    /** @important */
    priceMinValue?: number;
    /** @important */
    priceMaxValue?: number;
};

export function createProducts(settings?: FakeDataSettings): Product[] {
    return Array.from(new Array(settings?.numberOfProducts ?? 10)).map((id) => createProduct({ id, settings }));
}

export function createProduct(args: { id?: string; slug?: string; settings?: FakeDataSettings }): Product {
    const { id, slug, settings } = args;
    const numOfImages = faker.number.int({ min: 2, max: 4 });
    const images = Array.from(new Array(numOfImages)).map(() => createImage());
    const mainImage = images[faker.number.int({ min: 0, max: numOfImages - 1 })];

    const price = faker.commerce.price({
        symbol: '$',
        min: settings?.priceMinValue,
        max: settings?.priceMaxValue,
    });
    return {
        _id: id ?? faker.string.uuid(),
        slug: slug ?? faker.lorem.word(),
        name: faker.lorem.words(settings?.numberOfWordsInTitle || 2),
        description: faker.commerce.productDescription(),
        media: {
            items: images,
            mainMedia: mainImage,
        },
        price: {
            formatted: {
                price: price,
                discountedPrice: price,
            },
            currency: 'USD',
            discountedPrice: parseFloat(price),
        },
        productType: products.ProductType.digital,
        additionalInfoSections: [
            { title: 'PRODUCT INFO', description: faker.lorem.paragraph() },
            { title: 'RETURN & REFUND POLICY', description: faker.lorem.paragraph() },
            { title: 'SHIPPING INFO', description: faker.lorem.paragraph() },
        ],
        collectionIds: [],
        customTextFields: [],
        inventoryItemId: '',
        numericId: '',
        productOptions: [],
        ribbons: [],
        variants: [],
    };
}

function createImage(): products.MediaItem {
    const image = faker.image.dataUri();

    return {
        _id: faker.string.uuid(),
        image: {
            url: image,
        },
        title: faker.lorem.word(),
        mediaType: products.MediaItemType.image,
    };
}

export function createCart(items: products.Product[]): Cart {
    return {
        _id: faker.string.uuid(),
        currency: '$',
        lineItems: items.map(createCartItem),
        appliedDiscounts: [],
        conversionCurrency: 'USD',
        weightUnit: cart.WeightUnit.KG,
    };
}

export function createCartItem(product: products.Product): CartItemDetails {
    return {
        _id: faker.string.uuid(),
        availability: { status: cart.ItemAvailabilityStatus.AVAILABLE },
        productName: {
            original: product.name!,
            translated: product.name,
        },
        quantity: faker.number.int({ min: 1, max: 10 }),
        image: product.media!.mainMedia!.image!.url!,
        paymentOption: cart.PaymentOptionType.FULL_PAYMENT_ONLINE,
        price: createPrice(),
        fullPrice: createPrice(),
        descriptionLines: [],
        url: '',
        couponScopes: [],
        savePaymentMethod: false,
        fixedQuantity: false,
        priceUndetermined: false,
        customLineItem: false,
    };
}

function createPrice() {
    const priceStr = faker.commerce.price({ symbol: '$' });
    const price = parseFloat(priceStr.replace('$', ''));

    return {
        amount: price.toString(),
        convertedAmount: price.toString(),
        formattedConvertedAmount: priceStr,
        formattedAmount: priceStr,
    };
}

export function getCartTotals(): CartTotals {
    return {
        currency: '$',
        additionalFees: [],
        appliedDiscounts: [],
        calculatedLineItems: [],
        violations: [],
        weightUnit: cart.WeightUnit.KG,
        priceSummary: {
            subtotal: createPrice(),
        },
    };
}

export function createCategory(settings?: FakeDataSettings): CollectionDetails {
    return {
        _id: faker.string.uuid(),
        numberOfProducts: 1,
        name: faker.lorem.words(),
        description: faker.lorem.words(settings?.numberOfWordsInTitle || 2),
        media: { items: [] },
        slug: faker.lorem.words(),
    };
}

export function createOrder(id: string): OrderDetails {
    return {
        _id: id,
        number: `${faker.number.int({ min: 1000, max: 9999 })}`,
        appliedDiscounts: [],
        attributionSource: orders.AttributionSource.UNSPECIFIED,
        activities: [],
        additionalFees: [],
        customFields: [],
        fulfillmentStatus: orders.FulfillmentStatus.NOT_FULFILLED,
        isInternalOrderCreate: false,
        status: orders.OrderStatus.APPROVED,
        paymentStatus: orders.PaymentStatus.NOT_PAID,
        taxIncludedInPrices: false,
        weightUnit: orders.WeightUnit.UNSPECIFIED_WEIGHT_UNIT,
        lineItems: [
            {
                _id: faker.string.uuid(),
                quantity: 1,
                paymentOption: orders.PaymentOptionType.FULL_PAYMENT_OFFLINE,
                productName: {
                    original: faker.lorem.paragraph(),
                    translated: faker.lorem.paragraph(),
                },
                image: 'https://static.wixstatic.com/media/22e53e_efc1552d8050407f82ea158302d0debd~mv2.jpg/v1/fit/w_200,h_200,q_90/file.jpg',
                locations: [],
                descriptionLines: [
                    {
                        color: 'Black',
                        name: {
                            translated: 'Color',
                            original: 'Color',
                        },
                        lineType: orders.DescriptionLineType.COLOR,
                    },
                ],
            },
        ],
    };
}
