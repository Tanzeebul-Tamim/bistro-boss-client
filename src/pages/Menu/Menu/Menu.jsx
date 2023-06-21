import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/menu.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {

    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
           <Cover img={menuImg} title={"Our Menu"}></Cover>
           {/* main cover */}
            <SectionTitle subheading={"Don't Miss"} heading={"Today's offer"}></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={desserts} img={dessertImg} title="desserts"></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory items={pizza} img={pizzaImg} title="pizzas"></MenuCategory>
            {/* salads menu items */}
            <MenuCategory items={salad} img={saladImg} title="salads"></MenuCategory>
            {/* soup menu items */}
            <MenuCategory items={soup} img={soupImg} title="soups"></MenuCategory>
        </div>
    );
};

export default Menu;