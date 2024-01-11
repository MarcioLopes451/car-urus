import { useState } from "react";
import { questionsData } from "../../../data/questionsData";
import RightArrow from "../../../images/211607_right_arrow_icon.png";

export default function FrequentQuestions() {
  const [open, setOpen] = useState(null);

  const openAnswer = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <div className="mt-5 font-Inria-Serif">
      <h2 className="font-bold text-2xl text-center">
        Frequently Asked Questions
      </h2>
      <div className="flex justify-center items-center flex-col mt-5">
        {questionsData.map((question) => (
          <div key={question.id} className="w-full">
            <div
              className="border border-black w-full h-14 flex items-center rounded cursor-pointer"
              onClick={() => openAnswer(question.id)}
            >
              <p className="font-semibold px-2 flex justify-between w-full items-center">
                {question.question}
              </p>
              <img src={RightArrow} className="w-[20px]" />
            </div>
            {open == question.id && <p>{question.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
