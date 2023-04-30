import { useState } from "react";
import QuestionList from "../data/questions.json";

function QuizScreen() {
    const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
    const [markedAnswers, setMarkedAnswers] = useState(new Array(QuestionList.length));
    return (

    );
}

export default QuizScreen;