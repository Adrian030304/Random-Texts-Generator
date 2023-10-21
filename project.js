//Variables

let btn = document.querySelector('#new-text');
let quote = querySelector('.quote');
let person = document.querySelector('.person')

const quotes = [
   {
    quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    person: "Albert Einstein"
   },
    {
    quote: "So many books, so little time.",
    person: "Frank Zappa"
  },
  {
    quote: "A room without books is like a body without a soul.",
    person: "Marcus Tullius Cicero"
  },
  {
    quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    person: "Bernard M. Baruch"
  },
  {
    quote: "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
    person: "William W. Purkey"
  },
  {
    quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    person: "Dr. Seuss"
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    person: "Mae West"
  },
  {
    quote: "Be the change that you wish to see in the world.",
    person: "Mahatma Gandhi"
  },
  {
    quote: "In three words I can sum up everything I've learned about life: it goes on.",
    person: "Robert Frost"
  },
  {
    quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    person: "J.K. Rowling, Harry Potter and the Goblet of Fire"
  }
];

btn.addEventListener('click',function(){

    let random = Math.floor(Math.random() * quotes.length);
    
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;


})