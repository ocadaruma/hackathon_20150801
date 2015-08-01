// YoutubeのJSファイルをロードします。
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// YoutubeのJSファイルがロードされ実行されると、
// onYouTubeIframeAPIReadyメソッドが呼ばれるので、
// 再生準備を行います。
var player;
function onYouTubeIframeAPIReady() {
  // "player"という文字列は、divのID属性の値を指定します。
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'UNjHxhljAck',
    events: {
      'onReady': onPlayerReady
    }
  });
}

// 再生が可能になると呼び出されます。
function onPlayerReady(event) {
  // 再生を開始します。
  event.target.playVideo();
}


