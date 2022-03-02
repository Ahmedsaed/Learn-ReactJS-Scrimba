import "./QuizMenu.css"

export default function QuizMenu({isHidden, hideMenu }) {
    return (
        <div className={"quiz-menu" + (isHidden ? " hidden" : " visible")}>
            <h1 className="menu-header">Quizzical</h1>
            <p className="menu-desc">let's solve trivia questions</p>
            <button onClick={hideMenu} className="menu-btn">Start Quiz</button>
        </div>
    );
}