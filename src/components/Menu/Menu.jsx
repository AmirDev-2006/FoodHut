import kebab from '../../assets/images/kebab.png'
import ChickenTikka from '../../assets/images/Chicken Tikka.png'
import ChickenChargha from '../../assets/images/Chicken Chargha.png'
import DesiChowmein from '../../assets/images/Desi Chowmein.png'
import FoodCard from '../FoodCard/FoodCard'
export default function Menu() {
  return (
    <>
      <div className='flex justify-center flex-col items-center'>
        <h1 className="tracking-wider text-[48px] text-center">
          <span className="text-[#f54748]">Menu</span> that <br />{" "}
          <span className="text-[#fdc55e]">always</span> make <br /> you fall in{" "}
          <span className="text-[#f54748]">love</span>
        </h1>
        <div className="flex mt-[50px] mb-[108px] justify-center gap-x-[30px] [&>*]:border-[2px] [&>*]:rounded-[100px] [&>*]:px-[20px] [&>*]:py-[10px] [&>*]:border-[#191919]">
          <button>Ramen</button>
          <button>Breakfast</button>
          <button>Lunch</button>
          <button className="res4">Dinner</button>
          <button className="res4">Maxican</button>
          <button className="res2">Italian</button>
          <button className="res2">Desserts</button>
          <button className="res2">Drinks</button>
        </div>
        <div className="flex justify-center flex-wrap w-full mb-9 ">
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
      </div>
    </>
  );
}
