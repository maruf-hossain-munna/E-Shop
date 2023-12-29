import { CartProductType } from "@/app/product/[productId]/DisplayProductDetails";
import { product } from "@/app/utils/product";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

type CartContextType = {
    cartTotalQuantity: number;
    cartProducts: CartProductType[] | null;
    handleAddProductToCart: (product: CartProductType) => void;
}

export const CartContext = createContext<CartContextType | null>(null);


interface Props {
    [propName: string]: any
}

export const CartContextProvider = (props: Props) => {

    const [cartTotalQuantity, setCartTotalQuantity] = useState(0);
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null);

    // Get Item from localStorage
    useEffect(() =>{
        const cartItems : any = localStorage.getItem('eShopCartItems');
        const cProducts : CartProductType[] | null = JSON.parse(cartItems);

        setCartProducts(cProducts)
    }, [])

    const handleAddProductToCart = useCallback((product : CartProductType) => {
        setCartProducts((prev) => {
            let updatedCart;

            if (prev) {
                updatedCart = [...prev, product]
            }
            else {
                updatedCart = [product];
            }

            // Setitem in localStorage
            localStorage.setItem('eShopCartItems', JSON.stringify(updatedCart));

            return updatedCart;
        });
    }, []);

    const value = {
        cartTotalQuantity,
        cartProducts,
        handleAddProductToCart
    };

    return <CartContext.Provider value={value} {...props} />
}


export const useCart = () => {
    const context = useContext(CartContext);

    if (context === null) {
        throw new Error("useCart must be used within a CartContextProvider")
    }

    return context;
}