function getScore(score) {

  let grade = 0;

  if(typeof score != "number" || isNaN(score)){
    return "Not a number"
  }
  else if (score < 0 || score >100){
    return "Invalid score"
  }
  else {
    grade = (score >= 90) ? "A" : (
      (score < 89 && score >=80) ? "B" : (
        (score < 79 && score >=70) ? "C" : (
          (score < 69 && score >=60) ? "D" : "E")
      )
    )
  }
  
  return grade
}

export default getScore;

/**
 * APRENDIZADOS
    const teste = Number("dadasd");
    (isNaN(teste)) ? console.log("not a number") : console.log("a number")
 */


