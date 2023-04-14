function expandVideo()
{
  let video = null;
  {
    let player = document.getElementById("player");
    if (player) {
      let iframe = player.getElementsByTagName("iframe");
      if (iframe.length != 0) {
        video = iframe[0];
      }
    }
  }
  if (video == null)
    return;

  document.body.insertBefore(video, document.body.childNodes[0]);
  video.removeAttribute("width");
  video.removeAttribute("height");
  video.removeAttribute("marginheight");
  video.removeAttribute("marginwidth");
  video.removeAttribute("allowfullscreen");
  //video.removeAttribute("scrolling");
  video.style.width = "100%";
  video.style.height = "100vh";
  scroll(0, 0);
}

expandVideo();
