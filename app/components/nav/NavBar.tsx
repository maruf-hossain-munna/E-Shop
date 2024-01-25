import Link from "next/link";
import Container from "../container/Container";
import { Redressed } from "next/font/google";
import CartCount from "./CartCount";
import SearchBar from "./SearchBar";
import { FaRegUserCircle} from "react-icons/fa";


const redressed = Redressed({ subsets: ['latin'], weight: ['400'] })

const NavBar = () => {
    return (
        <div className="sticky top-0 z-30 w-full bg-slate-200 shadow-sm">
            <div className="py-4">
                <Container>
                    <div className="flex justify-between items-center gap-3 md:gap-0">
                        <Link href='/' className={`${redressed.className} text-2xl font-bold`}>
                            E~Shop
                        </Link>
                        <div className="hidden md:block">
                           <SearchBar />
                        </div>
                        <div className="flex items-center gap-8 md:gap-12">
                            <div>
                                <CartCount />
                            </div>
                            <div>
                                <Link href='/register'>
                                    <FaRegUserCircle  size={27}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default NavBar;