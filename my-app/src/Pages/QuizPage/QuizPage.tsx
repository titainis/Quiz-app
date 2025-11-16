import Header from "../../Components/Header/Header";
import { questions } from "../../Questions/Questions";
import arrow from '../../Components/Header/back-arrow.svg'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Answer } from "../../Types/AnswerType";

const QuizPage = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isLocked, setIsLocked] = useState(false);
    const navigate = useNavigate();

    const q = questions[currentQuestion];
    
    const colorMap: Record<Answer, {bg: string, border: string, text: string}> = {
        Yes: {
          bg: "bg-green-500",
          border: "border-green-500",
          text: "text-white"
        },
        "I'm not sure": {
          bg: "bg-yellow-400",
          border: "border-yellow-400",
          text: "text-black"
        },
        No: {
          bg: "bg-red-500",
          border: "border-red-500",
          text: "text-white"
        } 
    };

    return (
      <div className="w-[335px] h-[640px] mx-auto">
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
                <div><span className="font-bold">{currentQuestion + 1}</span>/{questions.length}</div>
            </div>
        </Header>

        <div className="flex flex-col h-[515px] pt-[32px]">
            <div>
                <h2 className="text-center font-semibold text-[24px]">
                    {q.question}
                </h2>
            </div>

            <div className="flex flex-col h-[435px] pt-[24px] justify-end gap-2">
                {q.type === "multi" ? (
                    q.answer.map((a, i) => {
                    const isSelected = selectedAnswer === a.text;
                    return (
                        <button
                        key={i}
                        onClick={() => {
                            if (isLocked) return;

                            setIsLocked(true);
                            setSelectedAnswer(a.text);

                            setTimeout(() => {
                            if (currentQuestion === questions.length - 1) {
                                navigate('/checkout');
                            } else {
                                setCurrentQuestion(prev => prev + 1);
                                setSelectedAnswer(null);
                                setIsLocked(false);
                            }
                            }, 1500);
                        }}
                        className={`
                            w-full flex items-center gap-3 p-4 rounded-lg border-2 
                            ${isSelected ? "bg-purple-600 text-white" : "bg-white text-black"}
                        `}
                        >
                        <img
                            src={isSelected ? a.WhiteIcon : a.icon}
                            alt={a.text}
                            className="w-6 h-6"
                        />
                        <p>{a.text}</p>
                        </button>
                    );
                    })
                ) : (
                  q.answer.map((a, i) => {
                    const isSelected = selectedAnswer === a.text;
                    const key = a.text as Answer;
                    return (
                        <button
                        key={i}
                        onClick={() => {
                            if (isLocked) return;

                            setIsLocked(true);
                            setSelectedAnswer(a.text);

                            setTimeout(() => {
                            if (currentQuestion === questions.length - 1) {
                                navigate('/checkout');
                            } else {
                                setCurrentQuestion(prev => prev + 1);
                                setSelectedAnswer(null);
                                setIsLocked(false);
                            }
                            }, 1500);
                        }}
                        className={`
                            border-2 flex w-full p-[16px] gap-3 rounded-lg
                            ${colorMap[key].border}
                            ${isSelected ? `${colorMap[key].bg} ${colorMap[key].text}` : "bg-white text-black"}`}
                        >
                        <img
                            src={isSelected ? a.WhiteIcon : a.icon}
                            alt={a.text}
                            className="w-6 h-6"
                        />
                        <p>{a.text}</p>
                        </button>
                    );
                    })
                )}
            </div>
        </div>
      </div>
    );
}

export default QuizPage;
