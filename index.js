let input = document.getElementById("input-el");
let btn = document.getElementById("btn-el");
let answerEl = document.getElementById("answer-el");
let luckEl = document.getElementById("luck-el");
let itemEl = document.getElementById("item-el");
let dangerEl = document.getElementById("danger-el");
let futureEl = document.getElementById("future-el");

let answerArray = [
  "Yes, definitely.",
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most Likely.",
  "Outlook good.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];

let futureArray = [
  "Go see a movie today. It's a great escape! Especially from all this pollution and dangerous UV radiation! Say, is that mole new?",
  "Your dreams will be filled with prophetic visions. Write them down. Hopefully, there are some lottery numbers or sports scores in there!",
  "Curse you. Curse your family! Curse your children! And your children's children! Vile, vile person.",
  "Eat well today! You've earned it! And by “it,” I mean “massive food allergies”! And by “earned,” I mean “acquired”. I should proof this stuff before. Let's try that again. “You've acquired massive food allergies!” Yes, much cleaner. Eat well!",
  "Those were not contact lenses you put in this morning. Best not think about this again…",
  "The white ball will be under the middle shell. Trust the stars. Invest all your money in this lucrative street game.",
  "YOU'VE WON A BRAND NEW CAR!",
  "You will feel a haunting sadness about times gone by. Today's smell is wheat grass and toast.",
  "Today is your annual Crime Day. Everyone are exempt from laws today.",
  "You will meet someone today who will have no effect on your life, and who you will immediately forget. Retain hope for a possible future.",
  "“I've gotta pay my phone bill, and also get some more milk.” That wasn't me. That is what the stars say today. Interpret it as you will.",
  "It's better that I don't read this aloud. Better that you not know. Tell your family that you love them.",
  "You should check under your bed before you go to sleep. That way the thing hiding in your closet will think you haven't realized where it is yet.",
  "All eyes are on you. Gross! Give them back.",
  "Mars is intersecting with Mercury, which means your head is weirdly big for your body, and no one wants to tell you because they don't want you to have the grace of self awareness.",
  "You worry too much about earthquakes and plane crashes. You're going to die of heart disease or cancer, just like everybody else.",
  "Stop throwing your money away on expensive cars and nice clothes. The owners of those cars and outfits do not appreciate the crumpled dollar bills you keep throwing on them! And anyway, if you want to throw something away, that's what garbage cans are for.",
  "You've been so stressed lately. Why not just sit outside tonight, relax, look up at the stars, and know basically nothing about the world you live in.",
  "Scorpions are not as dangerous as everyone thinks. Try to concentrate on that. It'll help you feel a little calmer tomorrow.",
  "I know this is a hard time for you, but remember: 'tis better to have loved and lost. It's really great, just the best.",
];

function getRandomAnswer() {
  let randomAnswer = Math.floor(Math.random() * answerArray.length);
  answerEl.textContent = answerArray[randomAnswer];
}

function getRandomFuture() {
  let randomFuture = Math.floor(Math.random() * futureArray.length);
  futureEl.textContent = futureArray[randomFuture];
}

function doTheThing() {
  getRandomAnswer();
  getRandomFuture();
}
