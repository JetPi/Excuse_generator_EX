let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let finish = [".com", ".net"];
  
function randomWordSelector(subject) {
    return Math.floor(Math.random() * subject.length - 1 + 1);
};
  
function domainNameGenerator(pronoun, adj, noun, finish) {
    let resultString = ``; 
    resultString = resultString.concat(pronoun[randomWordSelector(pronoun)]);
    resultString = resultString.concat(adj[randomWordSelector(pronoun)]);
    resultString = resultString.concat(noun[randomWordSelector(pronoun)]);
    resultString = resultString.concat(finish[randomWordSelector(pronoun)]);
    return resultString;
};

window.onload = function() {
    //write your code here
    for(let i=0;i<5;i++){
        console.log(domainNameGenerator(pronoun, adj, noun, finish))
    }
  };