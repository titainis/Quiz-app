import { Gender } from "../../Types/GenderType";
import Header from "../../Components/Header/Header";
import ManBefore from '../../Assets/Mbefore.webp';
import ManAfter from '../../Assets/Mafter.webp';
import WomanBefore from '../../Assets/Wbefore.webp';
import WomanAfter from '../../Assets/Wafter.webp'
import Arrows from '../../Assets/icons/arrows.svg';
import Timer from "../../Components/Timer/Timer";
import Brain from '../../Assets/icons/Frame 4599.svg';
import Goal from '../../Assets/icons/Layer_1.svg';
import Idea from '../../Assets/icons/idea_1016562 1.svg'
import Craving from '../../Assets/icons/Frame 1214134740.svg';
import Block from '../../Assets/icons/allowed_4196748 1.svg';
import Thunder from '../../Assets/icons/thunder_1779761 (1) 1.svg'

const CheckoutPage = () => {

    const gender = localStorage.getItem("gender") as Gender;

    return (
        <div className="bg-[#F9F6F4] flex flex-col items-center pb-5">
            <Header className="flex bg-[#FFC633] w-full">

              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-1">
                  <p className="font-bold text-[18px]">Reserved price for:</p>
                  <p className="text-[#6A61F1] font-bold text-[24px]"><Timer /></p>
                </div>
              </div>

            </Header>


            <div className="flex flex-col w-[335px] gap-3 pt-[24px]">
                <h2 className="text-left text-[24px] font-bold">Your personalized Alcohol-Free Plan is ready!</h2>

                <div className="flex w-full">
                  <div className="flex flex-1 items-start gap-2 pr-2 border-r  border-[#767AF9]">
                    <img
                      className="p-1 h-fit border-2 border-[#6A61F1] rounded-md"
                      src={Brain}
                      alt="Brain"
                    />
                    <div className="flex flex-col">
                      <p className="text-[10px]">Drinking patterns</p>
                      <h3 className="text-[12px] font-bold">Imbalanced</h3>
                    </div>
                  </div>

                  <div className="flex flex-1 items-start gap-2 pl-2">
                    <img
                      className="p-1 h-fit border-2 border-[#6A61F1] rounded-md"
                      src={Goal}
                      alt="Goal"
                    />
                    <div className="flex flex-col">
                      <p className="text-[10px]">Goal</p>
                      <h3 className="text-[12px] font-bold">
                        Regain control and live alcohol-free
                      </h3>
                    </div>
                  </div>
                </div>

                {gender === 'man' && 
                <div className="flex justify-center gap-0">
                  <div className="relative w-[168px] h-[240px]">
                    <img
                    className="w-full h-full object-cover rounded-l-lg grayscale"
                    src={ManBefore}
                    alt="Before"
                    />
                    <p className="absolute bottom-2 left-2 py-[4px] px-[12px] bg-white opacity-60 rounded-lg font-semibold">
                    Before
                    </p>
                  </div>

                  <div className="relative w-[168px] h-[240px]">
                    <img
                    className="w-full h-full object-cover rounded-r-lg"
                    src={ManAfter}
                    alt="After"
                    />
                    <p className="absolute bottom-2 right-2 py-[4px] px-[12px] bg-white rounded-lg font-semibold">
                    After
                    </p>
                  </div>
                </div>
                }
                {gender === 'woman' && 
                <div className="flex justify-center gap-0 relative">
                  <div className="relative w-[168px] h-[240px]">
                    <img
                    className="w-full h-full object-cover rounded-l-lg grayscale"
                    src={WomanBefore}
                    alt="Before"
                    />
                    <p className="absolute bottom-2 left-2 py-[4px] px-[12px] bg-white opacity-60 rounded-lg font-semibold">
                    Before
                    </p>
                  </div>

                  <img className="h-[60px] w-[55px] absolute z-10 top-1/2 -translate-y-1/2" src={Arrows} alt="Transformation" />

                  <div className="relative w-[168px] h-[240px]">
                    <img
                    className="w-full h-full object-cover rounded-r-lg"
                    src={WomanAfter}
                    alt="After"
                    />
                    <p className="absolute bottom-2 right-2 py-[4px] px-[12px] bg-white rounded-lg font-semibold">
                    After
                    </p>
                  </div>
                </div>
                }

                <h2 className="text-left text-[24px] font-bold">Your Personal Summary</h2>
                <div className="flex items-center gap-3 w-full border-2 rounded-lg p-2 border-[#6A61F1]">
                  <img className="p-1 border-2 border-[#6A61F1] rounded-md" src={Idea} alt="Idea" />

                  <div className="flex items-center gap-[2px] w-full justify-between">
                    <div>
                      <p className="text-[10px] w-fit px-[4px] py-[2px] bg-[#289F67] text-white rounded">
                      VERY STRONG
                    </p>
                    <p className="text-[16px] font-bold">Desire to change</p>
                    </div>
    
                    <div className="w-[88px] bg-gray-200 rounded h-[6px]">
                      <div className="bg-[#289F67] h-[6px] rounded " style={{ width: "92%" }}></div>
                    </div>
                  </div>

                  <p className="font-semibold">92%</p>
                </div>


                 <div className="flex items-center gap-3 w-full border-2 rounded-lg p-2 border-[#6A61F1]">
                  <img className="p-1 border-2 border-[#6A61F1] rounded-md" src={Craving} alt="Cravings" />

                  <div className="flex items-center justify-between w-full">
                    <div>
                      <p className="text-[10px] w-fit px-[4px] py-[2px] bg-[#E35244] text-white rounded">
                      TOO HIGH
                    </p>
                    <p className="text-[16px] font-bold">Cravings</p>
                    </div>
    
                    <div className="w-[88px] bg-gray-200 rounded h-[6px] ">
                      <div className="bg-[#E35244] h-[6px] rounded " style={{ width: "84%" }}></div>
                    </div>
                  </div>

                  <p className="font-semibold">84%</p>
                </div>
                <div className="flex items-center gap-3 w-full border-2 rounded-lg p-2 border-[#6A61F1]">
                  <img className="p-1 border-2 border-[#6A61F1] rounded-md" src={Block} alt="X" />

                  <div className="flex items-center justify-between w-full">
                    <div>
                      <p className="text-[10px] w-fit px-[4px] py-[2px] bg-[#E35244] text-white rounded">
                      TOO HIGH
                    </p>
                    <p className="text-[16px] font-bold">Mental blocks</p>
                    </div>
    
                    <div className="w-[88px] bg-gray-200 rounded h-[6px] ">
                      <div className="bg-[#E35244] h-[6px] rounded " style={{ width: "84%" }}></div>
                    </div>
                  </div>

                  <p className="font-semibold">74%</p>
                </div>
                <div className="flex items-center gap-3 w-full border-2 rounded-lg p-2 border-[#6A61F1]">
                  <img className="p-1 border-2 border-[#6A61F1] rounded-md" src={Thunder} alt="Thunder" />

                  <div className="flex items-center justify-between w-full">
                    <div>
                      <p className="text-[10px] w-fit px-[4px] py-[2px] bg-[#FFC633] text-white rounded">
                      MODERATELY HIGH
                    </p>
                    <p className="text-[16px] font-bold">Stress</p>
                    </div>
    
                    <div className="w-[88px] bg-gray-200 rounded h-[6px] ">
                      <div className="bg-[#FFC633] h-[6px] rounded " style={{ width: "52%" }}></div>
                    </div>
                  </div>
                
                  <p className="font-semibold">52%</p>
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;
