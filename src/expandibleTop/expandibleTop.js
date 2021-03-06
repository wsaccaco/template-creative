import {createElement} from '../tools/createElement';
import {createTypeElement} from '../tools/createTypeElement';
import {setClickUrl} from '../tools/setClickUrl';
import {getExtension} from '../tools/getExtension';
import {createFragment} from '../tools/createFragment'
import {Close, Button} from '../tools/Close'
import {detectIE} from '../tools/isIE';

import {
  cls_zinferiorE,
  cls_wrap,
  cls_loaded,
  cls_replegado,
  cls_container_replegado,
  cls_expandido,
  cls_item,
  cls_container_expandido,
  csl_hidden,
  cls_close,
  id_style,
  cls_overflow,
  cls_placement,
  cls_open,
  cls_link,
  cls_ie
} from './expandibleTop.css';

let pDocument = document.body.ownerDocument.defaultView.parent.document;

let localStyles = document.querySelectorAll('style.gec_appnexus');
let ListStyles = Array.prototype.slice.call(localStyles);

const CLICK_URL = '${CLICK_URL}';
const MEDIA_URL = '${MEDIA_URL}';
const RETRACT = '#{RETRACT}';
const RETRACT_SIZE = '#{RETRACT_SIZE}';
const EXPANDED = '#{EXPANDED}';
const EXPANDED_SIZE = '#{EXPANDED_SIZE}';
const EVENT_OPEN = '#{EVENT_OPEN}';
const LANDING = '#{LANDING}';

const BUTTON_CLOSE = '#{BUTTON_CLOSE}';
const BUTTON_CLOSE_SIZE = '#{BUTTON_CLOSE_SIZE}';
const BUTTON_CLOSE_POSITION = '#{BUTTON_CLOSE_POSITION}';

const BUTTON_EXPANDED = '#{BUTTON_EXPANDED}';
const BUTTON_EXPANDED_SIZE = '#{BUTTON_EXPANDED_SIZE}';
const BUTTON_EXPANDED_POSITION = '#{BUTTON_EXPANDED_POSITION}';

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
    this.withButton = getExtension(BUTTON_CLOSE);
    this.targetID = pDocument.querySelector(`#${window.apntag_targetId}`) || pDocument.body;
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
    this.copyStyles();
  }

  didMount() {
    this.handle();
    // this.$closeImage.src = BUTTON_CLOSE;
    pDocument.body.classList.add(cls_overflow);
    this.autoclose();
  }

  close(){
    // this._transitionendClose();
    this.$parentDiv.classList.add(csl_hidden);
    if(detectIE()){
      this.$parentDiv.classList.add(cls_ie);
    }
  }

  mount(){
    this.makeBase();
    this._selectores();
  }

  _selectores(){
    this.$linkClose = this.$parentDiv.querySelector(`.${cls_close}`);
    this.$linkOpen = this.$parentDiv.querySelector(`.${cls_open}`);
    this.$itemReplegado = this.$parentDiv.querySelector(`.${cls_replegado}`);
    this.$itemExpandido = this.$parentDiv.querySelector(`.${cls_expandido}`);
    this.$expandido = this.$itemExpandido.querySelector(`.${cls_container_expandido}`)

    if(this.$linkClose)
      this.$closeImage = this.$linkClose.querySelector(`img`);
  }

  _open(e) {
    e.preventDefault();
    // this._willTransition();
    this.$parentDiv.classList.remove(csl_hidden);
  }

  _close(){
    this.close();
  }

  autoclose(){
    this.idClose = setTimeout(() => {
      this.close();
    }, 8000)
  }

  handle(){

    if(EVENT_OPEN.toString() === "mouseover"){
      this.$itemExpandido.addEventListener('mouseout', this._close.bind(this), false);
    }

    // this.$itemReplegado.addEventListener(EVENT_OPEN, this._open.bind(this));

    if(this.$linkClose){
      this.$linkClose.addEventListener('click', this._close.bind(this));
    }

    this.$linkOpen.addEventListener(EVENT_OPEN, this._open.bind(this));

    this.$expandido.onload = () => {
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
      class: `${cls_wrap}`,
    });

    let [_width_retract, _height_retract] = RETRACT_SIZE.split("x");
    let [_width_expanded, _height_expanded] = EXPANDED_SIZE.split("x");

    let $mainRetract = this.mainContainer(RETRACT, cls_container_replegado, {
      width: `${_width_retract}px`,
      height: `${_height_retract}px`,
    });

    let $mainExpanded = this.mainContainer(EXPANDED, cls_container_expandido, {
      width: `${_width_expanded}px`,
      height: `${_height_expanded}px`,
    });


    let innerHTML = `
      <div style="width: ${_width_retract}px; height: ${_height_retract}px; position: relative">
        <div class='${cls_item} ${cls_replegado}'>
          ${ this._Button(BUTTON_EXPANDED, `${cls_open} ${cls_link}`, BUTTON_EXPANDED_SIZE,  BUTTON_EXPANDED_POSITION) }
          <a href='${setClickUrl(CLICK_URL, LANDING)}' class="${cls_link}" target='_blank'>
            ${$mainRetract.outerHTML}
          </a>  
        </div>
        
        <div class='${cls_item} ${cls_expandido}'>
          ${ this._Button(BUTTON_CLOSE, cls_close, BUTTON_CLOSE_SIZE,  BUTTON_CLOSE_POSITION) }
          <a href='${setClickUrl(CLICK_URL, LANDING)}' class="${cls_link}" target='_blank'>
            ${$mainExpanded.outerHTML}
          </a>  
        </div>
      </div>
    `;

    this.$parentDiv.appendChild(createFragment(innerHTML));

    this.targetID.appendChild(this.$parentDiv);
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