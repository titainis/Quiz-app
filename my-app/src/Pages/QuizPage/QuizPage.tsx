import Header from "../../Components/Header/Header";
import { questions } from "../../Questions/Questions";
import arrow from '../../Components/Header/back-arrow.svg'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const QuizPage = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isLocked, setIsLocked] = useState(false);
    const navigate = useNavigate();

    const q = questions[currentQuestion];
    

    const colorMap: Record<string, string> = {
        "Yes": "border-green-500 color-[#289F67]",
        "I'm not sure": "border-yellow-500 color-[yellow]",
        "No": "border-red-500 color-[red]",
    };

    const colorImage: Record<string, string> = {
        "Yes": "color-[#289F67]",
        "I'm not sure": "color-[yellow]",
        "No": " color-[red]",
    };


    return (
        <>
        <Header className="flex flex-col relative ">
            <div className="flex items-center w-full relative">
              <button 
                onClick={() => setCurrentQuestion(prev => prev - 1)}
              className="absolute -translate-y-6">
                <img src={arrow} alt="arrow" className="w-6 h-6" />
              </button>
            </div>

            <div className="w-full h-[2px] bg-gray-300 rounded-sm mt-2">
                <div className="h-full bg-[#767AF9] rounded-sm">
                </div>
            </div>

            <div className="absolute right-0 translate-y-6">
                <div><span className="font-bold">{q.id}</span>/6</div>
            </div>
        </Header>

        <div>
            <div>
                <h2 className="text-center">
                    {q.question}
                </h2>
            </div>

            <div className="flex flex-col gap-2">
               
                {q.answer.map((a, i) => {
                    return (
                        <button
                        onClick={() => {
                          if (isLocked) return;

                          setIsLocked(true);
                          setSelectedAnswer(a.text);

                          setTimeout(() => {
                            if(currentQuestion === questions.length - 1) {
                                navigate('/checkout');
                            } else {
                                setCurrentQuestion(prev => prev + 1);
                                setSelectedAnswer(null);
                                setIsLocked(false);
                              }
                            }, 1500);
                        }}
                        className={`
                            border-2 ${colorMap[a.text]} flex w-full p-[16px] gap-3 bg-[white] rounded-lg
                            ${selectedAnswer === a.text ? "bg-[blue]" : ""}
                        `}
                        key={i}
                        >
                          <img src={a.icon} alt={a.text} className={`${colorImage[a.icon]}`} />
                          <p>{a.text}</p>
                        </button>
                    );
               })}
            </div>
        </div>
        
        </>
    );
}

export default QuizPage;
