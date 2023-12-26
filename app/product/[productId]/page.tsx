import Container from "@/app/components/container/Container";
import { product } from "@/app/utils/product";
import DisplayProductDetails from "./DisplayProductDetails";

interface IParams {
    productIs? : string;
}

const ProductDetails = ({params} : {params : IParams}) => {
    // console.log({ params});
    return (
        <div className="pt-12">
            <Container>
                <DisplayProductDetails product={product} />
            </Container>
        </div>
    );
};

export default ProductDetails;