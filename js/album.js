fetch("/js/album.json") //파일 찾기
  .then((response) => response.json()) //파일 형식 변환
  .then((data) => {
    const params = new URLSearchParams(location.search); //params에 url 값을 저장
    const albumId = params.get("id"); //저장된 값에서 id 부분을 albumId에 저장
    const album = data.album.find((a) => a.id === albumId); //album의 값을 data(album.json)의 album 부분에 albumId 위치에 있는 값을 album에 저장
    const musictrack = document.querySelector(".musictrack"); //불러온 웹페이지에서 .musictrack
    const albumvisual = document.querySelector(".albumvisual");

    albumvisual.innerHTML = `
      <div class="slider">
          ${album.image
            .map(
              (img) => `
              <img src="${img}" class="albumimage" alt="${album.title}">
            `,
            )
            .join("")}
        </div>
      <div class="albumtitle">
        <p class="albumnumber text">${album.number}</p>
        <p class="albumtext text">${album.title}</p>
      </div>
        `;
    document.querySelector(".albumnumber").textContent = album.number;
    document.querySelector(".albumtext").textContent = album.title;

    album.musics.forEach((music) => {
      musictrack.innerHTML += `
    <a href="/music.html?id=${music.id}" class="music" data-jp="${music.jptitle}" data-en="${music.entitle}">
      <p class="number">${music.track}</p>
      <div class="titlebox title">${music.jptitle}</div>
      <p class="time">${music.time}</p>
    </a>
`;
    });
    document.querySelectorAll(".music").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        const title = el.querySelector(".titlebox");
        title.textContent = el.dataset.en;
      });

      el.addEventListener("mouseleave", () => {
        const title = el.querySelector(".titlebox");
        title.textContent = el.dataset.jp;
      });
    });
  });
