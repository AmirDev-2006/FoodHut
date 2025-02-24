import KebabFood from '../../assets/images/KebabFood.png'
export default function FoodCard() {
  return (
    <>
      <div className="flex mt-5 flex-col relative rounded-[20px] gradiant2 bg-gradient-to-t from-[rgba(237,151,151,0.4)] to-white  items-center w-[310px] h-[368px]">
        <div className="w-[248px] flex items-center justify-center absolute bottom-52 h-[248px] bg-gradient-to-b from-[rgba(245,188,139,0.6)] to-[white] rounded-full">
          <img
            className="w-[198px] h-[198px] border-white border-[10px] rounded-full"
            src={KebabFood}
            alt=""
          />
        </div>
        <div className="w-[243px] h-[63px] absolute bottom-32 text-center flex flex-col gap-y-2">
          <h1 className="text-[#f54748] text-2xl font-sofia-bold tracking-wide">
            Kebab
          </h1>
          <p className="text-[16px] tracking-tight">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
        <button className="absolute -bottom-4 w-[131px] h-[45px] bg-[#f54748] rounded-[100px] text-white">
          Order Now
        </button>
      </div>
    </>
  );
}
