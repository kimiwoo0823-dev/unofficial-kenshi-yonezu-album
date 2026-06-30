fetch("/js/album.json") //파일 찾기
  .then((response) => response.json()) //파일 형식 변환
  .then((data) => {
    const params = new URLSearchParams(location.search); //params에 url 값을 저장
    const singleId = params.get("id"); //저장된 값에서 id 부분을 singleId에 저장
    const single = data.single.find((a) => a.id === singleId); //single의 값을 data(album.json)의 single 부분에 singleId 위치에 있는 값을 single에 저장
    const musictrack = document.querySelector(".musictrack"); //불러온 웹페이지에서 .musictrack
    const singlevisual = document.querySelector(".singlevisual");

    singlevisual.innerHTML += `
      <div class="slider">
    ${single.image
      .map(
        (img) => `
              <img src="${img}" class="singleimage" alt="${single.id}">
            `,
      )
      .join("")}
      </div>
      <div class="singletitle">
        <div class="album" data-jp="${single.jptitle}" data-en="${single.entitle}">
          <p class="singlenumber text">${single.number}</p>
          <div class="singletext text">${single.jptitle}</div>
        </div>
      </div>
`;
    single.musics.forEach((music) => {
      musictrack.innerHTML += `
    <a href="/music.html?id=${music.id}" class="music" data-jp="${music.jptitle}" data-en="${music.entitle}">
      <p class="number text">${music.track}</p>
      <div class="titlebox title text">${music.jptitle}</div>
      <p class="time text">${music.time}</p>
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
    document.querySelector(".singletext").addEventListener("mouseenter", () => {
      const title = document.querySelector(".singletext");
      title.textContent = single.entitle;
    });
    document.querySelector(".singletext").addEventListener("mouseleave", () => {
      const title = document.querySelector(".singletext");
      title.textContent = single.jptitle;
    });
  });
