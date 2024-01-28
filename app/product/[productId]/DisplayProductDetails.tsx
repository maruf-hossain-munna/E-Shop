'use client';

import Button from "@/app/components/button/Button";
import Skeleton from "@/app/components/loading/Skeleton";
import ProductImage from "@/app/components/products/ProductImage";
import SetColor from "@/app/components/products/SetColor";
import SetQuantity from "@/app/components/products/SetQuantity";
import { formatPrice } from "@/app/utils/formatPrice";
import { useCart } from "@/hooks/useCart";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { MdCheckCircle } from "react-icons/md";

interface ProductDetailsProps {
    product: any
}

export type CartProductType = {
    name: string,
    id: string,
    description: string,
    category: string,
    brand: string,
    selectedImg: SelectedImgType,
    price: number,
    quantity: number
}

export type SelectedImgType = {
    color: string,
    colorCode: string,
    image: string
}

const Horizontal = () => {
    return <hr className="w-[35%] my-2" />
}

const DisplayProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {

    const router = useRouter();

    const { handleAddProductToCart, cartProducts } = useCart();
    const [isProductInCart, setIsProductInCart] = useState(false);

    const [cartProduct, setCartProduct] = useState<CartProductType>({
        name: product.name,
        id: product.id,
        description: product.description,
        category: product.category,
        brand: product.brand,
        selectedImg: { ...product.images[0] },
        price: product.price,
        quantity: 1
    })

    // console.log(cartProducts);

    useEffect(() => {
        setIsProductInCart(false);
        if (cartProducts) {
            const existingIndex = cartProducts.findIndex((item) => item.id === product.id);

            if (existingIndex > -1) {
                setIsProductInCart(true)
            }
        }
    }, [cartProducts, product.id]);

    const handleColorSelect = useCallback((value: SelectedImgType) => {
        setCartProduct((prev) => {
            return { ...prev, selectedImg: value }
        })
    }, [])

    // console.log(cartProduct);

    // Get product rating from reviews
    const productRating = product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) / product.reviews.length

    // Quantity Button handle
    const handleQuantityIncrease = useCallback(() => {

        if (cartProduct.quantity >= 20) {
            return;
        }

        setCartProduct((prev) => {
            return { ...prev, quantity: prev.quantity + 1 };
        })
    }, [cartProduct])

    const handleQuantityDecrease = useCallback(() => {
        if (cartProduct.quantity <= 1) {
            return;
        }

        setCartProduct((prev) => {
            return { ...prev, quantity: prev.quantity - 1 }
        })
    }, [cartProduct]);

// Skeleton loading
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 600)
    }, [])


    return (
        <div>
            {
                isLoading ? <Skeleton />: <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <ProductImage
                            cartProduct={cartProduct}
                            product={product}
                            handleColorSelect={handleColorSelect}
                        />
                    </div>

                    <div className="flex flex-col gap-2 text-sm text-slate-500">
                        <h2 className="text-3xl font-medium text-slate-700">{product.name} </h2>
                        <div className="text-2xl text-slate-700 font-semibold">
                            {formatPrice(product.price)}
                        </div>
                        <div className="flex items-center gap-4">
                            <Rating value={productRating} precision={0.5} readOnly size="medium" />
                            <p> {product.reviews.length} reviews </p>
                        </div>

                        <Horizontal />

                        <div className="text-justify">
                            <p>{product.description}</p>
                        </div>
                        <Horizontal />
                        <div>
                            <span className="font-semibold uppercase">Category : </span>
                            <span>{product.category} </span>
                        </div>
                        <div>
                            <span className="font-semibold uppercase">Brand : </span>
                            <span>{product.brand} </span>
                        </div>
                        <div className={product.inStock ? 'text-teal-500' : 'text-rose-500'}>
                            {product.inStock ? 'In Stock' : 'Out Of Stock'}
                        </div>
                        <Horizontal />

                        {
                            isProductInCart ?
                                <>
                                    <div className="flex items-center gap-2 mb-3">
                                        <MdCheckCircle size={20} className="text-teal-400" />
                                        <span className="text-slate-500">Product already added in the cart</span>
                                    </div>
                                    <div>
                                        <Button
                                            label="View cart"
                                            outline
                                            small
                                            onClick={() => router.push('/cart')}
                                            custom="max-w-[300px]"
                                        />
                                    </div>
                                </>
                                :

                                <div>
                                    <SetColor
                                        images={product.images}
                                        cartProduct={cartProduct}
                                        handleColorSelect={handleColorSelect}
                                    />
                                    <Horizontal />

                                    <div className="py-2">
                                        <SetQuantity
                                            // cartCounter={}
                                            cartProduct={cartProduct}
                                            handleQuantityIncrease={handleQuantityIncrease}
                                            handleQuantityDecrease={handleQuantityDecrease}
                                        />
                                    </div>
                                    <Horizontal />

                                    <div className="mt-4">
                                        <Button
                                            // outline
                                            label="Add To Cart"
                                            onClick={() => handleAddProductToCart(cartProduct)}
                                        />
                                    </div>
                                </div>
                        }


                    </div>
                </div>
            }
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <ProductImage
                        cartProduct={cartProduct}
                        product={product}
                        handleColorSelect={handleColorSelect}
                    />
                </div>

                <div className="flex flex-col gap-2 text-sm text-slate-500">
                    <h2 className="text-3xl font-medium text-slate-700">{product.name} </h2>
                    <div className="text-2xl text-slate-700 font-semibold">
                        {formatPrice(product.price)}
                    </div>
                    <div className="flex items-center gap-4">
                        <Rating value={productRating} precision={0.5} readOnly size="medium" />
                        <p> {product.reviews.length} reviews </p>
                    </div>

                    <Horizontal />

                    <div className="text-justify">
                        <p>{product.description}</p>
                    </div>
                    <Horizontal />
                    <div>
                        <span className="font-semibold uppercase">Category : </span>
                        <span>{product.category} </span>
                    </div>
                    <div>
                        <span className="font-semibold uppercase">Brand : </span>
                        <span>{product.brand} </span>
                    </div>
                    <div className={product.inStock ? 'text-teal-500' : 'text-rose-500'}>
                        {product.inStock ? 'In Stock' : 'Out Of Stock'}
                    </div>
                    <Horizontal />

                    {
                        isProductInCart ?
                            <>
                                <div className="flex items-center gap-2 mb-3">
                                    <MdCheckCircle size={20} className="text-teal-400" />
                                    <span className="text-slate-500">Product already added in the cart</span>
                                </div>
                                <div>
                                    <Button
                                        label="View cart"
                                        outline
                                        small
                                        onClick={() => router.push('/cart')}
                                        custom="max-w-[300px]"
                                    />
                                </div>
                            </>
                            :

                            <div>
                                <SetColor
                                    images={product.images}
                                    cartProduct={cartProduct}
                                    handleColorSelect={handleColorSelect}
                                />
                                <Horizontal />

                                <div className="py-2">
                                    <SetQuantity
                                        // cartCounter={}
                                        cartProduct={cartProduct}
                                        handleQuantityIncrease={handleQuantityIncrease}
                                        handleQuantityDecrease={handleQuantityDecrease}
                                    />
                                </div>
                                <Horizontal />

                                <div className="mt-4">
                                    <Button
                                        // outline
                                        label="Add To Cart"
                                        onClick={() => handleAddProductToCart(cartProduct)}
                                    />
                                </div>
                            </div>
                    }


                </div>
            </div> */}
        </div>
    );
};

export default DisplayProductDetails;