fetch("/js/album.json") //파일 찾기
  .then((response) => response.json()) //파일 형식 변환
  .then((data) => {
    const params = new URLSearchParams(location.search);
    const singleId = params.get("id");
    const singlelist = document.querySelector(".singlelist");
    console.log(data.single);

    //singlelist.html 앨범 정렬
    data.single.forEach((singlel) => {
      singlelist.innerHTML += `
  <a href="/single/single.html?id=${singlel.id}">
    <div class="singlebase">
      <div class="slider">
          ${singlel.image
            .map(
              (img) => `
              <img src="${img}" class="singleimage" alt="${singlel.id}">
            `,
            )
            .join("")}
        </div>
        <p class="singletitle">${singlel.number}<br />${singlel.jptitle}</p>
        <p class="singledate">${singlel.date}</p>
        <div class="singletrack">
          <table>
          ${singlel.musics
            .map(
              (music) => `
            <tr>
              <td>${music.track}</td>
              <td>${music.jptitle}</td>
            </tr>`,
            )
            .join("")}
            </table>
          </div>
      </div>
    </a>
`;
    });
    document.querySelectorAll(".singletitle").forEach((el) => {
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
