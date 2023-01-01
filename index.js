const adjective = ["dark", "helpful", "hot", "precious", "lovely", "angelic", "ethereal", "fair", "frail", "sweet", "kind", "dainty", "petite", "tiny", "mini", "delicate", "light", "tender", "warmhearted", "soft",
             "dreamy", "heavenly", "shy",
             "small", "little", "sexy", "graceful", "creamy", "sugary", "dear", "milky", "elegant", "delicious", "majestic", "pink", "purple", "violet", "white", "black", "teal", "dolly", "cutie"]

const noun = ["one", "darling", "angel", "baby", "angelface", "babe", "bby", "buttercup", "bae", "doll", "pie", "thing", "fairy", "wifey", "honey", "bun", "mouse", "bunny", "snow", "kitten", "pet", "peach", "caramel", "vanilla",
        "sugar", "venus", "milk", "cakes", "girl", "heaven", "rose", "daisy", "cloud", "butterfly", "candy", "kid", "love", "chocolate", "flower", "lady", "maid", "biscuit", "mermaid", "syren", "vanilla"]


function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}




const button = document.getElementById('btn');

button.addEventListener('click', function handleClick() {
  var x = (randomIntFromInterval(0, (adjective.length -1)) + (randomIntFromInterval(0, (noun.length -1));
  document.getElementById("demo").innerHTML = x;
});