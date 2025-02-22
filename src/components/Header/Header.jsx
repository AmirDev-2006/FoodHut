import {
    MenuIcon,
    SearchIcon,
} from "@heroicons/react/outline";
import playicon from '../../assets/images/playicon.png'
import line from '../../assets/images/line.png'
import Love from '../../assets/images/love.png'
import icon from '../../assets/images/Logo.png'
import girl from '../../assets/images/Header girl.png'
import deslogo from '../../assets/images/desLogo.png'
export default function Header(){
    return(
        <>
        <div className="md:hidden p-6 flex justify-between items-center">
            <img src={icon} alt="" />
            <button>
            <MenuIcon className="w-9  h-7"/>
            </button>
        </div>
        <div className="res3 mb-[102px] items-center flex pt-[32px] md:px-[20px] px-[70px] justify-between h-[100px]">
            <img className="" src={deslogo} alt="" />
            <div>
                <ul className="flex lg:gap-x-[50px] md:gap-x-[30px] items-center">
                    <li><button>Today special offers</button></li>
                    <li><button>Why FoodHut</button></li>
                    <li><button>Our Menu</button></li>
                    <li><button>Our Popular food</button></li>
                    <li><button className="text-white bg-[#f54748] rounded-[100px] px-[20px] py-[10px] w-[162px] h-[45px]">Downlode App</button></li>
                </ul>
            </div>
        </div>
        <div className="flex justify-between">
        <div className=" p-6 lg:px-14 flex items-center justify-between md:w-[530px] gap-y-5">
            <div className="flex flex-col md:w-[530px] gap-y-5">
            <div className="flex p-1 bg-red-300 rounded-xl items-center  justify-between w-[139px] h-7">
                <img className="w-5 h-5" src={Love} alt="" />
                <p>People Trust us</p>
            </div>
            <div className="flex flex-col h-[195px]">
                <h1 className="font-sofia-bold text-6xl">We're <span className=" text-[#f54748]">Serious</span> <br /> For <span className="text-[#f54748]">Food</span> & <br /> <span className="text-[#fdc55e]">Delivery</span>.</h1>
                <img className="w-[263px] h-[8.2px]" src={line} alt="" />
            </div>
            <div className="h-[81px]">
                <p className="font-sofia-regular text-3xl">Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.</p>
            </div>
            <div className="flex items-center justify-start pt-11 md:pr-6">
                <div className="flex items-center justify-end">
                <input className="w-[350px] md:w-[471px] h-[54px] relative px-[40px] rounded-[100px] border-[0.5px] border-[#191919]" placeholder={`Search food`} type="text"/>
                <button className="absolute px-1">
                <SearchIcon className="w-[42px] text-white h-[42px] p-[9px] rounded-[50%] bg-[#fdc55e]"/>
                </button>
                <SearchIcon className="w-[42px] absolute md:hidden left-7 text-black h-[42px] p-[9px]"/>
                </div>
            </div>
                <div className="mb-[93px]">
                    <div className="flex items-center md:w-[471px] gap-x-14">
                        <button className="text-white bg-[#f54748] rounded-[100px] px-[20px] py-[10px] w-[162px] h-[45px]">Downloade App</button>
                        <div className="flex items-center">
                            <img className="w-[52px] h-[52px]" src={playicon} alt="" />
                            <span className="text-[#686D77] text-[17px] font-serif">Watch Video</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="res2 p-6">
                <img className="w-[488px] h-[586.5px]" src={girl} alt="" />
            </div>
        </div>
        </>
    )
}