export function setClickUrl(CLICK_URL, MEDIA_URL){
  let [urlTracker] = CLICK_URL.split("clickenc");
  return urlTracker.concat("clickenc=", encodeURIComponent(MEDIA_URL));
}

export function openWindow(CLICK_URL, MEDIA_URL){
  window.open(setClickUrl(CLICK_URL, MEDIA_URL))
}
