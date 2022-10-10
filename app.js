let elQuestionScreen = document.getElementById("questionscreen")
let elScreenResult = document.getElementById("resultscreen")

function Quiz() {
    this.questions = []
    this.counter = 0
    this.indexCurrentQuestion = 0
    this.addQuestion = function(question) {
        this.questions.push(question)
    }
    this.showCurrentQuestion = function() {
        if (this.indexCurrentQuestion < this.questions.length) {
            this.questions[this.indexCurrentQuestion].getElement()  // recupera dato del array[x]
        } else {
            elQuestionScreen.classList.add('hidden')                                // --
                                                                                    //
            let elCorrectAnswers = document.querySelector("#correctAnswers")        //  -->> Activa Ventana de Resultados
            elCorrectAnswers.innerHTML = quiz.counter                               // 
                                                                                    // 
            // elScreenResult.classList.add('block')                                //
            elScreenResult.style.display = "block"                                  // --
        }
    }
}


function Question(title, answers, correctAnswer, condicionante, numeroPregunta) {
    this.title = title
    this.answers = answers
    this.correctAnswer = correctAnswer
    this.condicionante = condicionante
    this.numeroPregunta = numeroPregunta

    this.getBody = function() {
        let body = this.title.toUpperCase() + '\n'
        for (let i=0; i<this.answers.length; i++) {
             body += (i+1) + '. ' + this.answers[i] + '\n'
        }
        return body
    }
    this.addAnswer = function(answer) {
        // this.answers[this.answers.length] = answer
        this.answers.push(answer)
    }
    this.isCorrectAnswer = function(userAnswer) {
        if (this.correctAnswer == userAnswer) return true
        else return false
    }
    this.getElement = function() {

        // Crea Elemento y 
        let questionNumber = document.createElement("h2")
        questionNumber.textContent = "Pregunta 1/3"
        elQuestionScreen.append(questionNumber)
        let questionTitle = document.createElement("h3")
        questionTitle.textContent = this.title
        elQuestionScreen.append(questionTitle)

        let questionAnswers = document.createElement("ul")
        questionAnswers.classList.add("question__awswers")

        this.answers.forEach((answer, index) => {
            let elAnswer = document.createElement("li")
            elAnswer.classList.add("awswer")
            elAnswer.textContent = answer
            elAnswer.id = index+1
            elAnswer.addEventListener("click", this.checkAnswer)
            questionAnswers.append(elAnswer)
        })

        elQuestionScreen.append(questionAnswers)
    }

    this.checkAnswer = (event) => {
        let anwserSelected = event.target
        console.log(anwserSelected)
        if (this.isCorrectAnswer(anwserSelected.id)) {
            anwserSelected.classList.add('answer--correct')
            quiz.counter++
        } else {
            anwserSelected.classList.add('answer--wrong')
            let elCorrectAnswer = document.getElementById(this.correctAnswer)
            elCorrectAnswer.classList.add('answer--correct')
        }

        setTimeout(function() {
            elQuestionScreen.textContent = ''
            quiz.indexCurrentQuestion++
            quiz.showCurrentQuestion()
        }, 1000)
    }
}



let question1 = new Question('¿La calidad del producto o servicio es la esperada?', ["Si", "No", "Quizás", "Nunca"], 1, 0, 0)
let question2 = new Question('¿Repetiría la experiencia de compra?', ["Si", "No", "Quizás", "Nunca"], 2, 0, 0)
let question3 = new Question('¿Nos recomendaría a sus amigos o familiares?', ["Si", "No", "Quizás", "Nunca"], 1, 0, 0)
let question4 = new Question('¿Ha tenido algún problema en el proceso de compra?', ["Si", "No", "Quizás", "Nunca"], 1, 0, 0)
let question5 = new Question('¿Cuántas veces ha utilizado el producto o servicio?', ["Si", "No", "Quizás", "Nunca"], 1, 0, 0)
let question6 = new Question('¿Cuánto tiempo hace que conoce nuestra empresa? ¿Desde cuándo es nuestro cliente?', ["Si", "No", "Quizás", "Nunca"], 1, 0, 0)
let question7 = new Question('¿Qué le ha parecido la relación entre la calidad ofrecida y el precio?', ["Si", "No", "Quizás", "Nunca"], 1, 0, 0)
let question8 = new Question('¿Con qué frecuencia se puede permitir comprar nuestro producto o servicio?', ["Si", "No", "Quizás", "Nunca"], 1, 0, 0)
let question9 = new Question('¿Volvería a invertir su dinero en nuestros productos o servicios?', ["Si", "No", "Quizás", "Nunca"], 1, 0, 0)
let question10 = new Question('¿Es nuestra marca la primera que tiene en mente en nuestro sector?', ["Si", "No", "Quizás", "Nunca"], 1, 0, 0)
let question11 = new Question('', ["Si", "No", "Quizás", "Nunca"], 1, 0, 0)
let question12 = new Question('¿Cómo valora usted la atención recibida?', ["Si", "No", "Quizás", "Nunca"], 1, 0, 0)
let question13 = new Question('¿Cómo ha sido tratado?', ["Si", "No", "Quizás", "Nunca"], 1, 0, 0)
let question14 = new Question('¿Considera suficientes los conocimientos de la persona que le ha atendido?', ["Si", "No", "Quizás", "Nunca"], 1, 0, 0)
let question15 = new Question('¿Le ha inspirado confianza la atención recibida?', ["Si", "No", "Quizás", "Nunca"], 1, 0, 0)
let question16 = new Question('¿La persona que le ha atendido ha comprendido sus necesidades?', ["Si", "No", "Quizás", "Nunca"], 1, 0, 0)
let question17 = new Question('¿Añadiría alguna pregunta a esta encuesta de satisfacción?', ["Si", "No", "Quizás", "Nunca"], 1, 0, 0)
let question18 = new Question('Aproveche este apartado para comunicarnos cualquier tema que considere relevante y sobre el cual no ha sido preguntado.', ["Si", "No", "Quizás", "Nunca"], 1, 0, 0)
let question19 = new Question('¿Tiene alguna sugerencia adicional sobre nuestro producto o servicio?', ["Si", "No", "Quizás", "Nunca"], 1, 0, 0)
let question20 = new Question('', ["Si", "No", "Quizás", "Nunca"], 1, 0, 0)

let quiz = new Quiz()
quiz.addQuestion(question1)
quiz.addQuestion(question2)
quiz.addQuestion(question3)
quiz.addQuestion(question4)
quiz.addQuestion(question5)
quiz.addQuestion(question6)
quiz.addQuestion(question7)
quiz.addQuestion(question8)
quiz.addQuestion(question9)
quiz.addQuestion(question10)
quiz.addQuestion(question11)
quiz.addQuestion(question12)
quiz.addQuestion(question13)
quiz.addQuestion(question14)
quiz.addQuestion(question15)
quiz.addQuestion(question16)
quiz.addQuestion(question17)
quiz.addQuestion(question18)
quiz.addQuestion(question19)
quiz.addQuestion(question20)



// quiz.launch()
// console.log(quiz)

// // let elCorrectAnswers = document.getElementById("correctAnswers")
// let elCorrectAnswers = document.querySelector("#correctAnswers")
// // console.log(elCorrectAnswers)
// // elCorrectAnswers.textContent = quiz.counter
// elCorrectAnswers.innerHTML = quiz.counter

// let elNumberOfQuestions = document.getElementsByClassName("numberOfQuestions")

// Aca lo relaciona con la clase que se indico en el Index

let elNumberOfQuestions = document.querySelectorAll(".numberOfQuestions")

// for (let i=0; i<elNumberOfQuestions.length; i++) {
//     elNumberOfQuestions[i].textContent = quiz.questions.length
// }

elNumberOfQuestions.forEach(function(elnumberofquestions) {
    elnumberofquestions.textContent = quiz.questions.length
})

// Puntapie Inicial ...!! en el Codigo.. 
// -------------------------------------
function seeFirstQuestion() {
    let elWelcomeScr = document.getElementById("welcomescreen")
    
    // con este cambia la propiedad
    // elWelcomeScr.style.display = 'none'

    // con este suma una class 
    elWelcomeScr.classList.add('hidden')

    
    elQuestionScreen.style.display = "block"

    quiz.showCurrentQuestion()
}

let elWelcomeBtn = document.getElementById("welcome_btn")
elWelcomeBtn.addEventListener("click", seeFirstQuestion)
