'use client';

import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Heading from "../components/Heading";
import Button from "../components/button/Button";
import ItemContent from "./ItemContent";
import { formatPrice } from "../utils/formatPrice";

const CartClient = () => {
    const { cartProducts, handleClearCart, cartTotalAmount } = useCart();

    if (!cartProducts || cartProducts.length === 0) {
        return (
            <div className="flex flex-col items-center gap-3">
                <div className="capitalize text-2xl font-medium">Your Cart is empty</div>

                <div>
                    <Link href='/' className="flex items-center gap-2 text-slate-500">
                        <MdArrowBack size={20} />
                        <span>Start Shopping</span>
                    </Link>
                </div>
            </div>
        )
    }
    return (
        <div className="w-full">
            <Heading
                title="Shopping Cart"
                center
            />

            <div className="grid grid-cols-5 gap-4 pb-2 pt-8 items-center">
                <div className="col-span-2 justify-self-start">
                    PRODUCT
                </div>
                <div className="justify-self-center">
                    PRICE
                </div>
                <div className="justify-self-center">
                    QUANTITY
                </div>
                <div className="justify-self-end">
                    TOTAL
                </div>
            </div>

            <div>
                {cartProducts && cartProducts.map((item) => {
                    return <ItemContent key={item.id} item={item} />
                })}
            </div>

            <div className="border-t-[1.5px] border-slate-300 py-4 flex justify-between gap-4 ">
                <div>
                    <Button
                        label="Clear Cart"
                        small
                        outline
                        onClick={() => { handleClearCart() }}
                        custom="max-w-[100px]"
                    />
                </div>


                <div className="flex flex-col gap-1 items-start">
                    <div className="text-lg font-semibold w-full flex justify-between items-center gap-4">
                        <span>Subtotal</span>
                        <span>{formatPrice(cartTotalAmount)} </span>
                    </div>
                    <p className="text-sm text-slate-500">Taxes and shipping calculated at checkout</p>

                    <div className="w-full mt-5 mb-2">
                        <Button
                            label="Checkout"
                            onClick={() => { }}
                        />
                    </div>

                    <div>
                        <Link href='/' className="flex items-center gap-2 text-slate-500 text-sm hover:text-slate-800">
                            <MdArrowBack size={20} />
                            <span>Continue Shopping</span>
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CartClient;