
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext'
import { CartProvider } from './contexts/CartContext'
import { FavoriteProvider } from './contexts/FavoritesContext';

import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Main from './components/home/Main'
import AboutTheTea from './components/about/about-the-tea/AboutTheTea';
import Preparing from './components/about/preparing-tea/Preparing';
import PrepSencha from './components/about/preparing-tea/sencha/PrepSencha';
import PrepGyokuro from './components/about/preparing-tea/gyokuro/PrepGyokuro';
import PrepMatcha from './components/about/preparing-tea/matcha/PrepMatcha';
import PrepHojicha from './components/about/preparing-tea/hojicha/PrepHojicha';
import PrepOneCup from './components/about/preparing-tea/one-cup/PrepOneCup';
import PrepOnePot from './components/about/preparing-tea/one-pot/PrepOnePot';
import TypesOfTea from './components/about/types-of-tea/TypesOfTea';
import ShopGyokuro from './components/shopping/gyokuro/ShopGyokuro';
import GyokuroDetails from './components/shopping/gyokuro/GyokuroDetails';
import ShopSencha from './components/shopping/sencha/ShopSencha';
import SenchaDetails from './components/shopping/sencha/SenchaDetails';
import ShopMatcha from './components/shopping/matcha/ShopMatcha';
import MatchaDetails from './components/shopping/matcha/MatchaDetails';
import ShopHojicha from './components/shopping/hojicha/ShopHojicha';
import HojichaDetails from './components/shopping/hojicha/HojichaDetails';
import ShopOrganic from './components/shopping/organic/ShopOrganic';
import OrganicDetails from './components/shopping/organic/OrganicDetails';
import ShopTeabags from './components/shopping/teabags/ShopTeabags';
import TeabagsDetails from './components/shopping/teabags/TeabagsDetails';
import ShopUtensils from './components/shopping/utensils/ShopUtensils';
import UtensilsDetails from './components/shopping/utensils/UtensilsDetails';
import Register from './components/user/sign-up/Register';
import Login from './components/user/sign-in/Login';
import SearchResult from './components/search-result/SearchResult';
import Cart from './components/cart/Cart';
import Favorites from './components/favorites/Favorites';
import Recipe from './components/blog/recipe/Recipe';
import RecipeDetails from './components/blog/recipe/RecipeDetails';
import Story from './components/blog/story/Story';
import StoryDetails from './components/blog/story/StoryDetails';
import ScrollToTop from './shared/scrollToTop';
import Profile from './components/user/profile/Profile';
import AuthGuard from './components/guard/AuthGuard';
import PageNotFound from './components/page-not-found/PageNotFound';
import PaymentSuccess from './components/payment/PaymentSuccess';
import PaymentDecline from './components/payment/PaymentDecline';
import ControlPanel from './components/user/admin/ControlPanel';
import Teas from './components/user/admin/teas/Teas';
import CreateTea from './components/user/admin/teas/CreateTea';
import EditTea from './components/user/admin/teas/EditTea';
import Utensils from './components/user/admin/utensils/Utensils';
import EditUtensils from './components/user/admin/utensils/EditUtensils';
import CreateUtensil from './components/user/admin/utensils/CreateUtensil';
import Recipes from './components/user/admin/recipe/Recipes'
import EditRecipe from './components/user/admin/recipe/EditRecipe';
import CreateRecipe from './components/user/admin/recipe/CreateRecipe';
import AdminGuard from './components/guard/AdminGuard';
import Loader from './shared/Loader';
import Unauthorized from './components/unauthorized/Unauthorized';
import GuestGuard from './components/guard/GuestGuard';
import Users from './components/user/admin/users/Users';
import EditUser from './components/user/admin/users/EditUser';



function App() {

    return (
        <>
            <AuthContextProvider>
                <Loader>
                    <CartProvider>
                        <FavoriteProvider>
                            <Header />
                            <ScrollToTop />
                            <div>
                                <Routes>

                                    <Route path='/' element={<Main />} />
                                    <Route path='/about-the-tea' element={<AboutTheTea />} />
                                    <Route path='/preparing-tea' element={<Preparing />} />
                                    <Route path='/preparing-tea/sencha' element={<PrepSencha />} />
                                    <Route path='/preparing-tea/gyokuro' element={<PrepGyokuro />} />
                                    <Route path='/preparing-tea/matcha' element={<PrepMatcha />} />
                                    <Route path='/preparing-tea/hojicha' element={<PrepHojicha />} />
                                    <Route path='/preparing-tea/one-cup-teabags' element={<PrepOneCup />} />
                                    <Route path='/preparing-tea/one-pot-teabags' element={<PrepOnePot />} />
                                    <Route path='/types-of-tea' element={<TypesOfTea />} />
                                    <Route path='/collection/gyokuro' element={<ShopGyokuro />} />
                                    <Route path='/collection/gyokuro/:id' element={<GyokuroDetails />} />
                                    <Route path='/collection/sencha' element={<ShopSencha />} />
                                    <Route path='/collection/sencha/:id' element={<SenchaDetails />} />
                                    <Route path='/collection/matcha' element={<ShopMatcha />} />
                                    <Route path='/collection/matcha/:id' element={<MatchaDetails />} />
                                    <Route path='/collection/hojicha' element={<ShopHojicha />} />
                                    <Route path='/collection/hojicha/:id' element={<HojichaDetails />} />
                                    <Route path='/collection/organic' element={<ShopOrganic />} />
                                    <Route path='/collection/organic/:id' element={<OrganicDetails />} />
                                    <Route path='/collection/teabag' element={<ShopTeabags />} />
                                    <Route path='/collection/teabag/:id' element={<TeabagsDetails />} />
                                    <Route path='/collection/utensils' element={<ShopUtensils />} />
                                    <Route path='/collection/utensils/:id' element={<UtensilsDetails />} />

                                    <Route element={<GuestGuard />}>
                                        <Route path='/signup' element={<Register />} />
                                        <Route path='/signin' element={<Login />} />
                                    </Route>

                                    <Route path='/search' element={<SearchResult />} />
                                    <Route path='/blog/recipe' element={<Recipe />} />
                                    <Route path='/blog/recipe/:id' element={<RecipeDetails />} />
                                    <Route path='/blog/story' element={<Story />} />
                                    <Route path='/blog/story/:id' element={<StoryDetails />} />

                                    <Route element={<AuthGuard />} >
                                        <Route path='/cart' element={<Cart />} />
                                        <Route path='/profile' element={<Profile />} />
                                        <Route path='/favorites' element={<Favorites />} />
                                    </Route>
                                    <Route path='/payment-success' element={<PaymentSuccess />} />
                                    <Route path='/payment-decline' element={<PaymentDecline />} />

                                    <Route element={<AdminGuard />}>
                                        <Route path='/admin' element={<ControlPanel />} />
                                        <Route path='/admin/teas' element={<Teas />} />
                                        <Route path='/admin/teas/add' element={<CreateTea />} />
                                        <Route path='/admin/teas/edit/:id' element={<EditTea />} />
                                        <Route path='/admin/utensils' element={<Utensils />} />
                                        <Route path='/admin/utensils/add' element={<CreateUtensil />} />
                                        <Route path='/admin/utensils/edit/:id' element={<EditUtensils />} />
                                        <Route path='/admin/recipes' element={<Recipes />} />
                                        <Route path='/admin/recipes/add' element={<CreateRecipe />} />
                                        <Route path='/admin/recipes/edit/:id' element={<EditRecipe />} />
                                        <Route path='/admin/users' element={<Users />} />
                                        <Route path='/admin/users/edit/:id' element={<EditUser />} />
                                    </Route>

                                    <Route path='/unauthorized' element={<Unauthorized />} />
                                    <Route path='*' element={<PageNotFound />} />

                                </Routes>
                            </div>
                            <Footer />
                        </FavoriteProvider>
                    </CartProvider>
                </Loader>
            </AuthContextProvider>
        </>
    )
}

export default App
