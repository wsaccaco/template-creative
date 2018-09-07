export function getExtension(url){
  try {
    const [file] = url.split("/").reverse();
    const split = file.split('.');
    if (split.length >= 2) {
      const [extension] = split.reverse();
      return extension;
    }else{
      return false;
    }


  }catch (e) {
    console.error("GEC001 :", e)
  }
}