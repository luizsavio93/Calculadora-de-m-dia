function result() {
  var nomeAluno = document.getElementById("nome").value;

  var notaPrimeiroBimestre = parseFloat(document.getElementById("1b").value);
  var notaSegundoBimestre = parseFloat(document.getElementById("2b").value);
  var notaTerceiroBimestre = parseFloat(document.getElementById("3b").value);
  var notaQuartoBimestre = parseFloat(document.getElementById("4b").value);
  var notaFinal = document.getElementById("notaFinal");
  var media =
    (notaPrimeiroBimestre +
      notaPrimeiroBimestre +
      notaSegundoBimestre +
      notaTerceiroBimestre +
      notaQuartoBimestre) /
    4;
  if (media > 7) {
    notaFinal.innerHTML =
      "Olá " +
      nomeAluno +
      ", Você foi aprovado(a) sua média foi " +
      media.toFixed(1);
  } else {
    notaFinal.innerHTML =
      "Olá " +
      nomeAluno +
      ", Infelizmente você foi reprovado(a) e sua média é " +
      media.toFixed(1);
  }
}