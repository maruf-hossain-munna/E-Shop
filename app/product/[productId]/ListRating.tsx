'use client';

import Avatar from "@/app/components/Avatar";
import Heading from "@/app/components/Heading";
import { Rating } from "@mui/material";
import moment from "moment";

interface ListRatingProps {
    product: any
}


const ListRating: React.FC<ListRatingProps> = ({ product }) => {

    // Get product rating from reviews
    const productRating = product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) / product.reviews.length

    return (
        <div>
            <Heading
                title="Product Review"
            />
            <hr className="my-4" />

            <div className="text-sm mt-2 flex flex-col ">
                {
                    product.reviews && product.reviews.map((review: any) => {
                        return <div
                            key={review.id}
                            className="max-w-[400px] flex flex-col gap-1"
                        >
                            <div className="flex items-center gap-2">
                                <div>
                                    <Avatar
                                        src={review?.user?.image}
                                    />
                                </div>
                                <div className="font-semibold"> {review?.user?.name} </div>
                                <div className="font-light"> {moment(review.createDate).fromNow()} </div>
                            </div>
                            <Rating value={productRating} precision={0.5} readOnly size="medium" />
                            <div>
                                {review.comment}
                            </div>

                            <hr className="my-4" />

                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default ListRating;