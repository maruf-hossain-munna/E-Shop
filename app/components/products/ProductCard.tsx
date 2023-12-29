'use client';

import { formatPrice } from "@/app/utils/formatPrice";
import { truncateText } from "@/app/utils/truncate";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ImageCarousel from "./ImageCaurosel";
import Button from "../button/Button";
import { useCart } from "@/hooks/useCart";
import { useState } from "react";
import { CartProductType } from "@/app/product/[productId]/DisplayProductDetails";


interface ProductCardProps {
    data: any
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {

    const router = useRouter();

    // maping for Image caurosel 
    // const carouselImage = data.images.map((image: any, index : number) => image.image )
    // console.log(carouselImage);

    // Get product rating from reviews
    const productRating = data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) / data.reviews.length

    const [cartProduct, setCartProduct] = useState<CartProductType>({
        name: data.name,
        id: data.id,
        description: data.description,
        category: data.category,
        brand: data.brand,
        selectedImg: { ...data.images[0] },
        price: data.price,
        quantity: 1
    });

    const { handleAddProductToCart, cartProducts } = useCart();

    console.log(cartProducts);

    return (
        <div
            // onClick={() => router.push(`/product/${data.id}`)}
            className="col-span-1 border-[1.3px] cursor-pointer border-slate-200 bg-slate-50 rounded p-3 transition hover:scale-105 text-center text-sm">
            <div
                onClick={() => router.push(`/product/${data.id}`)}
                className="flex flex-col w-full gap-1">
                <div className="aspect-square overflow-hidden relative w-full">
                    {/* Product image Carousel starts */}

                    {/* <ImageCarousel
                        images={carouselImage}
                    /> */}
                    {/* Product image Carousel end */}


                    <Image
                        src={data.images[0].image}
                        alt={data.name}
                        fill
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="mt-5 text-[16px] capitalize">
                    {truncateText(data.name)}
                </div>
                <div className="mt-1">
                    <Rating value={productRating} precision={0.5} readOnly size="small" />
                </div>
                <div className="">
                    {data.reviews.length} Reviews
                </div>
                <div className="text-[16px] mt-1 font-semibold">
                    {formatPrice(data.price)}
                </div>

            </div>
            <div>
                <Button
                    custom="mt-2"
                    small
                    label="Add To Cart"
                    onClick={() => handleAddProductToCart(cartProduct)}
                />
            </div>
        </div>
    );
};

export default ProductCard;