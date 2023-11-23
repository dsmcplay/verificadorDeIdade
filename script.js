function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  let fano = document.getElementById("txtano");
  let res = document.getElementById("res");
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert("(ERRO) verifique os dados!");
  } else {
    let fsex = document.getElementsByName("radsex");
    let idade = ano - Number(fano.value);
    let genero = "";
    let img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        //crianca
        img.setAttribute("src", "crianca-m (2).jpg");
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "./img/jovem-m.jpg");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "./img/adulto-m.jpg");
      } else {
        //idoso
        img.setAttribute("src", "./img/idoso-m.jpg");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        // criança
        img.setAttribute("src", "./img/crianca-f.jpg");
      } else if (idade < 21) {
        // jovem
        img.setAttribute("src", "./img/jovem-f.jpg");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "./img/adulto-f.jpg");
      } else {
        //idoso
        img.setAttribute("src", "./img/idoso-f.jpg");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    res.appendChild(img);
    img.style.width = "500px";
    img.style.borderRadius = "10px";
  }
}
