import kebab from '../../assets/images/kebab.png'
import ChickenTikka from '../../assets/images/Chicken Tikka.png'
import ChickenChargha from '../../assets/images/Chicken Chargha.png'
import DesiChowmein from '../../assets/images/Desi Chowmein.png'
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
        <div className="flex justify-center flex-wrap w-full ">
            <div className='flex gap-x-[18px]'>
                <img src={kebab} alt="" />
                <img className='res4' src={ChickenTikka} alt="" />
                <img className='res2' src={ChickenChargha} alt="" />
                <img className='res2 hidden xl:flex ' src={DesiChowmein} alt="" />
            </div>
            <div className='flex gap-x-[18px] mt-[66px] res2'>
                <img src={kebab} alt="" />
                <img src={ChickenTikka} alt="" />
                <img src={ChickenChargha} alt="" />
                <img className='hidden xl:flex' src={DesiChowmein} alt="" />
            </div>
        </div>
      </div>
    </>
  );
}
