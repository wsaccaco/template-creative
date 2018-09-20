import {createElement} from '../tools/createElement';
import {createTypeElement} from '../tools/createTypeElement';
import {setClickUrl} from '../tools/setClickUrl';
import {getExtension} from '../tools/getExtension';
import {createFragment} from '../tools/createFragment'

import {
  cls_wrap,
  cls_loaded,
  cls_container_media,
  cls_item,
  cls_close,
  id_style,
  cls_placement,
  cls_link
} from './principal.css';


let pDocument = document.body.ownerDocument.defaultView.parent.document;

let localStyles = document.querySelectorAll('style.gec_appnexus');
let ListStyles = Array.prototype.slice.call(localStyles);

const CLICK_URL = '${CLICK_URL}';
const MEDIA_URL = '${MEDIA_URL}';
const MEDIA = '#{MEDIA}';
const LANDING = '#{LANDING}';


console.log(MEDIA_URL);

function destroyTargetId() {
  if (window.apntag_targetId) {
    let targetID = pDocument.querySelector(`#${window.apntag_targetId}`);
    if (targetID) {
      targetID.setAttribute("data-running", name);
      targetID.innerHTML = '';
    }else{
      console.warn("no se encontro el targetID")
    }
  }
}

function removeStyles() {
  let parentStyles = pDocument.querySelectorAll(`.${id_style}`);
  let ListParentStyles = Array.prototype.slice.call(parentStyles);

  ListParentStyles.forEach(parentStyle => {
    parentStyle.remove();
  });
}


class Ads {
  constructor(props) {
    this.targetID = pDocument.querySelector(`#${window.apntag_targetId}`) || pDocument.body;
    this.$frameElement = window.frameElement;
    this.width = `${pDocument.documentElement.clientWidth}px`;
    this.height = this.width;
    this.init();
  }

  init() {
    this.willMount();
    this.mount();
    this.didMount();
  }

  willMount() {
    this.targetID.classList.add(cls_placement);
    this.unmountIfExists();
    this._sizeFrame();
  }

  didMount() {
    this.handle();
  }


  mount(){
    this.makeBase();
    this._selectores();
  }

  _selectores(){
    this.$mainMedia = document.querySelector(`.${cls_container_media}`);
  }

  _sizeFrame(){
    if(this.$frameElement){
      this.$frameElement.setAttribute("width", this.width);
      this.$frameElement.setAttribute("height", this.height)
    }
  }

  handle(){
    this.$mainMedia.onload = () => {
      this.$parentDiv.classList.add(cls_loaded)
    }
  }

  mainContainer(landing, classname = '', style = {}, onLoad = () => {}) {
    let mainContainer = createTypeElement(landing, {
      scrolling: 'no', class: `${classname}`
    });
    Object.assign(mainContainer.style, style);
    mainContainer.onload = () => onLoad(mainContainer);
    return mainContainer;
  }

  _Button(urlIcon, className, size, position){
    return getExtension(urlIcon)
      ? Close(urlIcon, className, size,  position)
      : ''
  }

  makeBase() {
    this.$parentDiv = createElement('div', {
      id: `content_${window.apntag_targetId}`,
      class: `${cls_wrap}`
    });

    let $mainMedia = this.mainContainer(MEDIA, cls_container_media, {
      width: this.width,
      height: this.height
    });

    let innerHTML = `
      <div class='${cls_item}'>
        <a href='${setClickUrl(CLICK_URL, LANDING)}' class="${cls_link}" target='_blank'>
          ${$mainMedia.outerHTML}
        </a>  
      </div>
    `;

    this.$parentDiv.appendChild(createFragment(innerHTML));

    document.body.appendChild(this.$parentDiv);
  }

  unmountIfExists(){
    let contentAds =  pDocument.querySelector(`#content_${window.apntag_targetId}`);
    let targetID = pDocument.querySelector(`#${window.apntag_targetId}`);
    if(!contentAds) return false;
    contentAds.remove();
    removeStyles();
    targetID.removeAttribute("data-running");
  }

  copyStyles() {
    ListStyles.forEach(style => {
      style.classList.add(id_style);
      pDocument.head.appendChild(style);
    });
  }

}

new Ads();

