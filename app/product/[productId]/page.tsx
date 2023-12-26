import Container from "@/app/components/container/Container";
import { product } from "@/app/utils/product";
import DisplayProductDetails from "./DisplayProductDetails";
import ListRating from "./ListRating";

interface IParams {
    productIs? : string;
}

const ProductDetails = ({params} : {params : IParams}) => {
    // console.log({ params});
    return (
        <div className="pt-12">
            <Container>
                <DisplayProductDetails product={product} />

                {/* Product ratings and reviews */}
                <div className="mt-20 flex flex-col gap-4 ">
                    <div>
                       add rating
                    </div>
                    <div>
                        <ListRating
                            product={product}
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ProductDetails;