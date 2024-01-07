'use client';

import Image from "next/image";
import { CartProductType } from "../product/[productId]/DisplayProductDetails";
import { formatPrice } from "../utils/formatPrice";
import { truncateText } from "../utils/truncate";
import Link from "next/link";
import SetQuantity from "../components/products/SetQuantity";
import { useCart } from "@/hooks/useCart";
import { useCallback } from "react";

interface ItemContentProps {
    item: CartProductType
}

const ItemContent: React.FC<ItemContentProps> = ({ item }) => {

    const { handleRemoveProductfromCart, handleQuantityIncrease, handleQuantityDecrease,  } = useCart();

    return (
        <div className="w-full grid grid-cols-5 gap-4 py-4 border-t-[1.5px] border-slate-300 text-xs md:text-sm items-center">
            <div className="col-span-2 flex justify-self-start gap-2 md:gap-4">
                <Link href={`/product/${item.id}`}>
                    <div className="relative aspect-square w-[70px]">
                        <Image
                            src={item.selectedImg.image}
                            alt={item.name}
                            fill
                            className="object-contain"
                        />
                    </div>
                </Link>

                <div className="flex flex-col justify-between items-start">
                    <Link href={`/product/${item.id}`}>
                        <h4> {truncateText(item.name)} </h4>
                    </Link>
                    <p> {item.selectedImg.color} </p>
                    <button
                        onClick={() => handleRemoveProductfromCart(item)}
                        className="underline text-slate-500 cursor-pointer">
                        Remove
                    </button>
                </div>
            </div>

            <div className="justify-self-center">
                {formatPrice(item.price)}
            </div>

            <div className="justify-self-center">
                <SetQuantity
                    cartCounter={true}
                    cartProduct={item}
                    handleQuantityIncrease={() => { handleQuantityIncrease(item) }}
                    handleQuantityDecrease={() => { handleQuantityDecrease(item) }}
                />
            </div>

            <div className="justify-self-end font-semibold">
                {formatPrice(item.price * item.quantity)}
            </div>
        </div>
    );
};

export default ItemContent;