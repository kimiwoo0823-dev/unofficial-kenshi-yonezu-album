document.addEventListener("DOMContentLoaded", () => {
  const pathkeyword = ["album", "single", "digital", "physical"];
  const path = location.pathname;
  fetch(
    pathkeyword.map((keywords) => path.includes(keywords))
      ? "../header.html"
      : "header.html",
  ) //헤더 파일 찾기
    .then((response) => response.text()) //형식을 텍스트로 변경
    .then((data) => {
      document.getElementById("header").innerHTML = data; //header id에 불러온 data값 추가

      pathkeyword.forEach((keywords) => {
        if (path.includes(`/${keywords}/`)) {
          //주소창에 /album/이 존재하면 상단 메뉴의 albummenu 클래스를 가진 부분에 nowposition(색 변환 강조) 클래스 추가
          document
            .querySelector(`.${keywords}menu`)
            .classList.add("nowposition");
        }
      });

      const headerbtn = document.getElementById("searchbtn");
      headerbtn.addEventListener("click", search);
      console.log(headerbtn);

      function search() {
        const searchvalue = document.getElementById("searchtext").value;
        location.href = `${pathkeyword.map((keywords) => path.includes(keywords)) ? "../" : ""}search.html?id=${searchvalue}`;
      }

      const darkmodebtn = document.getElementById("darkmodebtn");
      darkmodebtn.addEventListener("click", theme);

      const headerbase = document.querySelector(".headerbase");
      const homebtn = document.querySelector(".homebutton");
      const namebase = document.querySelectorAll(".namebase");
      const nowposition = document.querySelectorAll(".nowposition");
      const text = document.querySelectorAll(".text");
      const html = document.querySelector("html");

      function theme() {
        if (localStorage.getItem("theme") == "darkmode") {
          localStorage.setItem("theme", "lightmode");
        } else {
          localStorage.setItem("theme", "darkmode");
        }

        if (localStorage.getItem("theme") == "darkmode") {
          html.style.backgroundImage = "none";
          html.style.backgroundColor = "rgb(12, 12, 51)";
          headerbase.style.backgroundColor = "rgba(85, 58, 86, 0.7)";
          homebtn.addEventListener("mouseenter", () => {
            homebtn.style.backgroundColor = "rgba(221, 219, 134, 0.35)";
          });
          homebtn.addEventListener("mouseleave", () => {
            homebtn.style.backgroundColor = "rgba(0, 0, 0, 0)";
          });
          namebase.forEach((a) => {
            a.addEventListener("mouseenter", () => {
              a.style.backgroundColor = "rgba(9, 0, 53, 0.35)";
            });
            a.addEventListener("mouseleave", () => {
              a.style.backgroundColor = "rgba(0, 0, 0, 0)";
            });
          });
          nowposition.forEach((a) => {
            a.addEventListener("mouseleave", () => {
              a.style.backgroundColor = "rgba(224, 197, 214, 0.25)";
            });
          });
          text.forEach((a) => {
            a.style.color = "white";
          });
        } else if (localStorage.getItem("theme") == "lightmode") {
          html.style.backgroundImage = "none";
          html.style.backgroundColor = "rgb(255, 255, 255)";
          headerbase.style.backgroundColor = "rgba(226, 217, 174, 0.7)";
          homebtn.addEventListener("mouseenter", () => {
            homebtn.style.backgroundColor = "rgba(66, 143, 155, 0.1)";
          });
          homebtn.addEventListener("mouseleave", () => {
            homebtn.style.backgroundColor = "rgba(0, 0, 0, 0)";
          });
          namebase.forEach((a) => {
            a.addEventListener("mouseenter", () => {
              a.style.backgroundColor = "rgba(66, 143, 155, 0.1)";
            });
            a.addEventListener("mouseleave", () => {
              a.style.backgroundColor = "rgba(0, 0, 0, 0)";
            });
          });
          nowposition.forEach((a) => {
            a.addEventListener("mouseleave", () => {
              a.style.backgroundColor = "rgba(224, 197, 214, 0.25)";
            });
          });
          text.forEach((a) => {
            a.style.color = "black";
          });
        }
      }

      if (localStorage.getItem("theme") == "darkmode") {
        html.style.backgroundImage = "none";
        html.style.backgroundColor = "rgb(12, 12, 51)";
        text.forEach((a) => {
          a.style.color = "white";
        });
        headerbase.style.backgroundColor = "rgba(85, 58, 86, 0.7)";
        homebtn.addEventListener("mouseenter", () => {
          homebtn.style.backgroundColor = "rgba(221, 219, 134, 0.35)";
        });
        homebtn.addEventListener("mouseleave", () => {
          homebtn.style.backgroundColor = "rgba(0, 0, 0, 0)";
        });
        namebase.forEach((a) => {
          a.addEventListener("mouseenter", () => {
            a.style.backgroundColor = "rgba(9, 0, 53, 0.35)";
          });
          a.addEventListener("mouseleave", () => {
            a.style.backgroundColor = "rgba(0, 0, 0, 0)";
          });
        });
        nowposition.forEach((a) => {
          a.addEventListener("mouseleave", () => {
            a.style.backgroundColor = "rgba(224, 197, 214, 0.25)";
          });
        });
      } else if (localStorage.getItem("theme") == "lightmode") {
        html.style.backgroundImage = "none";
        html.style.backgroundColor = "rgb(255, 255, 255)";
        text.forEach((a) => {
          a.style.color = "black";
        });
        headerbase.style.backgroundColor = "rgba(226, 217, 174, 0.7)";
        homebtn.addEventListener("mouseenter", () => {
          homebtn.style.backgroundColor = "rgba(66, 143, 155, 0.1)";
        });
        homebtn.addEventListener("mouseleave", () => {
          homebtn.style.backgroundColor = "rgba(0, 0, 0, 0)";
        });
        namebase.forEach((a) => {
          a.addEventListener("mouseenter", () => {
            a.style.backgroundColor = "rgba(66, 143, 155, 0.1)";
          });
          a.addEventListener("mouseleave", () => {
            a.style.backgroundColor = "rgba(0, 0, 0, 0)";
          });
        });
        nowposition.forEach((a) => {
          a.addEventListener("mouseleave", () => {
            a.style.backgroundColor = "rgba(224, 197, 214, 0.25)";
          });
        });
      } else {
        const theme = localStorage.getItem("theme");
        fetch("/js/album.json")
          .then((response) => response.json())
          .then((data) => {
            const currenttheme = data.theme.find((thms) => thms.id === theme);
            html.style.backgroundImage = `url(${pathkeyword.map((keywords) => path.includes(keywords)) ? "../" : ""}${currenttheme.backgroundImage})`;
            text.forEach((a) => {
              a.style.color = currenttheme.color;
            });
            headerbase.style.backgroundColor = currenttheme.backgroundColor;
            homebtn.addEventListener("mouseenter", () => {
              homebtn.style.backgroundColor = currenttheme.buttonhover;
            });
            homebtn.addEventListener("mouseleave", () => {
              homebtn.style.backgroundColor = "rgba(0, 0, 0, 0)";
            });
            namebase.forEach((a) => {
              a.addEventListener("mouseenter", () => {
                a.style.backgroundColor = currenttheme.buttonhover;
              });
              a.addEventListener("mouseleave", () => {
                a.style.backgroundColor = "rgba(0, 0, 0, 0)";
              });
            });
            nowposition.forEach((a) => {
              a.addEventListener("mouseleave", () => {
                a.style.backgroundColor = currenttheme.nowposition;
              });
            });
          });
      }
    });
});
