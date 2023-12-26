'use client';

import { CartProductType, SelectedImgType } from "@/app/product/[productId]/DisplayProductDetails";
import Image from "next/image";

interface ProductImageProp {
    cartProduct: CartProductType,
    product: any,
    handleColorSelect: (value: SelectedImgType) => void
}

const ProductImage: React.FC<ProductImageProp> = ({ cartProduct, product, handleColorSelect }) => {
    return (
        <div className="grid grid-cols-6 gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">

            <div className="flex flex-col gap-4 items-center justify-center border rounded h-full max-h-[400px] min-h-[300px] sm:min-h-[400px]">
                {
                    product.images.map((image: SelectedImgType) => {
                        return <div
                            key={image.color}
                            onClick={() => handleColorSelect(image)}
                            className={`relative w-[80%] aspect-square border-teal-400 rounded
                                    ${cartProduct.selectedImg.color === image.color ? 'border-[1.5px]' : 'border-none'}
                            `}>
                            <Image
                                src={image.image}
                                alt={image.color}
                                fill
                                className="object-contain py-1 "
                            />
                        </div>
                    })
                }
            </div>

            <div className="col-span-5 relative aspect-square ">
                <Image
                    src={cartProduct.selectedImg.image}
                    alt={cartProduct.name}
                    fill
                    className="object-contain w-full h-full max-h-[400px] min-h-[300px] sm:min-h-[400px]"
                />
            </div>
        </div>
    );
};

export default ProductImage;