fetch("/js/album.json") //파일 찾기
  .then((response) => response.json()) //파일 형식 변환
  .then((data) => {
    const params = new URLSearchParams(location.search);
    const physicalId = params.get("id");
    const physicallist = document.querySelector(".physicallist");
    const checklist = document.querySelector(".checklist");

    let localcheck = JSON.parse(localStorage.getItem("checklist") ?? "{}");

    if (Array.isArray(localcheck)) {
      localcheck = {};
    }

    //     data.physical.forEach((physicall) => {
    //       physicallist.innerHTML += `
    //     <div class="physicalbase ${physicall.id}">
    //       <div class="slider">
    //         <img src="${physicall.image}" class="physicalimage" alt="${physicall.id}">
    //       </div>
    // `;
    //     });
    data.physical.forEach((list) => {
      checklist.innerHTML += `
    <div class="checkbase">
      <input type="checkbox"
             name="${list.id}"
             id="${list.id}"
             ${localcheck[list.id] ? "checked" : ""} />
      <label for="${list.id}">${list.id}</label>
    </div>
  `;
    });

    checklist.addEventListener("change", (e) => {
      if (e.target.type === "checkbox") {
        const id = e.target.id;

        localcheck[id] = e.target.checked;

        localStorage.setItem("checklist", JSON.stringify(localcheck));

        console.log("after:", localcheck);
      }
    });
  });
