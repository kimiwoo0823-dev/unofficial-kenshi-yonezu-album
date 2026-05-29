fetch("/js/album.json")
  .then((response) => response.json()) //파일 형식 변환
  .then((data) => {
    const params = new URLSearchParams(location.search); //params에 url 값을 저장
    const musicId = params.get("id"); //저장된 값에서 id 부분을 musicId에 저장
    const allmusic = [...data.album, ...data.single, ...data.digital];
    const musiclist = allmusic.flatMap((item) => item.musics);
    const music = musiclist.find((a) => a.id === musicId); //music의 값을 data(album.json)의 music 부분에 musicId 위치에 있는 값을 music에 저장
    const title = document.querySelector(".musictitle");
    const mvis = document.querySelector(".mvis");
    const musicplay = document.querySelector(".musicplay");
    const lyrics = document.querySelector(".lyrics");
    title.textContent = music.entitle;
    console.log(music);

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
            <iframe src="${music.music[mus]}" class="musicvis"></iframe>
        </div>
        `,
      )
      .join("");

    lyrics.innerHTML = music.jplyrics
      .map(
        (_, lyr) => `
        <p class="lyricstext jplyrics">${music.jplyrics[lyr]}</p>
        <p class="lyricstext jpdlyrics">${music.jpdlyrics[lyr]}</p>
        <p class="lyricstext krlyrics">${music.krlyrics[lyr]}</p>
        `,
      )
      .join("");
  });
