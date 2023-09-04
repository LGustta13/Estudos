// break - quebra a execução do loop
// continue - pula a iteração atual do loop

for(let i=0; i<100; i++){
  if(i === 5){
    continue;
  }

  if(i === 50){
    break;
  }

  console.log(i)
}