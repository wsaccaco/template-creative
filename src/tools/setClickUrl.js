export function setClickUrl(CLICK_URL, MEDIA_URL){
  let [urlTracker] = CLICK_URL.split("clickenc");
  return urlTracker.concat("clickenc=", encodeURIComponent(MEDIA_URL));
}