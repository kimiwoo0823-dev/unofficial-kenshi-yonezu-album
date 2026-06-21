fetch("/js/album.json")
  .then((response) => response.json()) //파일 형식 변환
  .then((data) => {
    const params = new URLSearchParams(location.search);
    const searchvalue = params.get("id");
    const searchlist = document.getElementById("searchlist");

    function searchreturn(data, img) {
      return `
      <div class="searchvaluebase">
        <img src="${img}" class="searchvalueimage" alt="${data.entitle}" />
        <div class="searchvaluetitle">${data.jptitle}</div>
        <a href="/music.html?id=${data.id}">
          <button class="button">상세정보</button>
        </a>
        <button class="button playlist" id="${data.id}">재생목록에 추가</button>
      </div>
        `;
    }

    data.musics.forEach((search) => {
      //album.json 내부에서 musics 부분의 갯수만큼 반복
      const currentAlbum = data.album.find((a) => a.id === search.albumId);
      const currentSingle = data.single.find((a) => a.id === search.singleId);
      const currentDigital = data.digital.find((a) => a.id === search.id);
      if (search.id?.includes(searchvalue)) {
        searchlist.innerHTML += searchreturn(
          search,
          currentDigital
            ? currentDigital.image[0]
            : currentSingle
              ? currentSingle.image[0]
              : currentAlbum
                ? currentAlbum.image[0]
                : "",
        );
      } else if (search.albumId?.includes(searchvalue)) {
        searchlist.innerHTML += searchreturn(
          search,
          currentDigital
            ? currentDigital.image[0]
            : currentSingle
              ? currentSingle.image[0]
              : currentAlbum
                ? currentAlbum.image[0]
                : "",
        );
      } else if (search.jptitle?.includes(searchvalue)) {
        searchlist.innerHTML += searchreturn(
          search,
          currentDigital
            ? currentDigital.image[0]
            : currentSingle
              ? currentSingle.image[0]
              : currentAlbum
                ? currentAlbum.image[0]
                : "",
        );
      } else if (search.entitle?.includes(searchvalue)) {
        searchlist.innerHTML += searchreturn(
          search,
          currentDigital
            ? currentDigital.image[0]
            : currentSingle
              ? currentSingle.image[0]
              : currentAlbum
                ? currentAlbum.image[0]
                : "",
        );
      } else {
        search.jplyrics.forEach((lyrics) => {
          if (search.jplyrics[lyrics]?.includes(searchvalue)) {
            searchlist.innerHTML += searchreturn(
              search,
              currentDigital
                ? currentDigital.image[0]
                : currentSingle
                  ? currentSingle.image[0]
                  : currentAlbum
                    ? currentAlbum.image[0]
                    : "",
            );
          } else if (search.jplyrics2[lyrics]?.includes(searchvalue)) {
            searchlist.innerHTML += searchreturn(
              search,
              currentDigital
                ? currentDigital.image[0]
                : currentSingle
                  ? currentSingle.image[0]
                  : currentAlbum
                    ? currentAlbum.image[0]
                    : "",
            );
          } else if (search.jpdlyrics[lyrics]?.includes(searchvalue)) {
            searchlist.innerHTML += searchreturn(
              search,
              currentDigital
                ? currentDigital.image[0]
                : currentSingle
                  ? currentSingle.image[0]
                  : currentAlbum
                    ? currentAlbum.image[0]
                    : "",
            );
          } else if (search.jpdlyrics2[lyrics]?.includes(searchvalue)) {
            searchlist.innerHTML += searchreturn(
              search,
              currentDigital
                ? currentDigital.image[0]
                : currentSingle
                  ? currentSingle.image[0]
                  : currentAlbum
                    ? currentAlbum.image[0]
                    : "",
            );
          } else if (search.krlyrics[lyrics]?.includes(searchvalue)) {
            searchlist.innerHTML += searchreturn(
              search,
              currentDigital
                ? currentDigital.image[0]
                : currentSingle
                  ? currentSingle.image[0]
                  : currentAlbum
                    ? currentAlbum.image[0]
                    : "",
            );
          } else if (search.krlyrics2[lyrics]?.includes(searchvalue)) {
            searchlist.innerHTML += searchreturn(
              search,
              currentDigital
                ? currentDigital.image[0]
                : currentSingle
                  ? currentSingle.image[0]
                  : currentAlbum
                    ? currentAlbum.image[0]
                    : "",
            );
          }
        });
      }
    });

    const playlistbtn = document.querySelectorAll(".playlist");

    playlistbtn.forEach((btn) => {
      btn.addEventListener("click", playlist);
    });

    function playlist(musicname) {
      const musicId = musicname.currentTarget.id;

      let playlist = JSON.parse(localStorage.getItem("playlist")) || [];

      if (!playlist.includes(musicId)) {
        playlist.push(musicId);
        localStorage.setItem("playlist", JSON.stringify(playlist));
      }
    }
  });
