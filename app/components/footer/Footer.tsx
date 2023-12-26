import Link from "next/link";
import Container from "../container/Container";
import FooterList from "./FooterList";
import { MdFacebook  } from "react-icons/md";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="bg-slate-700 mt-16 text-sm text-slate-200">
            <Container>
                <div className="flex flex-col md:flex-row justify-between pt-16 pb-12">
                    <FooterList>
                        <h3 className="text-lg font-semibold mb-2">Shop Categories</h3>
                        <Link href='#'>Phones</Link>
                        <Link href='#'>Laptops</Link>
                        <Link href='#'>Dekstops</Link>
                        <Link href='#'>TV</Link>
                        <Link href='#'>Accessories</Link>
                    </FooterList>
                    <FooterList>
                        <h3 className="text-lg font-semibold mb-2">Customer Services</h3>
                        <Link href='#'>Contact Us</Link>
                        <Link href='#'>Shopping Policy</Link>
                        <Link href='#'>Returns & Exchanges</Link>
                        <Link href='#'>Watches</Link>
                        <Link href='#'>FAQs</Link>
                    </FooterList>

                    <div className="w-full md:w-1/3 mb-6 md:md-0">
                        <h3 className="text-lg font-semibold mb-2">About Us</h3>
                        <p className="mb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error fugiat, incidunt minus sequi quam voluptates ducimus nesciunt officia nisi assumenda cupiditate voluptate, quia aliquam eaque. Adipisci dolores obcaecati soluta nesciunt! Laboriosam eius, dolorem rerum aliquam recusandae molestiae. Consequatur assumenda quos odit, voluptate eveniet ad saepe nobis possimus, natus quo amet.</p>
                        <p>&copy; {new Date().getFullYear()} E~Shop. All rights reserved </p>
                    </div>

                    <FooterList>
                        <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                        <div className="flex items-center gap-2">
                            <Link href='#'>
                                <MdFacebook size={24}/>
                            </Link>
                            <Link href='#'>
                                <AiFillTwitterCircle  size={24}/>
                            </Link>
                            <Link href='#'>
                                <AiFillLinkedin size={24}/>
                            </Link>
                            <Link href='#'>
                                <AiFillInstagram size={24}/>
                            </Link>
                        </div>
                    </FooterList>
                </div>
            </Container>
        </div>
    );
};

export default Footer;