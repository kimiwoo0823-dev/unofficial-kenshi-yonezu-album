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
    <div class="digitalbase ${digitall.id}">
      <div class="slider">
          ${digitall.image
            .map(
              (img) => `
              <img src="${img}" class="digitalimage" alt="${digitall.id}">
            `,
            )
            .join("")}
        </div>
        <div class="digitaltitle text${digitall.id}">
          <img src="/image/title/digital/${digitall.id}.png" class="digitaltext" alt="${digitall.id}">
        </div>
        <p class="digitaldate text${digitall.id}">${digitall.date}</p>
      </div>
    </a>
`;
    });
    data.digital.forEach((digit) => {
      const digitalbase = document.querySelector(
        ".digitalbase" + `.${digit.id}`,
      );
      const digitaltext = document.querySelectorAll(`.text${digit.id}`);
      digitalbase.style.backgroundColor = digit.backcolor;
      digitaltext.forEach((text) => {
        text.style.color = digit.textcolor;
      });
    });
  });
