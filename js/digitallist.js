fetch("/js/album.json") //파일 찾기
  .then((response) => response.json()) //파일 형식 변환
  .then((data) => {
    const params = new URLSearchParams(location.search);
    const digitalId = params.get("id");
    const digitallist = document.querySelector(".digitallist");
    console.log(data.digital);

    //digitallist.html 앨범 정렬
    data.digital.forEach((digitall) => {
      digitallist.innerHTML += `
  <a href="/music.html?id=${digitall.id}">
    <div class="digitalbase">
      <div class="slider">
          ${digitall.image
            .map(
              (img) => `
              <img src="${img}" class="digitalimage" alt="${digitall.id}">
            `,
            )
            .join("")}
        </div>
        <p class="digitaltitle">${digitall.jptitle}</p>
        <p class="digitaldate">${digitall.date}</p>
        <div class="digitaltrack">
          <table>
          ${digitall.musics
            .map(
              (music) => `
            <tr>
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
    document.querySelectorAll(".digitaltitle").forEach((el) => {
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
