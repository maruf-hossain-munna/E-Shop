'use client';

import { CartProductType } from "@/app/product/[productId]/DisplayProductDetails";

interface SetQuantityProps {
    cartCounter?: boolean,
    cartProduct: CartProductType,
    handleQuantityIncrease: () => void,
    handleQuantityDecrease: () => void
}

const quantityBtnStyles = 'border-[1.2px] border-slate-300 px-2  rounded';

const SetQuantity: React.FC<SetQuantityProps> = ({ cartCounter, cartProduct, handleQuantityIncrease, handleQuantityDecrease }) => {
    return (
        <div className="flex gap-8 text-sm items-center">
            {cartCounter ? null : <div className="font-semibold">
                QUANTITY :
            </div>}
            <div className="flex items-center gap-3 font-medium">
                <button
                    className={quantityBtnStyles}
                    onClick={handleQuantityDecrease}
                >-</button>
                <div> {cartProduct.quantity} </div>
                <button
                    className={quantityBtnStyles}
                    onClick={handleQuantityIncrease}
                >+</button>
            </div>
        </div>
    );
};

export default SetQuantity;