let nowmusic = 0;
let musics;
let player;

const playlist = JSON.parse(localStorage.getItem("playlist")) || [];

function getYoutubeId(url) {
  return url.split("/embed/")[1];
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("/js/album.json")
    .then((response) => response.json())
    .then((data) => {
      musics = data.musics;

      renderMusic();

      if (window.YT && YT.Player) {
        createPlayer();
      }

      playlistprint();
    });
});

function onYouTubeIframeAPIReady() {
  if (musics) {
    createPlayer();
  }
}

function createPlayer() {
  if (playlist.length === 0) return;

  const music = musics.find((a) => a.id === playlist[nowmusic]);

  player = new YT.Player("player", {
    width: "480",
    height: "480",
    videoId: getYoutubeId(music.music[0]),
    playerVars: {
      autoplay: 1,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    nowmusic++;

    // 플레이리스트 끝나면 처음부터
    if (nowmusic >= playlist.length) {
      nowmusic = 0;
    }

    renderMusic();

    const music = musics.find((a) => a.id === playlist[nowmusic]);

    player.loadVideoById(getYoutubeId(music.music[0]));
  }
}

function renderMusic() {
  const music = musics.find((a) => a.id === playlist[nowmusic]);

  const lyricstool = document.querySelector(".lyricstool");

  if (music.jplyrics != "") {
    lyricstool.innerHTML = `
      <div class="lyricsbase">
      <details>
      <summary>가사 보기</summary>
      <table class="lyrics">
      ${music.jplyrics
        .map(
          (_, lyr) => `
        <tr class="lyricstext">
          <td></td>
        </tr>

        <tr class="lyricstext">
          <td colspan=${!music.jplyrics2[lyr] ? "2" : "1"}>
            ${music.jplyrics[lyr]}
          </td>
          <td>
            ${music.jplyrics2[lyr] ? music.jplyrics2[lyr] : ""}
          </td>
        </tr>

        <tr class="lyricstext">
          <td colspan=${!music.jpdlyrics2[lyr] ? "2" : "1"}>
            ${music.jpdlyrics[lyr]}
          </td>
          <td>
            ${music.jpdlyrics2[lyr] ? music.jpdlyrics2[lyr] : ""}
          </td>
        </tr>

        <tr class="lyricstext">
          <td colspan=${!music.krlyrics2[lyr] ? "2" : "1"}>
            ${music.krlyrics[lyr]}
          </td>
          <td>
            ${music.krlyrics2[lyr] ? music.krlyrics2[lyr] : ""}
          </td>
        </tr>

        <tr class="lyricstext">
          <td></td>
        </tr>
      `,
        )
        .join("")}
      </table>
      </details>
      </div>
    `;
  }
}
