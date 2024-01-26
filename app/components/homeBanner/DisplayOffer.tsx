import Image from "next/image";

interface DisplayOfferProps {
    image: string,
    category: string,
    percent: number,
    description: string
}

const DisplayOffer: React.FC<DisplayOfferProps> = ({ image, category, percent, description }) => {
    return (
        <div className="flex gap-6 justify-between items-center bg-[#F5F5F5] px-4 py-2 rounded-xl">
            <div>
                <Image
                    src={`${image}`}
                    alt={category}
                    width={200}
                    height={400}
                    className="rounded-lg"
                />
            </div>

            <div>
                <div>
                    <h3 className="text-xl uppercase font-medium mb-1"> {category} </h3>
                    <p className="text-md text-slate-700"> {description} </p>
                </div>
                <div className="flex gap-3 items-center mt-1">
                    <p className="text-slate-700 text-xl font-light">UP TO </p>
                    <h5 className="text-4xl font-bold "> {percent}% </h5>
                </div>
            </div>
        </div>
    );
};

export default DisplayOffer;