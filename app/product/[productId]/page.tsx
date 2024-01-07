import Container from "@/app/components/container/Container";
import DisplayProductDetails from "./DisplayProductDetails";
import ListRating from "./ListRating";
import { products } from "@/app/utils/products";

interface IParams {
    productId? : string;
}

const ProductDetails = ({params} : {params : IParams}) => {
    // console.log({ params});

    const product = products.find((item) => item.id === params.productId);
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