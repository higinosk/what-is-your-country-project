function verificar() {
  let pais = document.querySelector("#txtpais").value;
  let res = document.querySelector("#res");

  res.innerHTML = `Você é natural de <strong>${pais}</strong>.`;
  
  if (pais.toLowerCase() === "brasil") {
      res.innerHTML += `<p>Você é brasileiro!</p>`;
  } else {
      res.innerHTML += `<p>Você é estrangeiro!</p>`;
  }
}

// Vinculando a função ao botão de verificação
document.querySelector("#verificarBtn").addEventListener("click", verificar);
