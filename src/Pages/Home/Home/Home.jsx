import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Bistroboss from "../Bistroboss/Bistroboss";
import Category from "../Category/Category";
import CheafRecomand from "../CheafRecomand/CheafRecomand";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Bistroboss></Bistroboss>
            <PopularMenu></PopularMenu>
            <CheafRecomand></CheafRecomand>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;