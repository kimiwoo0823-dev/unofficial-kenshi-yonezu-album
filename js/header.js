fetch("/header.html") //헤더 파일 찾기
  .then((response) => response.text()) //형식을 텍스트로 변경
  .then((data) => {
    document.getElementById("header").innerHTML = data; //header id에 불러온 data값 추가

    const path = location.pathname; //위치하는 주소의 이름을 path에 저장

    if (path.includes("/album/")) {
      //주소창에 /album/이 존재하면 상단 메뉴의 albummenu 클래스를 가진 부분에 nowposition(색 변환 강조) 클래스 추가
      document.querySelector(".albummenu").classList.add("nowposition");
    }
    if (path.includes("/single/")) {
      //주소창에 /single/이 존재하면 상단 메뉴의 singlemenu 클래스를 가진 부분에 nowposition(색 변환 강조) 클래스 추가
      document.querySelector(".singlemenu").classList.add("nowposition");
    }
    if (path.includes("/digital/")) {
      //주소창에 /digital/이 존재하면 상단 메뉴의 digitalmenu 클래스를 가진 부분에 nowposition(색 변환 강조) 클래스 추가
      document.querySelector(".digitalmenu").classList.add("nowposition");
    }
    if (path.includes("/physical/")) {
      //주소창에 /physical/이 존재하면 상단 메뉴의 physicalmenu 클래스를 가진 부분에 nowposition(색 변환 강조) 클래스 추가
      document.querySelector(".physicalmenu").classList.add("nowposition");
    }
    const headerbtn = document.getElementById("searchbtn");
    headerbtn.addEventListener("click", search);
    console.log(headerbtn);

    function search() {
      console.log("a");
      const searchvalue = document.getElementById("searchtext").value;
      location.href = `/search.html?id=${searchvalue}`;
    }
  });
