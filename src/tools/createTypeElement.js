import {getExtension} from './getExtension'
import { createElement} from './createElement';
import {isIOS} from './device'

export function createTypeElement(url, attr = {}) {
  let extension = getExtension(url);
  let nodo;
  switch (extension){
    case "html":
      nodo = createElement("iframe", attr);
      nodo.src = url;
      return nodo;
    case "jpg":
    case "png":
    case "gif":
      nodo = createElement("img", attr);
      if (!isIOS) {
        nodo.src = url;
      }
      return nodo;
    // case "mp4":
    //   return createElement("mp4", attr);
  }
}