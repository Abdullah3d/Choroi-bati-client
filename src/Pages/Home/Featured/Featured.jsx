import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-10 my-20 ">
            <SectionTitle
            heading="Featured item"
            subHeading="check it out"
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-10 pb-20 pt-12 px-36 ">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum impedit beatae nihil qui unde. Odit, quaerat laboriosam soluta ipsam corrupti, ipsa quisquam, repudiandae voluptate unde suscipit corporis temporibus tempore quod repellat nisi ex dignissimos fuga. Corporis dicta dolorem perspiciatis beatae, quisquam rem mollitia ad, quis facilis atque assumenda ab molestias.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-5">ORDER NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;