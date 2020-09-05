$(document).ready(function () {
  const _scrollValue = 2500;
  const _video = [
    { name: "金瓜石音樂會", url: "zT3fWaDvhL4" },
    { name: "在與不在的場所", url: "ZAwqalcasys" },
    { name: "過往與今日的交陪", url: "0WXTyNdsNJ4" },
    { name: "沈睡在礦石01", url: "B3M-QTK8tXM" },
    { name: "沈睡在礦石02", url: "gIJSeqSwUs0" },
    { name: "沈睡在礦石03", url: "BPtFa4TsxSg" },
    { name: "九芎樹", url: "XoLe8Gwznhw" }
  ];
  const _music = [
    { name: "untitled", url: "media/untitled.mp3" },
    { name: "山吼", url: "media/roar.mp3" },
    { name: "礦山流動意象", url: "media/flow.mp3" },
    { name: "黃金河", url: "media/goldenriver.mp3" }
  ];
  const _voice = [
    { name: "九芎樹", url: "media/tree.mp3" },
    { name: "沈睡的礦石01", url: "media/sleep-1.mp3" },
    { name: "沈睡的礦石02", url: "media/sleep-2.mp3" },
    { name: "沈睡的礦石03", url: "media/sleep-3.mp3" },
    { name: "物的記憶：鐵軌", url: "media/rail.mp3" }
  ];

  var player;
  var music;
  var voice;

  $(window).scroll(function (event) {
    const scroll = $(window).scrollTop();
    if ( scroll > .9*_scrollValue && scroll < .95*_scrollValue ){
    }

    else{
      player.stopVideo();
      if(music){
        music.pause();
      }
      if(voice){
        voice.pause();
      }
    }
});
  onYouTubeIframeAPIReady();
  const $main_btn = $('.main li');
  function bindEvent(){
    console.log(player);
    $main_btn.click(function () {
      const _type = $(this).attr('data-type');
      const _key = $(this).attr('data-key');
      switch (_type) {
        case "video":
          player.loadVideoById(_video[_key].url);
          break;
      }
    });
  }

  $main_btn.click(function () {
    const _type = $(this).attr('data-type');
    const _key = $(this).attr('data-key');
    switch (_type) {
      case "music":
        if(music){
          music.pause();
        }
        music = new Audio(_music[_key].url);
        music.play();
        break;
      case "voice":
        if(voice){
          voice.pause();
        }
        voice = new Audio(_voice[_key].url);
        voice.play();
        break;
    }
  });

  function onYouTubeIframeAPIReady() {
    window.YT.ready(function() {
      player = new YT.Player('YouTubeVideoPlayerAPI', {
        width: '100%',            // 播放器寬度 (px)
        height: '100%',           // 播放器高度 (px)
        playerVars: {
          autoplay: 1,            // 自動播放影片
          controls: 0,            // 顯示播放器
          showinfo: 0,            // 隱藏影片標題
          modestbranding: 0,      // 隱藏YouTube Logo
          fs: 0,                  // 隱藏全螢幕按鈕
          cc_load_policty: 0,     // 隱藏字幕
          iv_load_policy: 3,      // 隱藏影片註解
          rel: 0,                 // 隱藏推薦
          autohide: 0             // 影片播放時，隱藏影片控制列
        },
        events: {
          onReady: bindEvent
        }
      });
    });
  };
});




const _music = [];
const _voice = [];
