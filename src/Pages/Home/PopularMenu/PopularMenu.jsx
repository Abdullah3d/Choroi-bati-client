import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/UseMenu";

const PopularMenu = () => {
    const [ menu ] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular');
    //             setMenu(popularItems)
    //         })
    // }, [])
    return (
        <section className="mb-12">
            <SectionTitle
                heading="From Our menu"
                subHeading="Popular Items"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {popular.map(item => (
                    <MenuItem key={item._id} item={item}></MenuItem>
                ))}
            </div>
            <div className="flex justify-center mt-6">
                <button className="btn btn-outline border-0 border-b-4 ">View Full Menu</button>
            </div>
            <div className="bg-black mt-5">
                <p className="text-5xl font-semibold text-white text-center py-[100px] px-[330px]">Call us: +88 01888790045 <br/>
                </p>
            </div>
        </section>
    );
};

export default PopularMenu;