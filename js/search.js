fetch("/js/album.json")
  .then((response) => response.json()) //파일 형식 변환
  .then((data) => {
    const params = new URLSearchParams(location.search);
    const searchvalue = params.get("id");
    const searchlist = document.getElementById("searchlist");

    function searchreturn(data, img) {
      return `
      <a href="/music.html?id=${data.id}">
        <div class="searchvaluebase">
          <img src="${img}" class="searchvalueimage" alt="${data.entitle}" />
          <div class="searchvaluetitle">${data.jptitle}</div>
        </div>
      </a>
        `;
    }
    data.musics.forEach((search) => {
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
      } else if (search.jplyrics?.includes(searchvalue)) {
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
      } else if (search.jplyrics2?.includes(searchvalue)) {
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
      } else if (search.jpdlyrics?.includes(searchvalue)) {
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
      } else if (search.jpdlyrics2?.includes(searchvalue)) {
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
      } else if (search.krlyrics?.includes(searchvalue)) {
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
      } else if (search.krlyrics2?.includes(searchvalue)) {
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
  });
