'use client';

import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { PiShoppingCartLight } from "react-icons/pi";

const CartCount = () => {
    const router = useRouter();
    const { cartTotalQuantity } = useCart();
    return (
        <div
            onClick={() => router.push('/cart')}
            className="relative cursor-pointer"
        >
            <div className="text-3xl">
                <PiShoppingCartLight />
            </div>

            <span className="absolute top-[-10px] right-[-10px] bg-slate-700 text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">
                {cartTotalQuantity}
            </span>

        </div>
    );
};

export default CartCount;