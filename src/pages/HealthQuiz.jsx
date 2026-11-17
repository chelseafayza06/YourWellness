import { useState } from 'react'
import { Brain, CheckCircle, RotateCcw, Trophy } from 'lucide-react'
import { quizQuestions } from '../data/quizQuestions'

export default function HealthQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)

  const question = quizQuestions[currentQuestion]

  function chooseAnswer(index) {
    if (selectedAnswer !== null) return

    setSelectedAnswer(index)

    if (index === question.answer) {
      setScore((prev) => prev + 1)
    }

    setShowExplanation(true)
  }

  function nextQuestion() {
    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion((prev) => prev + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setFinished(true)
    }
  }

  function restartQuiz() {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setFinished(false)
    setShowExplanation(false)
  }

  const progress =
    ((currentQuestion + 1) / quizQuestions.length) * 100

  return (
    <div className="page-section">
      <div className="container quiz-container">

        <div className="page-heading">
          <span className="eyebrow">TEST YOUR KNOWLEDGE</span>
          <h1>Health <em>Quiz.</em></h1>
          <p>
            Uji pengetahuanmu seputar kesehatan melalui kuis singkat.
          </p>
        </div>

        <div className="quiz-card">

          {!finished ? (
            <>
              <div className="quiz-top">
                <span><Brain size={18} /> HEALTH CHALLENGE</span>

                <strong>
                  {currentQuestion + 1}/{quizQuestions.length}
                </strong>
              </div>

              <div className="quiz-progress">
                <div style={{ width: `${progress}%` }} />
              </div>

              <h2>{question.question}</h2>

              <div className="quiz-options">
                {question.options.map((option, index) => {
                  let className = 'quiz-option'

                  if (selectedAnswer !== null) {
                    if (index === question.answer) {
                      className += ' correct'
                    } else if (index === selectedAnswer) {
                      className += ' incorrect'
                    }
                  }

                  return (
                    <button
                      key={index}
                      className={className}
                      onClick={() => chooseAnswer(index)}
                      disabled={selectedAnswer !== null}
                    >
                      <span>{String.fromCharCode(65 + index)}</span>
                      {option}
                    </button>
                  )
                })}
              </div>

              {showExplanation && (
                <div className="quiz-explanation">
                  <strong>
                    {selectedAnswer === question.answer
                      ? 'Jawaban benar!'
                      : 'Belum tepat!'}
                  </strong>

                  <p>{question.explanation}</p>

                  <button
                    className="button button-primary"
                    onClick={nextQuestion}
                  >
                    {currentQuestion + 1 === quizQuestions.length
                      ? 'Lihat Hasil'
                      : 'Pertanyaan Berikutnya'}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="quiz-result">
              <span className="quiz-trophy">
                <Trophy size={38} />
              </span>

              <span className="eyebrow">QUIZ COMPLETED</span>

              <h2>Kuis selesai!</h2>

              <div className="quiz-score">
                {score}/{quizQuestions.length}
              </div>

              <p>
                Kamu menjawab benar {score} dari {quizQuestions.length} pertanyaan.
              </p>

              <button
                className="button button-primary"
                onClick={restartQuiz}
              >
                <RotateCcw size={16} />
                Ulangi Kuis
              </button>
            </div>
          )}

        </div>

        <div className="quiz-note">
          <CheckCircle size={18} />
          <p>
            Kuis ini bertujuan untuk edukasi dan menguji pengetahuan
            dasar kesehatan, bukan untuk menentukan kondisi medis.
          </p>
        </div>

      </div>
    </div>
  )
}