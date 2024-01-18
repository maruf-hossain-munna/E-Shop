'use client';

import { CartProductType, SelectedImgType } from "@/app/product/[productId]/DisplayProductDetails";

interface setColorProps {
    images: SelectedImgType | any,
    cartProduct: CartProductType,
    handleColorSelect: (value: SelectedImgType) => void
}

const SetColor: React.FC<setColorProps> = ({ images, cartProduct, handleColorSelect }) => {
    return (
        <div className="flex items-center gap-4">
            <span className="font-semibold">COLOR :  </span>
            <div className="flex gap-1">
                {
                    images.map((image : any) => {
                        return (
                            <div 
                                onClick={() => handleColorSelect(image)}
                                key={image.color}
                                className={`w-7 h-7 rounded-full border-teal-400 flex items-center justify-center 
                                ${cartProduct.selectedImg.color === image.color ? 'border-[1.5px]' : 'border-none'}`}>
                                <div
                                    style={{background : image.colorCode}}
                                    className="w-5 h-5 rounded-full border-[1.2px] border-slate-300 cursor-pointer"
                                >

                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default SetColor;