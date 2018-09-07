const UA = window.navigator.userAgent;

export const isIOS = (() =>{
  return /iPhone|iPad|iPod/i.test(UA);
})();


export const isAndroid = (() =>{
  return /Android/i.test(UA);
})();
