import getScore from "./getScore.js";

function main(){
  
  const score = Number(prompt("Nota: "));
  alert("Nota: " + getScore(score));
}

main()