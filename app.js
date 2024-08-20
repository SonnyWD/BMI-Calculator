const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 41 },
];

// IMC = poids en kg / taille² en m

const btn = document.querySelector(".btn-imc")
const form = document.querySelector("form")


btn.addEventListener("click", handleClick)
form.addEventListener("submit", handleSubmit)

function handleSubmit(e){
  e.preventDefault()
}

function handleClick(){

  const resultat = document.querySelector(".resultat")
  const message = document.querySelector(".resultat + p")


  let taille = document.querySelector("#taille")
  let poids = document.querySelector("#poids")
  taille = parseInt(taille.value) / 100;
  poids = parseInt(poids.value)

  let imc = (poids / (taille * taille)).toFixed(1);

  resultat.innerHTML = imc;

  

  if(imc <= BMIData[0].range[1]){
    message.innerHTML = BMIData[0].name
    resultat.style.color = BMIData[0].color
  }
  else if(imc <= BMIData[1].range[1]){
    message.innerHTML = BMIData[1].name
    resultat.style.color = BMIData[1].color
  }
  else if(imc <= BMIData[2].range[1]){
    message.innerHTML = BMIData[2].name
    resultat.style.color = BMIData[2].color
  }
  else if(imc <= BMIData[3].range[1]){
    message.innerHTML = BMIData[3].name
    resultat.style.color = BMIData[3].color
  }
  else if(imc <= BMIData[4].range[1]){
    message.innerHTML = BMIData[4].name
    resultat.style.color = BMIData[4].color
  }
  else if(imc >= BMIData[5].range){
    message.innerHTML = BMIData[5].name
    resultat.style.color = BMIData[5].color
  }

  if(!taille || !poids || taille <= 0 || poids <= 0){
    resultat.innerHTML = "Oups 😅"
    resultat.style.color = "#d10000"
    message.innerHTML = "Remplissez correctement les champs."
  }
}  

