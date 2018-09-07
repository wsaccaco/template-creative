import {isIOS} from './device';

export function createElement(node, attrs = {}, content){
  let tmpNode = document.createElement(node);
  if(isIOS && node === "img"){
    tmpNode = new Image();
  }
  for (let key in attrs) {
    tmpNode.setAttribute(key, attrs[key]);
    if(key === 'style'){
      Object.assign(tmpNode.style, attrs[key])
    }
  }
  if(content)
    tmpNode.appendChild(content)
  return tmpNode;
}