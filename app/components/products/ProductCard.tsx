'use client';

import { formatPrice } from "@/app/utils/formatPrice";
import { truncateText } from "@/app/utils/truncate";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";


interface ProductCardProps {
    data: any
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {

    const router = useRouter();

    // Get product rating from reviews
    const productRating = data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) / data.reviews.length

    return (
        <div
            onClick={ () => router.push(`/product/${data.id}`)}
            className="col-span-1 border-[1.3px] cursor-pointer border-slate-200 bg-slate-50 rounded p-3 transition hover:scale-105 text-center text-sm">
            <div className="flex flex-col w-full gap-1">
                <div className="aspect-square overflow-hidden relative w-full">
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
        </div>
    );
};

export default ProductCard;