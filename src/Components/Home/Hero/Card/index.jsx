import "./style";
import { Card_Wrapper } from "../Card/style";

const Card = () => {
  return (
    <div>
      <Card_Wrapper></Card_Wrapper>
      <div className="h-[450px] bg-[#F5F5F5] mt-3 flex max-2xl:h-[400px] max-md:h-[300px]">
        <div className="flex-[2] pl-10">
          <h3 className="font-medium text-base mt-[68px] max-lg:text-sm max-md:text-xs max-md:mt-[15px]">
            WECOME TO GREENSHOP
          </h3>
          <h1 className="font-black text-[#3D3D3D] text-8xl max-2xl:text-6xl max-lg:text-5xl max-md:text-2xl ">
            {"LET'S"} MAKE A BETTER{" "}
            <span className="text-[#46A358]">PLANET</span>
          </h1>
          <p className="text-sm font-normal text-[#727272] w-3/5 max-lg:text-xs mt-[10px] ">
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </p>
          <button className="mt-[40px] w-[140px] h-9 max-md:mt-[10px]">
            GET CREDITS
          </button>
        </div>
        <div className="flex-[1] relative flex justify-center items-center max-md:hidden">
          <img
            src={
              "	https://firebasestorage.googleapis.com/v0/b/aema-i…=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d"
            }
            alt="flower_1"
          />
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/aema-i…=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca"
            }
            alt="flower_2"
            className="absolute bottom-0 left-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
