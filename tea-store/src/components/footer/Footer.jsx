import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div>
            <div className="bg-[#F0EBE0] mt-16 pt-10 px-10 pb-20 border-b-[1px] border-black">
                <div className="flex justify-around flex-wrap ">
                    <div >
                        <h2 className="text-2xl border-b-[1px] border-black">About the tea</h2>
                        <div className="flex flex-col gap-5 pt-5 text-xl">
                            <Link className="hover:font-semibold" to="/about-the-tea">About the tea</Link>
                            <Link className="hover:font-semibold" to="/types-of-tea">Types of tea</Link>
                            <Link className="hover:font-semibold" to="/preparing-tea">Preparing Tea</Link>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl border-b-[1px] border-black" >Shopping</h2>
                        <div className="flex flex-col  gap-5 pt-5 text-xl">
                            <a className="hover:font-semibold" href="">Matcha</a>
                            <a className="hover:font-semibold" href="">Guykuro</a>
                            <a className="hover:font-semibold" href="">Sencha</a>
                            <a className="hover:font-semibold" href="">Hojicha,Genmaicha</a>
                            <a className="hover:font-semibold" href="">Teabags</a>
                            <a className="hover:font-semibold" href="">Organic</a>
                            <a className="hover:font-semibold" href="">Utensils</a>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl border-b-[1px] border-black">Account Settings</h2>
                        <div className="flex flex-col gap-5 pt-5 text-xl">
                            <Link className="hover:font-semibold" to="/signin">Sign in</Link>
                            <Link className="hover:font-semibold" to="/signup">Sign up</Link>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl border-b-[1px] border-black">Support</h2>
                        <div className="flex flex-col gap-5 pt-5 text-xl ">
                            <a className="hover:font-semibold" href="">Contact us</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#F0EBE0]">

                <div className="flex text-xl justify-around pt-5">
                    <a href="javascript:void(0)"><i className="fa-brands fa-instagram"></i></a>
                    <a href="javascript:void(0)"><i className="fa-brands fa-square-facebook"></i></a>
                    <a href="javascript:void(0)"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="javascript:void(0)"><i className="fa-brands fa-youtube"></i></a>
                </div>
                <div>
                    <p className="text-center text-l mt-5">© Copyright 2024</p>
                </div>
            </div>

        </div>

    );
}