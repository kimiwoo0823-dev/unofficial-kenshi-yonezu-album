fetch("/album/album.json") //파일 찾기
  .then((response) => response.json()) //파일 형식 변환
  .then((data) => {
    const params = new URLSearchParams(location.search);
    const albumId = params.get("id");
    const albumlist = document.querySelector(".albumlist");
    console.log(data.album);
    console.log(Object.values(data.album)[0].musics);

    //albumlist.html 앨범 정렬
    data.album.forEach((albuml) => {
      albumlist.innerHTML += `
  <a href="/album/album.html?id=${albuml.id}">
    <div class="albumbase">
      <img src="${albuml.image}" class="albumimage" alt="${albuml.title}" />
        <p class="albumtitle">${albuml.number}<br />${albuml.title}</p>
        <p class="albumdate">${albuml.date}</p>
        <div class="albumtrack">
          <table>
          ${albuml.musics
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
  });
