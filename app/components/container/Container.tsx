
interface childrenProps {
    children: React.ReactNode
}

const Container: React.FC<childrenProps> = ({ children }) => {
    return (
        <div className="max-w-[1920px] xl:px-20 md:px-2 px-4">
            {children}
        </div>
    );
};

export default Container;