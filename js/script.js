document.getElementById("botaoenviar").addEventListener("click",validaformulario)

function validaformulario(){
  if(document.getElementById("nome").value != "" && 
    document.getElementById("e-mail").value != "" &&
    document.getElementById("telefone").value != "") {
      alert("Prontinho! Você receberá as novidades por e-mail.")
  }else{
    alert ("Por favor, preencha os dados nome, e-mail e telefone")
  }
}