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
let result;

	
let theFiveQuestions = [
	{
		question:"What is your choice of dinner?",
		answers: [
			"Fish stew",
			"Chocolate worms",
			"A fresh garden salad"
		]
	},
	{
		question: "What is your choice of a comfy bed?",
		answers: [
			"Your significant other's laundry",
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
			"A private chauffeur though the country side",
			"A direct first class flight",
			"Train hopping cross country"
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

function nextQuestion(){
	currentQuestion++;
	runQuiz()
}

runQuiz()

function getResults(){
	userScore.sort((a, b) => a - b); 
let count = 1, 
    max = 0
     
  
for (let i = 1; i < userScore.length; ++i) { 
    if (userScore[i] === userScore[i - 1]) { 
        count++; 
    } else { 
        count = 1; 
    } 
    if (count > max) { 
        max = count; 
        result = userScore[i]; 
    } 
} 
}

function getImage(){
	let imageResult = document.getElementById("image-result");
	let imgTitle = document.getElementById("img-title");
	document.getElementById('result-img').classList.remove('hide')

	if (result == 1){
		imageResult.setAttribute("src", "cat.jpeg")
		imgTitle.innerHTML = `Looks like you're a cool cat!`
	} else if (result == 2){
		imageResult.setAttribute("src", "bird.jpeg")
		imgTitle.innerHTML = `Looks like you're a cool Bird!`
	} else {
		imageResult.setAttribute("src", "bunny.jpeg")
		imgTitle.innerHTML = `Looks like you're a cool Bunny!`
	}
}

document.getElementById('submit-btn').onclick = function() {
	if( userScore.length <= 3)
	{let selected = document.querySelector(
		'input[type=radio][name=answer]:checked');
	console.log(selected.value);

	userScore.push(selected.value);

	nextQuestion();

	selected.checked = false;

	console.log(userScore)}

	else {
		let selected = document.querySelector(
			'input[type=radio][name=answer]:checked');
		
	
		userScore.push(selected.value);

		document.getElementById('quiz-body').classList.add('hide')

		console.log(userScore)

		getResults();

		getImage();
	
	}
}