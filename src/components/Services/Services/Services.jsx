import Cheff from "../../../assets/images/Cheff.png";
import cheff2 from "../../../assets/images/cheff2.png";
import Cheff3 from "../../../assets/images/Cheff3.png";
import h24 from "../../../assets/images/24h.png";
import Booking from "../../../assets/images/Booking.png";
import OnlineOrder from "../../../assets/images/OnlineOrder.png";
export default function Services() {
  return (
    <>
      <div className="flex mb-[120px] flex-col md:flex-row md:justify-between md:items-center m-auto w-full justify-center">
        <img className="md:hidden" src={Cheff} alt="" />
        <img className="res4 md:w-[500px]" src={Cheff} alt="" />
        <div className=" flex flex-col">
          <h1 className="tracking-wider px-6 font-sofia-bold text-[48px]">
            We are <span className="text-[#f54748]">more</span> than{" "}
            <span className="text-[#fdc55e]">multiple</span> <br />
            service
          </h1>
          <p className="font-sofia-regular tracking-wider px-6 text-[18px] mb-[82px] mt-[30px]">
            This is a type of resturent which typically serves food and drink,
            in addition to light refreshments such as baked goods or snacks. The
            term comes frome the rench word meaning food
          </p>
          <div className="md:flex md:items-center">
            <div className="flex px-6 flex-col gap-y-[31px]">
              <div className="flex gap-x-[10px]">
                <img src={OnlineOrder} alt="" />
                <button>Online Order</button>
              </div>
              <div className="flex gap-x-[10px]">
                <img src={Booking} alt="" />
                <button>Pre-Reservation</button>
              </div>
              <div className="flex gap-x-[10px]">
                <img src={Booking} alt="" />
                <button>Super Chef</button>
              </div>
            </div>
            <div className="mt-[41px] md:mb-[41px] flex px-6 flex-col gap-y-[31px]">
              <div className=" flex gap-x-[10px]">
                <img src={h24} alt="" />
                <button>24/7 Service</button>
              </div>
              <div className="flex gap-x-[10px]">
                <img src={Booking} alt="" />
                <button>Oragonized Foodhut Place</button>
              </div>
              <div className="flex gap-x-[10px]">
                <img src={Booking} alt="" />
                <button>Clean Kitchen</button>
              </div>
            </div>
          </div>
        <div className="px-6 mt-[45px]">
            <button className="text-white py-[10px] px-[20px] rounded-[100px] bg-[#f54748]">About us</button>
        </div>
        </div>
      </div>
    </>
  );
}
