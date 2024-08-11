
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext'
import { CardProvider } from './contexts/CartContext'
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
import CreateItem from './components/user/admin/CreateItem';



function App() {

    return (
        <>
            <AuthContextProvider>
                <CardProvider>
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
                                <Route path='/signup' element={<Register />} />
                                <Route path='/signin' element={<Login />} />
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
                                <Route path='/admin/create' element={<CreateItem />} />

                                <Route path='*' element={<PageNotFound />} />
                                
                            </Routes>
                        </div>
                        <Footer />
                    </FavoriteProvider>
                </CardProvider>
            </AuthContextProvider>
        </>
    )
}

export default App
