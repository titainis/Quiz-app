import Header from "../../Components/Header/Header";
import { questions } from "../../Questions/Questions";
import arrow from '../../Components/Header/back-arrow.svg'

const QuizPage = () => {
    return (
        <>
        <Header className="flex flex-col relative">
            <div className="flex items-center w-full relative">
              <button className="absolute -translate-y-6">
                <img src={arrow} alt="arrow" className="w-6 h-6" />
              </button>
            </div>

            <div className="w-full h-[2px] bg-gray-300 rounded-sm mt-2">
                <div className="h-full bg-[#767AF9] rounded-sm">
                </div>
            </div>
        </Header>

            {questions.map(q => {
                if (q.id > 2) {
                    return (
                        <div>

                        </div>
                    );
                } else {
                    return (
                        <div>

                        </div>
                    )
                }
            }

            )}
        </>
    );
}

export default QuizPage;
