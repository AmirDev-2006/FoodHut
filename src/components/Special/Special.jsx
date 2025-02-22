import kebab from "../../assets/images/kebab.png";
import ChickenChargha from "../../assets/images/Chicken Chargha.png";
import ChickenTikka from "../../assets/images/Chicken Tikka.png";
import DesiChowmein from "../../assets/images/Desi Chowmein.png";
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
        <div className="flex flex-wrap gap-y-5 justify-center gap-x-[18px]">
            <img src={kebab} alt="" />
            <img className="res" src={ChickenTikka} alt="" />
            <img className="res" src={DesiChowmein} alt="" />
            <img className="res" src={ChickenChargha} alt="" />
        </div>
      </div>
    </>
  );
}
