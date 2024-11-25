import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="pt-10">
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {items.map(item => (
                    <MenuItem key={item._id} item={item}></MenuItem>
                ))}
            </div>
            <div className="flex justify-center mt-5">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-0 border-b-4 mt-5">ORDER NOW</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;