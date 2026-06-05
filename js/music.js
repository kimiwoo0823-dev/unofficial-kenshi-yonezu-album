fetch("/js/album.json")
  .then((response) => response.json()) //파일 형식 변환
  .then((data) => {
    const params = new URLSearchParams(location.search); //params에 url 값을 저장
    const musicId = params.get("id"); //저장된 값에서 id 부분을 musicId에 저장
    const music = data.musics.find((a) => a.id === musicId); //music의 값을 data(album.json)의 music 부분에 musicId 위치에 있는 값을 music에 저장
    const currentAlbum = data.album.find((a) => a.id === music.albumId);
    const currentSingle = data.single.find((a) => a.id === music.singleId);
    const title = document.querySelector(".musictitle");
    const mvis = document.querySelector(".mvis");
    const musicplay = document.querySelector(".musicplay");
    const lyrics = document.querySelector(".lyrics");
    const toolalbum = document.querySelector(".toolalbum");
    const toolsingle = document.querySelector(".toolsingle");
    const lyricstool = document.querySelector(".lyricstool");

    title.innerHTML = `${musicId}`;
    console.log(music);
    console.log(currentAlbum);
    console.log(currentSingle);
    if (music.mv != "") {
      mvis.innerHTML = music.mv
        .map(
          (_, mvl) => `
      <div class="mvvisual">
        <iframe src="${music.mv[mvl]}" class="mvideo" allowfullscreen>
        </iframe>
      </div>
        `,
        )
        .join("");
    }
    musicplay.innerHTML = music.music
      .map(
        (_, mus) => `
        <div class="musicvisual">
            <iframe src="${music.music[mus]}" class="musicvis" allow></iframe>
        </div>
        `,
      )
      .join("");
    if (music.jplyrics != "") {
      lyricstool.innerHTML = `
      <div class="lyrics">
      ${music.jplyrics
        .map(
          (_, lyr) => `
        <p class="lyricstext jplyrics">${music.jplyrics[lyr]}</p>
        <p class="lyricstext jpdlyrics">${music.jpdlyrics[lyr]}</p>
        <p class="lyricstext krlyrics">${music.krlyrics[lyr]}</p>
        `,
        )
        .join("")}
        </div>
        `;
    }
    function musichtml(data, type) {
      return `
      <div class="${type}">
        <div class="${type}title">
        <a href="/${type}/${type}.html?id=${data.id}">
          <img
            src="/image/title/${type}/${data.id}.png"
            class="titleimage"
            alt="${data.id}"
          />
          </a>
        </div>
        <table>
          <tr>
            <td colspan="2">${data.date}</td>
          </tr>
          ${data.musics
            .map(
              (mus) => `
          <tr class="${mus.id === musicId ? "bold" : ""}">
            <td>${mus.track}</td>
            <td><a href="/music.html?id=${mus.id}">${mus.jptitle}</a></td>
          </tr>
          `,
            )
            .join("")}
        </table>
      </div>
      `;
    }
    if ((currentAlbum && !currentSingle) || (!currentAlbum && currentSingle)) {
      document.querySelector(".tools").classList.add("single-mode");
    }
    if (currentAlbum) {
      toolalbum.innerHTML = musichtml(currentAlbum, "album");
    }
    if (currentSingle) {
      toolsingle.innerHTML = musichtml(currentSingle, "single");
    }

    const albumbackcolor = document.querySelector(".albumtitle");
    const singlebackcolor = document.querySelector(".singletitle");
    const albumbordercolor = document.querySelector(".album");
    const singlebordercolor = document.querySelector(".single");
    albumbackcolor.style.backgroundColor = currentAlbum.backcolor;
    singlebackcolor.style.backgroundColor = currentSingle.backcolor;
    albumbordercolor.style.borderColor = currentAlbum.bordercolor;
    singlebordercolor.style.borderColor = currentSingle.bordercolor;
  });
