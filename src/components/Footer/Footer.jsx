import Socialicon from '../../assets/images/Socialicon.png'
export default function Footer(){
    return(
        <>
        <div className="flex lg:h-[589px] flex-col items-center lg:gap-x-[94px] pt-[92px] px-6 lg:flex-row">
            <div className="flex text-left flex-col justify-center gap-y-[10px]">
                <h1 className='font-sofia-bold text-[32px] text-[#F54748]'>Foodhut</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor   
                </p>
                <div>
                    <img src={Socialicon} alt="" />
                </div>
            </div>
            <div className='mt-[30px] flex  gap-x-[80px]'>
                <div>
                    <ul>
                        <li className='text-[#F54748] text-2xl font-sofia-bold text-[24px] tracking-wider font-sofia-regular'>About Us</li>
                        <li>About Us</li>
                        <li>Service Us</li>
                        <li>Contact</li>
                        <li>Company</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='text-[#F54748] text-2xl font-sofia-bold text-[24px] tracking-wider font-sofia-regular'>Company</li>
                        <li>Partnership</li>
                        <li>Terms of Use</li>
                        <li>Privacy</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
            </div>
            <div className='mt-[30px]'>
                <h1 className='text-[#F54748] font-sofia-bold text-2xl  pb-[37px] tracking-wider'>Get in touch</h1>
                <p className='pb-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                <div className='flex gap-x-[15px] items-center'>
                    <input placeholder='Email' className='rounded-[38px] w-[205px] h-[50px] py-[16px] px-6 bg-[#191919]/10 '  type="text" />
                    <button className='bg-[#F54748] rounded-[39px] text-white py-4 px-6 '>Subscribe</button>
                </div>
            </div>
        </div>
            <p className='text-[16px] text-center pt-[8px] md:pt-[10px]'>Copyright © 2022 Foodhut.</p>
        </>
    )
}