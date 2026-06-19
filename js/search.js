fetch("/js/album.json")
  .then((response) => response.json()) //파일 형식 변환
  .then((data) => {
    const params = new URLSearchParams(location.search);
    const searchvalue = params.get("id");

    data.musics.forEach((search) => {
      if (search.id.includes(searchvalue)) {
      } else if (search.albumId.includes(searchvalue)) {
      } else if (search.jptitle.includes(searchvalue)) {
      } else if (search.entitle.includes(searchvalue)) {
      } else if (search.jplyrics.includes(searchvalue)) {
      } else if (search.jplyrics2.includes(searchvalue)) {
      } else if (search.jpdlyrics.includes(searchvalue)) {
      } else if (search.jpdlyrics2.includes(searchvalue)) {
      } else if (search.krlyrics.includes(searchvalue)) {
      } else if (search.krlyrics2.includes(searchvalue)) {
      }
    });

    function searchreturn(data) {
      return `
        `;
    }
  });
