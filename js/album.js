fetch("/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  });

fetch("/album/album.json")
  .then((response) => response.json())
  .then((data) => {
    document.getElementsByClassName("dioramatitle").textContent =
      data.diorama.title;

    document.getElementsByClassName("dioramanumber").textContent =
      data.diorama.number;
  });
