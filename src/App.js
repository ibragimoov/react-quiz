import { useState } from "react";
import "./index.scss";

const questions = [
    {
        title: "Ибраим - это. . .",
        variants: ["токсик", "супер-токсик", "ультра-токсик"],
        correct: 2,
    },
    {
        title: "Любимое аниме Эрнеса",
        variants: ["наруто", "жо жо", "боруто"],
        correct: 2,
    },
    {
        title: "Какая игра на канале Помидорчик плей набрала больше всего просмотров?",
        variants: ["стрей", "фортнайт", "майнкрафт"],
        correct: 3,
    },
];

function Result({ correct }) {
    return (
        <div className="result">
            <img
                src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
                alt="result-img"
            />
            <h2>
                Вы отгадали {correct} ответа из {questions.length}
            </h2>
            <a href="/">
                <button>Попробовать снова</button>
            </a>
        </div>
    );
}

function Game({ step, question, handleAnswer }) {
    const percent = Math.round((step / questions.length) * 100);

    return (
        <>
            <div className="progress">
                <div
                    style={{ width: `${percent}%` }}
                    className="progress__inner"
                ></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {question.variants.map((quiz, i) => (
                    <li onClick={() => handleAnswer(i)} key={quiz}>
                        {quiz}
                    </li>
                ))}
            </ul>
        </>
    );
}

function App() {
    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0);
    const question = questions[step];

    const handleAnswer = (i) => {
        if (i === question.correct) {
            setCorrect(correct + 1);
        }
        setStep(step + 1);
    };

    return (
        <div className="App">
            {step !== questions.length ? (
                <Game
                    step={step}
                    question={question}
                    handleAnswer={handleAnswer}
                />
            ) : (
                <Result correct={correct} />
            )}
        </div>
    );
}

export default App;
