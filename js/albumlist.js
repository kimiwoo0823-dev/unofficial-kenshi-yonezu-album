fetch("/js/album.json") //파일 찾기
  .then((response) => response.json()) //파일 형식 변환
  .then((data) => {
    const params = new URLSearchParams(location.search);
    const albumId = params.get("id");
    const albumlist = document.querySelector(".albumlist");
    console.log(data.album);

    //albumlist.html 앨범 정렬
    data.album.forEach((albuml) => {
      albumlist.innerHTML += `
  <a href="/album/album.html?id=${albuml.id}">
    <div class="albumbase">
      <div class="slider">
          ${albuml.image
            .map(
              (img) => `
              <img src="${img}" class="albumimage" alt="${albuml.title}">
            `,
            )
            .join("")}
        </div>
        <p class="albumtitle text">${albuml.number}<br />${albuml.title}</p>
        <p class="albumdate text">${albuml.date}</p>
        <div class="albumtrack">
          <table>
          ${albuml.musics
            .map(
              (music) => `
            <tr>
              <td class="text">${music.track}</td>
              <td class="text">${music.jptitle}</td>
            </tr>`,
            )
            .join("")}
            </table>
          </div>
      </div>
    </a>
`;
    });
  });
