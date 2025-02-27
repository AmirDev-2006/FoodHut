import kebab from "../../assets/images/kebab.png";
import ChickenChargha from "../../assets/images/Chicken Chargha.png";
import ChickenTikka from "../../assets/images/Chicken Tikka.png";
import DesiChowmein from "../../assets/images/Desi Chowmein.png";
import KebabFood from '../../assets/images/KebabFood.png'
import KebabFood2 from '../../assets/images/KebabFood2.jpg'
import Border from '../../assets/images/Border.png'
import FoodCard from "../FoodCard/FoodCard";

export default function Special() {
  return (
    <>
      <div className="flex flex-col mb-[65px] justify-center">
        <div className="mb-[65px]">
          <h1 className="text-[48px] text-center tracking-wider font-sofia-bold">
            Today <span className="text-[#f54748]">Special</span> Offers
          </h1>
          <p className="text-center w-full text-[18px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="flex flex-row flex-wrap gap-y-28 mt-10 justify-center gap-x-[18px]">
          <div className="flex gap-x-4 gap-y-20">
            <FoodCard/>
            <div className="res4">
            <FoodCard/>
            </div>
            <div className="res2" >
            <FoodCard/>
            </div>
            <div className="res2 hidden xl:flex">
            <FoodCard/>
            </div>
          </div>
          <div className="flex gap-x-4 res2 gap-y-20 ">
            <FoodCard/>
            <div className="res4">
            <FoodCard/>
            </div>
            <div className="res2" >
            <FoodCard/>
            </div>
            <div className="res2 hidden xl:flex">
            <FoodCard/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
