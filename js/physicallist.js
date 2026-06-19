fetch("/js/album.json") //파일 찾기
  .then((response) => response.json()) //파일 형식 변환
  .then((data) => {
    const params = new URLSearchParams(location.search);
    const physicalId = params.get("id");
    const physicallist = document.querySelector(".physicallist");

    //physicallist.html 앨범 정렬
    data.physical.forEach((physicall) => {
      physicallist.innerHTML += `
    <div class="physicalbase ${physicall.id}">
      <div class="slider">
        <img src="${physicall.image}" class="physicalimage" alt="${physicall.id}">
      </div>
`;
    });
  });
