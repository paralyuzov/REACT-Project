import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext";
import Search from "./Search";
import { useFavorites } from "../../contexts/FavoritesContext";

export default function Header() {
  const { isAuthenticated, changeAuthState } = useContext(AuthContext)
  const { calcTotalQuantity } = useCart();
  const navigate = useNavigate();
  const { favoriteCount } = useFavorites();

  const handleLogout = () => {

    localStorage.removeItem('accessToken');
    changeAuthState({});
    navigate('/');
  };

  const handleClick = (path) => {
    if (!isAuthenticated) {
      navigate('/signin');
    } else {
      navigate(path);
    }
  };

  return (
    <header className="header border-y-2">
      <div className="nav-top">
        <Link to={"/"}>
          <div className="logo">
            <img src="\src\assets\th (1).jpg" alt="picture" />
            <h2>
              MAJKO TEA
            </h2>
          </div>
        </Link>

        <div className="nav-left">
          <Search />
          <i className="fa-regular fa-user relative group rounded-full p-2 hover:bg-slate-200">
            <div className="absolute top-0 -left-20 transition group-hover:translate-y-6 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-40 min-w-[200px] transform ">
              <div className="relative top-6 p-2 bg-white rounded-xl shadow-xl w-full border-2 border-slate-200 ">
                <div className="relative z-10">
                  <div>
                    <div>
                      {isAuthenticated ? (<> <ul className="flex flex-col justify-center gap-2 px-5 text-xs" >
                        <li className="flex justify-center items-center gap-5 border-b-[1px] pb-1">
                          <a
                            className="hover:text-lime-400 duration-500 ease-in-out"
                            href=""
                          >
                            <i className="fa-regular fa-address-card"></i>
                            Profile
                          </a>
                        </li>
                        <li className="flex justify-center items-center gap-5 ">
                          <button
                            className="hover:text-lime-400 duration-500 ease-in-out"
                            onClick={handleLogout}
                          >
                            <i className="fa-solid fa-right-from-bracket"></i>
                            Logout
                          </button>
                        </li>
                      </ul>
                      </>) : (<>
                        <ul className="flex flex-col justify-center gap-2 px-5 text-xs">
                          <li className="flex justify-center items-center gap-5 border-b-[1px] pb-1">
                            <Link
                              className="hover:text-lime-400 duration-500 ease-in-out"
                              to={"/signin"}
                            >
                              <i className="fa-solid fa-right-to-bracket"></i>
                              Sign in
                            </Link>
                          </li>
                          <li className="flex justify-center items-center gap-5 border-b-[1px] pb-1">
                            <Link
                              className="hover:text-lime-400 duration-500 ease-in-out"
                              to={"/signup"}
                            >
                              <i className="fa-solid fa-user-plus "></i>
                              Sign up
                            </Link>
                          </li>
                        </ul>
                      </>)}

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </i>
          <button
            className=" relative rounded-full p-2 hover:bg-red-400"
            onClick={() => handleClick('/favorites')}
          >
            <i className="fa-regular fa-heart"></i>
            <div className="flex justify-center items-center absolute border-2 bg-red-400 text-white text rounded-full w-8 h-8 bottom-0 right-0 translate-x-4 translate-y-4">
              {favoriteCount}
            </div>
          </button>
          <button
            className="relative text-xl rounded-full p-2 hover:bg-blue-400" 
            onClick={() => handleClick('/cart')}
          >
            <i className="fa-solid fa-cart-shopping"></i>
            <div className="flex justify-center items-center absolute border-2 bg-blue-500 text-white text rounded-full w-8 h-8 bottom-0 right-0 translate-x-4 translate-y-4">
              {calcTotalQuantity()}
            </div>
          </button>

        </div>
      </div>

      <div className="nav-bottom">
        <ul className="">
          <li className="relative group">
            <p
              className="hover:text-lime-400 duration-400 ease-in-out cursor-pointer"
            >
              About the tea
            </p>
            <div className="absolute top-0 -left-20 transition group-hover:translate-y-6 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-40 min-w-[300px] transform ">
              <div className="relative top-6 p-2 bg-white rounded-xl shadow-xl w-full border-2 border-slate-200 ">
                <div className="relative z-10">
                  <div>
                    <div>
                      <ul className="flex flex-col justify-center gap-2 px-5 text-sm">
                        <li className="flex justify-start items-center gap-5 border-b-[1px] pb-1">
                          <img
                            className="w-[60px]"
                            src="\src\assets\about1.png"
                            alt=""
                          />
                          <Link
                            className="hover:text-lime-400 duration-500 ease-in-out"
                            to={"/about-the-tea"}
                          >
                            About the tea
                          </Link>
                        </li>
                        <li className="flex justify-start items-center gap-5 border-b-[1px] pb-1">
                          <img
                            className="w-[60px]"
                            src="\src\assets\about2.png"
                            alt=""
                          />
                          <Link
                            className="hover:text-lime-400 duration-500 ease-in-out"
                            to={"/types-of-tea"}
                          >
                            Types of tea
                          </Link>
                        </li>
                        <li className="flex justify-start items-center gap-5 ">
                          <img
                            className="w-[60px]"
                            src="\src\assets\about3.png"
                            alt=""
                          />
                          <Link
                            className="hover:text-lime-400 duration-500 ease-in-out"
                            to={"/preparing-tea"}
                          >
                            Preparing Tea
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="relative group">
            <p
              className="hover:text-lime-400 duration-400 ease-in-out"
            >
              Shopping
            </p>
            <div className="absolute top-0 -left-40 transition group-hover:translate-y-6 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-40 min-w-[360px] transform ">
              <div className="relative top-6 p-2 bg-white rounded-xl shadow-xl w-full border-2 border-slate-200 ">
                <div className="relative z-10">
                  <div>
                    <div>
                      <ul className="flex flex-col justify-center gap-2 px-5 text-sm">
                        <li className="flex justify-start items-center gap-5 border-b-[1px] pb-1">
                          <img
                            className="w-[50px]"
                            src="\src\assets\category1.png"
                            alt=""
                          />
                          <Link
                            className="hover:text-lime-400 duration-500 ease-in-out"
                            to={"/collection/matcha"}
                          >
                            Matcha,Uji-Shimizu
                          </Link>
                        </li>
                        <li className="flex justify-start items-center gap-5 border-b-[1px] pb-1">
                          <img
                            className="w-[50px]"
                            src="\src\assets\category8.png"
                            alt=""
                          />
                          <Link
                            className="hover:text-lime-400 duration-500 ease-in-out"
                            to={"/collection/gyokuro"}
                          >
                            Gyokuro
                          </Link>
                        </li>
                        <li className="flex justify-start items-center gap-5 border-b-[1px] pb-1">
                          <img
                            className="w-[50px]"
                            src="\src\assets\category7.png"
                            alt=""
                          />
                          <Link
                            className="hover:text-lime-400 duration-500 ease-in-out"
                            to={"/collection/sencha"}
                          >
                            Sencha
                          </Link>
                        </li>
                        <li className="flex justify-start items-center gap-5 border-b-[1px] pb-1">
                          <img
                            className="w-[50px]"
                            src="\src\assets\category6.png"
                            alt=""
                          />
                          <Link
                            className="hover:text-lime-400 duration-500 ease-in-out"
                            to={"/collection/hojicha"}
                          >
                            Hojicha,Genmaicha
                          </Link>
                        </li>
                        <li className="flex justify-start items-center gap-5 border-b-[1px] pb-1">
                          <img
                            className="w-[50px]"
                            src="\src\assets\category5.png"
                            alt=""
                          />
                          <Link
                            className="hover:text-lime-400 duration-500 ease-in-out"
                            to={"/collection/teabags"}
                          >
                            Teabags
                          </Link>
                        </li>
                        <li className="flex justify-start items-center gap-5 border-b-[1px] pb-1">
                          <img
                            className="w-[50px]"
                            src="\src\assets\category4.png"
                            alt=""
                          />
                          <Link
                            className="hover:text-lime-400 duration-500 ease-in-out"
                            to={"/collection/organic"}
                          >
                            Organic
                          </Link>
                        </li>
                        <li className="flex justify-start items-center gap-5">
                          <img
                            className="w-[50px]"
                            src="\src\assets\category3.png"
                            alt=""
                          />
                          <Link
                            className="hover:text-lime-400 duration-500 ease-in-out"
                            to={"/collection/utensils"}
                          >
                            Utensils
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="relative group">
            <p
              className="hover:text-lime-400 duration-400 ease-in-out"
            >
              Stories about the tea
            </p>
            <div className="absolute top-0 -left-20 transition group-hover:translate-y-6 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-40 min-w-[350px] transform ">
              <div className="relative top-6 p-2 bg-white rounded-xl shadow-xl w-full border-2 border-slate-200 ">
                <div className="relative z-10">
                  <div>
                    <div>
                      <ul className="flex flex-col justify-center gap-2 px-5 text-sm">
                        <li className="flex  justify-start items-center gap-5 border-b-[1px] pb-1">
                          <img
                            className="w-[80px]"
                            src="\src\assets\about5.png"
                            alt=""
                          />
                          <Link
                            className="hover:text-lime-400 duration-500 ease-in-out"
                            to={"blog/recipe"}
                          >
                            Food pairing pointers
                          </Link>
                        </li>
                        <li className="flex  justify-start items-center gap-5">
                          <img
                            className="w-[80px]"
                            src="\src\assets\about4.png"
                            alt=""
                          />
                          <Link
                            className="hover:text-lime-400 duration-500 ease-in-out"
                            to={"blog/story"}
                          >
                            Different ways to enjoy Japanese tea
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>


    </header>
  );
}
