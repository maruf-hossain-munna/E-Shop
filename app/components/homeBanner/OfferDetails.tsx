import DisplayOffer from "./DisplayOffer";


const OfferDetails = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <DisplayOffer 
                category="Accesories"
                image="/images/accesories.jpg"
                description="All Accesories have a Big Discount."
                percent={60}
            />
            <DisplayOffer 
                category="Phones"
                image="/images/phones.jpg"
                description="All Phones have a Big Discount."
                percent={30}
            />
            <DisplayOffer 
                category="Laptops"
                image="/images/laptops.jpg"
                description="All Laptops have a Big Discount."
                percent={35}
            />
        </div>
    );
};

export default OfferDetails;