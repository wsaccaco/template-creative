import {createElement} from '../tools/createElement';
import {createTypeElement} from '../tools/createTypeElement';
import {toPixel} from '../tools/toPixel'
import {setClickUrl} from '../tools/setClickUrl';
import {createFragment} from '../tools/createFragment';
import {Close} from '../tools/Close';
import {
  cls_idcontainer,
  cls_wrap,
  cls_open,
  cls_zInferior,
  cls_close,

  id_style
} from './zInferior.css';
import {animation_close} from '../zAgrandado/zAgrandado.css';


let name   = "zInferior";
let pWindow = document.body.ownerDocument.defaultView.parent;
let pDocument = pWindow.document;

let styles = document.querySelectorAll("style");
let ListStyles = Array.prototype.slice.call(styles);

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

const CLICK_URL = '${CLICK_URL}';
const MEDIA_URL = '${MEDIA_URL}';
const CREATIVE_WIDTH = '${CREATIVE_WIDTH}';
const CREATIVE_HEIGHT = '${CREATIVE_HEIGHT}';
const CREATIVE = '#{CREATIVE}';
const CREATIVE_SIZE = '#{CREATIVE_SIZE}';
const BUTTON_CLOSE = '#{BUTTON_CLOSE}';
const BUTTON_CLOSE_SIZE = '#{BUTTON_CLOSE_SIZE}';
const BUTTON_CLOSE_POSITION = '#{BUTTON_CLOSE_POSITION}';


class Ads {
  constructor(props) {
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
    this.$mainContainer.src = CREATIVE;

    this.handle();
    // destroyTargetId();
  }

  mount(){
    this.makeBase();
    this._selectores();
  }

  _selectores(){
    this.$mainContainer = this.$parentDiv.querySelector(`.${cls_idcontainer}`);
    this.$linkClose = this.$parentDiv.querySelector(`.${cls_close}`);
  }

  _transitionend(e) {
    this.$linkClose.removeEventListener('click', this.__unmount);
    this.$parentDiv.removeEventListener('transitionend', this._transitionend);
    this.$parentDiv.remove();
    this.unmountIfExists();
  }

  __unmount(e) {
    e.preventDefault();
    this.$parentDiv.classList.remove(cls_open);
    this.$parentDiv.addEventListener('transitionend', this._transitionend.bind(this));
  }

  handle(){
    this.$mainContainer.onload = () => {
      this.$parentDiv.classList.add(cls_open)
    };

    this.$linkClose.addEventListener('click', this.__unmount.bind(this));

  }

  mainContainer(_CREATIVE, style){
    return  createTypeElement(_CREATIVE, {
      scrolling: 'no',
      class: cls_idcontainer,
      style: style
    });
  }

  makeBase() {
    this.$parentDiv = createElement('div', {
      id: `content_${window.apntag_targetId}`,
      class: cls_wrap,
    });

    let [width, height] = toPixel(CREATIVE_SIZE);

    let $mainContainer = this.mainContainer(CREATIVE, {
      width,
      height
    });

    console.log($mainContainer)

    let innerHTML = `
        <div class='${cls_zInferior}'>
          ${Close(BUTTON_CLOSE, cls_close, BUTTON_CLOSE_SIZE,  BUTTON_CLOSE_POSITION)}
          <a href='${setClickUrl(CLICK_URL, MEDIA_URL)}' style="display: flex; " target='_blank'>
            ${$mainContainer.outerHTML}
          </a>
        </div>
    `;

    this.$parentDiv.appendChild(createFragment(innerHTML));

    pDocument.body.appendChild(this.$parentDiv);
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
