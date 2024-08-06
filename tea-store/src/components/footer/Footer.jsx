import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";



export default function Footer() {

    const { isAuthenticated } = useContext(AuthContext);
    
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
                            <Link className="hover:font-semibold" to={"/collection/matcha"}>Matcha</Link>
                            <Link className="hover:font-semibold" to={"/collection/gyokuro"}>Gyokuro</Link>
                            <Link className="hover:font-semibold" to={"/collection/sencha"}>Sencha</Link>
                            <Link className="hover:font-semibold" to={"/collection/hojicha"}>Hojicha,Genmaicha</Link>
                            <Link className="hover:font-semibold" to={"/collection/teabag"}>Teabags</Link>
                            <Link className="hover:font-semibold" to={"/collection/organic"}>Organic</Link>
                            <Link className="hover:font-semibold" to={"/collection/utensils"}>Utensils</Link>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl border-b-[1px] border-black">Account Settings</h2>
                        <div className="flex flex-col gap-5 pt-5 text-xl">
                            {isAuthenticated ?
                                (<Link className="hover:font-semibold" to="/profile">Profile</Link>)
                                :
                                (<><Link className="hover:font-semibold" to="/signin">Sign in</Link>
                                    <Link className="hover:font-semibold" to="/signup">Sign up</Link></>)}

                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl border-b-[1px] border-black">Stories about the tea</h2>
                        <div className="flex flex-col gap-5 pt-5 text-xl ">
                            <Link className="hover:font-semibold" to={"/blog/recipe"}>Food pairing pointers</Link>
                            <Link className="hover:font-semibold" to={"/blog/story"}>Different ways to enjoy Japanese tea</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#F0EBE0]">

                <div className="flex text-xl justify-around pt-5">
                    <Link href="#"><i className="fa-brands fa-instagram"></i></Link>
                    <Link href="#"><i className="fa-brands fa-square-facebook"></i></Link>
                    <Link href="#"><i className="fa-brands fa-x-twitter"></i></Link>
                    <Link href="#"><i className="fa-brands fa-youtube"></i></Link>
                </div>
                <div>
                    <p className="text-center text-l mt-5">© Copyright 2024</p>
                </div>
            </div>

        </div>

    );
}