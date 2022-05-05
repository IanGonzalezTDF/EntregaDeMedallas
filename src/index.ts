let data = document.getElementById("data");
let btnSend = document.getElementById("send");

btnSend.addEventListener("click", () => {
  let posicionDeLlegada: number = Number(data.value);

  switch (posicionDeLlegada) {
    case 1:
      console.log("Entregar medalla de oro");
      break;
    case 2:
      console.log("Entregar medalla de plata");
      break;
    case 3:
      console.log("Entregar medalla de bronce");
      break;
    default:
      console.log("Entregar mención de participación");
      break;
  }
});
