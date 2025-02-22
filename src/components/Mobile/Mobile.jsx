import SecondCheff from '../../assets/images/SecondCheff.png'
import Google from '../../assets/images/Googleplay.png'
import PlayStore from '../../assets/images/AppStore.png'
export default function Mobile(){
    return(
        <>
        <div className="flex justify-center md:justify-between flex-wrap  lg:px-[70px]  ">
            <img className='' src={SecondCheff} alt="" />
            <div className='flex justify-center items-center md:w-[400px] lg:gap-y-[100px] flex-col w-[371px] gap-y-[23px]'>
                <h1 className='tracking-wider text-[48px] lg:h-[134px] lg:w-[540px] '>It’s Now <span className='text-[#f54748]'>More</span> <span className='text-[#f54748]'>Easy</span> to <span className='text-[#fdc55e]'>Order</span> by Our Mobile <span className='text-[#f54748]'>App</span></h1>
                <p className='text-left lg:w-[550px] lg:h-[72px] w-[366px]'>All you need to do is downlode one of the best delivery apps, make a and most companies are opting  for mobile app devlopment for food delivery</p>
                <div className='flex gap-x-[27px] lg:mt-[-80px] mt-[42px]'>
                    <img src={Google} alt="" />
                    <img src={PlayStore} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}