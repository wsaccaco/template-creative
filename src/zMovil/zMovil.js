import {createElement} from '../tools/createElement';
import {createTypeElement} from '../tools/createTypeElement';

import {setClickUrl} from '../tools/setClickUrl';

import {
  ads_movil,
  ads_parent,
  id_style,
  ads_open,
  link
} from './zMovil.css';

let name = "zMovil";
let pWindow = document.body.ownerDocument.defaultView.parent;
let pDocument = pWindow.document;

let styles = document.querySelectorAll("style");
let ListStyles = Array.prototype.slice.call(styles);


function unmountIfExists(){
  let contentAds =  document.querySelector(`#content_${window.apntag_targetId}`);
  let targetID = pDocument.querySelector(`#${window.apntag_targetId}`);
  if(!contentAds) return false;
  contentAds.remove();
  removeStyles();
  targetID.removeAttribute("data-running");
}

unmountIfExists();

function removeStyles() {
  let parentStyles = pDocument.querySelectorAll(`.${id_style}`);
  let ListParentStyles = Array.prototype.slice.call(parentStyles);

  ListParentStyles.forEach(parentStyle => {
    parentStyle.remove();
  });
}

function destroyTargetId(){
  if(window.apntag_targetId){
    let targetID = pDocument.querySelector(`#${window.apntag_targetId}`);
    targetID.setAttribute("data-running", name);
    targetID.innerHTML = '';
  }
}

(() => {
  const CLICK_URL = '${CLICK_URL}';
  const MEDIA_URL = '${MEDIA_URL}';
  const CREATIVE_WIDTH = '${CREATIVE_WIDTH}';
  const CREATIVE_HEIGHT = '${CREATIVE_HEIGHT}';
  const IMAGE_SMALL = '#{IMAGE_SMALL}';
  const IMAGE_LARGE = '#{IMAGE_LARGE}';

  const IMAGE = pWindow.innerWidth <= 360 ? IMAGE_SMALL : IMAGE_LARGE;

  ListStyles.forEach( style => {
    style.classList.add(id_style);
    pDocument.head.appendChild(style);
  });

  let parentDiv = createElement('div', {
    id: `content_${window.apntag_targetId}`,
    class: ads_parent
  });


  let linkLanding = createElement("a", {
    href: setClickUrl(CLICK_URL, MEDIA_URL),
    target: '_blank',
    class: link,
    style: {
      width: '100%',
      maxWidth: `414px`
    }
  });

  parentDiv.appendChild(linkLanding);


  let wrap = createElement("div", {
    class: ads_movil
  });

  linkLanding.appendChild(wrap);

  Object.assign(wrap.style, {
    maxWidth: `100%`,
    maxHeight: `65px`,
    width: '100%'
  });

  let mainContainer = createTypeElement(IMAGE, {scrolling: 'no'});

  Object.assign(mainContainer.style, {
    width: `100%`,
    height: `auto`,
    maxHeight: '65',
    pointerEvents : 'none',
    display: 'flex'
  });

  mainContainer.onload = () => {
    parentDiv.classList.add(ads_open);
  };

  wrap.appendChild(mainContainer);

  pDocument.body.appendChild(parentDiv);

  setTimeout(()=>{
    mainContainer.src = IMAGE;
    destroyTargetId();
  });

})();
