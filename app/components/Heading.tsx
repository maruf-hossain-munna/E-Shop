interface HeadingProps {
    title : string,
    center? : boolean,
    custom ? : string
}

const Heading : React.FC <HeadingProps>= ( {title, center, custom}) => {
    return (
        <div className={`${center ? 'text-center' : 'text-start'}`}>
            <h2 className="text-2xl font-bold"> {title} </h2>
        </div>
    );
};

export default Heading;