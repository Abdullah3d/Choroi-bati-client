import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import coverBg from '../../../assets/menu/banner3.jpg';
import dessertBg from '../../../assets/menu/dessert-bg.jpeg';
import PizzaBg from '../../../assets/menu/pizza-bg.jpg';
import soupBg from '../../../assets/menu/soup-bg.jpg';
import saladBg from '../../../assets/menu/salad-bg.jpg';
import useMenu from '../../../hooks/UseMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


console.log(coverBg);
const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const offered = menu.filter(item => item.category === 'offered');

    // console.log(dessertBg);
    return (
        <div>
            <Helmet>
                <title>Chorio bati | Menu</title>
            </Helmet>
            <Cover img={coverBg} title="Our Menu"></Cover>
            {/* Main Cover */}
            <SectionTitle subHeading="Don't Miss" 
            heading="Today's Offer"
            ></SectionTitle>
            {/*  Offered Menu Items  */}
            <MenuCategory items={offered} ></MenuCategory>
            {/* Dessert Menu Items */}
            <MenuCategory items={desserts} title="dessert" img={dessertBg}></MenuCategory>
            {/* Pizza */}
            <MenuCategory items={pizza} title="pizza" img={PizzaBg}></MenuCategory>
            {/* Soup */}
            <MenuCategory  items={soup} title="soup" img={soupBg}></MenuCategory>
            {/* Salad */}
            <MenuCategory items={salad} title="salad" img={saladBg}></MenuCategory>
        </div>
    );
};

export default Menu;