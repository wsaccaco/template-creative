import {createElement} from '../tools/createElement';
import {createTypeElement} from '../tools/createTypeElement';
import {setClickUrl} from '../tools/setClickUrl';
import {getExtension} from '../tools/getExtension';
import {createFragment} from '../tools/createFragment'
import {
  ads_agrandado,
  ads_parent,
  close,
  left_top,
  right_top,
  left_bottom,
  right_bottom,
  link_close,
  animation_close,
  id_style,
  hidden,
  id_container,
  cls_loaded
} from './zAgrandado.css';

let pDocument = document.body.ownerDocument.defaultView.parent.document;

let localStyles = document.querySelectorAll('style.gec_appnexus');
let ListStyles = Array.prototype.slice.call(localStyles);

const CLICK_URL = '${CLICK_URL}';
const MEDIA_URL = '${MEDIA_URL}';
const IMAGE = '#{IMAGE}';
const BUTTON_CLOSE = '#{BUTTON_CLOSE}';
const BUTTON_CLOSE_POSITION = '#{BUTTON_CLOSE_POSITION}';

function getPositionButtom(_position) {
  let position;
  switch (_position) {
    case 'left_top':
      position = left_top;
      break;
    case 'right_top':
      position = right_top;
      break;
    case 'left_bottom':
      position = left_bottom;
      break;
    case 'right_bottom':
      position = right_bottom;
      break;
  }
  return position;
}

function destroyTargetId() {
  if (window.apntag_targetId) {
    let targetID = pDocument.querySelector(`#${window.apntag_targetId}`);
    console.log({targetID})
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
    this.withButton = getExtension(BUTTON_CLOSE);
    this.init();
  }

  init() {
    this.willMount();
    this.mount();
    this.didMount();
  }

  willMount() {
    this.unmountIfExists();
    this.copyStyles();
  }

  didMount() {
    this.$mainContainer.src = IMAGE;

    this.handle();
    destroyTargetId();
  }

  mount(){
    this.makeBase();
    this._selectores();
  }

  _selectores(){
    this.$linkClose = this.$parentDiv.querySelector(`.${close}`);
    if(this.$linkClose){
      this.$closeImage = this.$linkClose.querySelector("img");
      this.$closeImage.src = BUTTON_CLOSE;
    }
    this.$mainContainer = this.$parentDiv.querySelector(`.${id_container}`);
  }

  __unmount(e) {
    e.preventDefault();
    this.$parentDiv.classList.add(animation_close);
    this.$parentDiv.addEventListener('transitionend', this._transitionend.bind(this));
  }

  _transitionend(e) {
    this.$linkClose.removeEventListener('click', this.__unmount);
    this.$parentDiv.removeEventListener('transitionend', this._transitionend);
    this.$parentDiv.remove();
    this.unmountIfExists();
  }

  handle(){
    this.$linkClose.addEventListener('click', this.__unmount.bind(this));
    this.$mainContainer.onload = () => {
      this.$parentDiv.classList.add(cls_loaded)
    }
  }

  mainContainer(){
    let mainContainer = createTypeElement(IMAGE, {scrolling: 'no', class: id_container});
    Object.assign(mainContainer.style, {
      width: `300px`,
      height: `300px`,
      pointerEvents: 'none',
    });
    return mainContainer;
  }

  makeBase() {
    this.$parentDiv = createElement('div', {
      id: `content_${window.apntag_targetId}`,
      class: ads_parent,
    });

    let $mainContainer = this.mainContainer();

    let innerHTML = `
        <div class='${ads_agrandado}' style='max-width: 300px; max-height: 300px'>
          ${this.withButton ? this.makeButtonClose() : null}
          <a href='${setClickUrl(CLICK_URL, MEDIA_URL)}' style="display: flex" target='_blank'>
            ${$mainContainer.outerHTML}
          </a>
        </div>
    `;

    this.$parentDiv.appendChild(createFragment(innerHTML));

    pDocument.body.appendChild(this.$parentDiv);
  }

  makeButtonClose(){
    return `
        <button class='${close} ${getPositionButtom(BUTTON_CLOSE_POSITION)}'>
            <img />
        </button>
    `;
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