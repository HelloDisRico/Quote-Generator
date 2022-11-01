// add the function to make button do button stuff
let btn = document.getElementById('btn'); // this id was made in the html file
let output = document.getElementById('output') // 
let quote = [ "He who conquers himself is the mightiest warrior.", 
"The right man in the wrong place can make all the difference in the world.",
"Even in dark times, we cannot relinquish the things that make us human",
"It's time to kick ass and chew bubblegum... and I'm all outta gum.",
"…",
"Bread.",
"WHAT IS THAT MELODY!!!",
];

btn.addEventListener('click', function(){
let randomQuote =  quote[Math.floor(Math.random() *quote.length)]
output.innerHTML = randomQuote
})