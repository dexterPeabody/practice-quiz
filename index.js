/*
Are you a bird or a cat or bunny

what's your choice of dinner?
	fish stew? CAT
	chocolote worms? BIRD
	fresh garden salad? BUNNY

what's your choice of a comphy bed?
	twisted mess of your own creation? BIRD
	your boyfriends laundy? CAT
	a warm burrow under the sheets? BUNNY

what's your choice of toy?
	something you can chase around? CAT
	something you can pull and tug at? BIRD
	something you can munch of? BUNNY

what's the best means of travel? 
	Private chauffeur though the cuntry side? CAT
	A direct first class flight? BIRD
	Train hopping cross cuntry? BUNNY

what's the best part of the day?
	A warm nap in the window? CAT
	A cup of coffee at the break of dawn? BIRD
	When the cool grass touches the toes? BUNNY */
let questionContainer = document.getElementById('question-container');
let answerOne = document.getElementById('option-one-text');
let answerTwo = document.getElementById('option-two-text');
let answerThree = document.getElementById('option-three-text');

let userScore = [];
let currentQuestion = 0

	
let theFiveQuestions = [
	{
		question:"What is your choice of dinner?",
		answers: [
			"Fish stew",
			"Chocolote worms",
			"A fresh garden salad"
		]
	},
	{
		question: "What is your choice of a comphy bed?",
		answers: [
			"Your significant other's laundy",
			"A twisted mess of your own creation",
			"A warm burrow under the sheets"
		]
	},
	{
		question: "What is your choice of toy?",
		answers: [
			"Something you can chase around",
			"Something you can pull and tug at",
			"Something you can munch on"
		]
	},
	{
		question: "What is the best means of travel?",
		answers: [
			"A private chauffeur though the cuntry side",
			"A direct first class flight",
			"Train hopping cross cuntry"
		]
	},
	{
		question: "What is the best part of the day?",
		answers: [
			"A warm nap in the window",
			"A cup of coffee at the break of dawn",
			"When the cool grass touches the toes"
		]
	}
]

function runQuiz(){
	questionContainer.innerHTML = theFiveQuestions[currentQuestion].question;
	answerOne.innerHTML = theFiveQuestions[currentQuestion].answers[0];
	answerTwo.innerHTML = theFiveQuestions[currentQuestion].answers[1];
	answerThree.innerHTML = theFiveQuestions[currentQuestion].answers[2];
}

runQuiz()

function submit-btn(){

}