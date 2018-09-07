export  function createFragment( str ) {
  let frag = document.createDocumentFragment();

  let elem = document.createElement('div');
  elem.innerHTML = str;

  while (elem.childNodes[0]) {
    frag.appendChild(elem.childNodes[0]);
  }
  return frag;
}