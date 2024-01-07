import { CartProductType } from "@/app/product/[productId]/DisplayProductDetails";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

type CartContextType = {
    cartTotalQuantity: number;
    cartTotalAmount: number;
    cartProducts: CartProductType[] | null;
    handleAddProductToCart: (product: CartProductType) => void;
    handleRemoveProductfromCart: (product: CartProductType) => void;
    handleQuantityIncrease: (product: CartProductType) => void;
    handleQuantityDecrease: (product: CartProductType) => void;
    handleClearCart: () => void;
}

export const CartContext = createContext<CartContextType | null>(null);


interface Props {
    [propName: string]: any
}

export const CartContextProvider = (props: Props) => {

    const [cartTotalQuantity, setCartTotalQuantity] = useState(0);
    const [cartTotalAmount, setCartTotalAmount] = useState(0);
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null);

    // Get Item from localStorage
    useEffect(() => {
        const cartItems: any = localStorage.getItem('eShopCartItems');
        const cProducts: CartProductType[] | null = JSON.parse(cartItems);

        setCartProducts(cProducts)
    }, [])

    // Get Totals
    useEffect(() => {
        const getTotals = () => {
            if (cartProducts) {
                const { total, quantity } = cartProducts?.reduce((acc, item) => {
                    const itemTotal = item.price * item.quantity
                    acc.total += itemTotal
                    acc.quantity += item.quantity

                    return acc
                }, {
                    total: 0,
                    quantity: 0
                })

                setCartTotalQuantity(quantity);
                setCartTotalAmount(total);

            }
        };

        getTotals();
    }, [cartProducts])

    const handleAddProductToCart = useCallback((product: CartProductType) => {
        setCartProducts((prev) => {
            let updatedCart;

            if (prev) {
                updatedCart = [...prev, product]
            }
            else {
                updatedCart = [product];
            }

            toast.success('Product added successfully');

            // Setitem in localStorage
            localStorage.setItem('eShopCartItems', JSON.stringify(updatedCart));

            return updatedCart;
        });
    }, []);

    const handleRemoveProductfromCart = useCallback((product: CartProductType) => {
        if (cartProducts) {
            const filteredProducts = cartProducts.filter((item) => {
                return item.id !== product.id;
            });

            setCartProducts(filteredProducts);

            toast.success('Product removed successfully');

            // Setitem in localStorage
            localStorage.setItem('eShopCartItems', JSON.stringify(filteredProducts));
        }

    }, [cartProducts]);

    const handleQuantityIncrease = useCallback((product: CartProductType) => {
        let updatedCart;
        if (product.quantity >= 20) {
            return toast.error('Oopps!! Maxium Reached');
        }

        if (cartProducts) {
            updatedCart = [...cartProducts]
            const existingIndex = cartProducts.findIndex((item) => item.id === product.id);

            if (existingIndex > -1) {
                updatedCart[existingIndex].quantity = updatedCart[existingIndex].quantity + 1;
            }

            setCartProducts(updatedCart);
            // Setitem in localStorage
            localStorage.setItem('eShopCartItems', JSON.stringify(updatedCart));
        }

    }, [cartProducts]);

    const handleQuantityDecrease = useCallback((product: CartProductType) => {
        let updatedCart;
        if (product.quantity <= 1) {
            return toast.error('Oopps!! Minimum Reached. You can remove this product.');
        }

        if (cartProducts) {
            updatedCart = [...cartProducts]
            const existingIndex = cartProducts.findIndex((item) => item.id === product.id);

            if (existingIndex > -1) {
                updatedCart[existingIndex].quantity = updatedCart[existingIndex].quantity - 1;
            }

            setCartProducts(updatedCart);
            // Setitem in localStorage
            localStorage.setItem('eShopCartItems', JSON.stringify(updatedCart));
        }

    }, [cartProducts]);

    const handleClearCart = useCallback(() => {
        setCartProducts(null)
        setCartTotalQuantity(0)
        localStorage.setItem('eShopCartItems', JSON.stringify(null));
    }, [])

    const value = {
        cartTotalQuantity,
        cartTotalAmount,
        cartProducts,
        handleAddProductToCart,
        handleRemoveProductfromCart,
        handleQuantityIncrease,
        handleQuantityDecrease,
        handleClearCart
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