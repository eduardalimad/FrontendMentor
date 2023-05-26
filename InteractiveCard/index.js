function getInfoCard() {
  var numberCard = document.getElementById("numberCard").value;
  document.getElementById("cardNumber").innerHTML = numberCard;

  var codigoCard = document.getElementById("cvcValue").value;
  document.getElementById("codValid").innerHTML = codigoCard;

  var mmCard = document.getElementById("valueMes").value;
  document.getElementById("Mes").innerHTML = mmCard + "/";

  var ycard = document.getElementById("valueAno").value;
  document.getElementById("Ano").innerHTML = ycard;
}

function getName() {
  var name = document.getElementById("nameCard").value;
  document.getElementById("name").innerHTML = name;
}

function validar(e) {
  e.preventDefault();
  var codigoCard = document.getElementById("cvcValue");
  var numeroCard = document.getElementById("numberCard");
  var nomeCard = document.getElementById("nameCard");
  var mesValid = document.getElementById("valueMes");
  var anoValid = document.getElementById("valueAno");
  var Message= "Campo Incorreto.."

  if (nomeCard.value === "") {
    document.getElementById("messageError").innerHTML = Message;
    nomeCard.focus();
    return;
  }
  if (numeroCard.value === "") {
    document.getElementById("messageError").innerHTML = Message;
    numeroCard.focus();
    return;
  }
  if (mesValid.value === "") {
    document.getElementById("messageError").innerHTML = Message;
    mesValid.focus();
    return;
  }
  if (anoValid.value === "") {
    document.getElementById("messageError").innerHTML = Message;
    anoValid.focus();
    return;
  }
  if (codigoCard.value === "") {
    document.getElementById("messageError").innerHTML = Message;
    codigoCard.focus();
    return;
  }

  alert("Formulário enviado!");
  return window.location.reload();
  
}
