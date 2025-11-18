import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import man from '../../Assets/Man.webp';
import woman from'../../Assets/Woman.webp';
import { Gender } from "../../Types/GenderType";

const LandingPage = () => {
    const navigate = useNavigate();

    const handleSelect = (selectedGender: Gender) => {
      localStorage.setItem("gender", selectedGender);
      navigate('/quiz');
    };

    return (
        <div>
          <Header />

          <div className="text-center flex flex-col h-[528px] pt-[24px]">
            <div className="flex flex-col gap-[12px]"> 
              <h2 className="text-2xl font-semibold">What is your gender?</h2>
              <p className="text-sm font-normal">We will use this to personalize your plan</p>
            </div>
           
            <div className="flex gap-[10px] h-[446px] justify-center items-center" >
              <div className="w-[162px] h-[200px] border-2 rounded-lg border-[#5349DB]">
                <button onClick={() => handleSelect("man")}>
                  <img src={man} alt="Man photo" className="w-[160px] h-[140px] object-cover object-top" />
                  <h2 className="h-[60px] p-[20.15px] bg-[#5349DB] rounded-b-lg text-[white]">Male</h2>
                </button>
              </div>

              <div className="w-[162px] h-[200px] border-2 rounded-lg border-[#5349DB]">
                <button onClick={() => handleSelect("woman")}>
                  <img src={woman} alt="Woman photo" className="w-[160px] h-[140px] object-cover object-top" />
                  <h2 className="h-[60px] p-[20.15px] bg-[#5349DB] rounded-b-lg text-[white]">Female</h2>
                </button>
              </div>
            </div>

          </div>
        </div>
    )
}

export default LandingPage;
