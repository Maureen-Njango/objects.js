class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  }
  let car1 = new Car('Toyota', 'Camry', 2020);
  class Rental {
    constructor(car, startDate, endDate) {
      this.car = car;
      this.startDate = startDate;
      this.endDate = endDate;
    }
  
    calculateRentalDuration() {
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);
      const durationInMs = end - start;
      const durationInDays = durationInMs / (1000 * 60 * 60 * 24);
      return durationInDays;
    }
  }
  
  let rental1 = new Rental(car1, '2022-01-01', '2022-01-10');
  let rentalDuration = rental1.calculateRentalDuration();
console.log(rentalDuration); // Output will be the number of days between the start and end date

class questions {
    constructor(text, options,correctAnswer) {
        this.text = text
        this.options = optionsthis.correctAnswer
    }
    checkAnswer(userAnswer) {
        return userAnswer ===thie.correctAnswer;
    }
}
class Ouiz {
    constructor() {
        this.questions = []
        this.currentQuestionIndex = 0;
        this.score = 0
    }
    addQuestion(question) {
        this.questions.push(questions);

    }
    nextQuestion() {
        this.currentQuestionIndex++;

    }
    submitAnswer(userAnswer) {
        const currentOuestion = this.question[this.currentQuestionIndex]
        if(currentOuestion.checkAnswer(userAnswer)) {
            this.score++;

        }
        this.nextQuestion();
    }
}
constquestion1 = new questions("what is the capital of Kenya?",["Nairobi", "Mombasa", "Kisumu", "Nakuru", ], "Narobi")
const question2 = new questions("Which is the largest desert in the world?",["sahara Desert","gobi Desert", "kalahari Desert"]);
const quiz = new quiz();