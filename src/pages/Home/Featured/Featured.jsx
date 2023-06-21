import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle heading="Featured Item" subHeading="Check It Out"></SectionTitle>
            <div className="md:flex bg-black bg-opacity-60 justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p className=" text-lg">Aug 20, 2029</p>
                    <p className="uppercase text-lg">Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit aperiam distinctio ab eaque, eum eius fuga sequi aspernatur ut autem corporis exercitationem fugit tempora placeat, dignissimos voluptas dolorum dolores natus unde corrupti rem! Fuga, dolorum error cumque quos earum deleniti neque sequi commodi quibusdam adipisci, aspernatur eaque provident voluptatibus facere!</p>
                    <button className="btn border-0 border-b-4 hover:bg-white hover:text-black mt-4 border-white text-white btn-outline">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;