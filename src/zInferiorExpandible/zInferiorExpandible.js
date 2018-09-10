import {createElement} from '../tools/createElement';
import {createTypeElement} from '../tools/createTypeElement';
import {setClickUrl} from '../tools/setClickUrl';
import {getExtension} from '../tools/getExtension';
import {createFragment} from '../tools/createFragment'
import {
  cls_zinferiorE,
  cls_wrap,
  cls_loaded,
  cls_replegado,
  cls_container_replegado,
  cls_expandido,
  cls_item,
  cls_container_expandido,
  csl_hidde,
  cls_close,
  id_style
} from './zInferiorExpandible.css';
import {cls_link, id_container} from '../TomaCanal/TomaCanal.css';

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
    this.handle();
    this.$closeImage.src = BUTTON_CLOSE;
    this.autoclose();
    // destroyTargetId();
  }

  close(){
    this.$itemExpandido.classList.add(csl_hidde)
  }

  autoclose(){
    this.idClose = setTimeout(() => {
      console.log(this.$itemExpandido);
      this.close();
    }, 8000)
  }

  mount(){
    this.makeBase();
    this._selectores();
  }

  _selectores(){
    this.$linkClose = this.$parentDiv.querySelector(`.${cls_close}`);
    this.$closeImage = this.$linkClose.querySelector(`img`);
    this.$itemReplegado = this.$parentDiv.querySelector(`.${cls_replegado}`);
    this.$itemExpandido = this.$parentDiv.querySelector(`.${cls_expandido}`);
    this.$expandido = this.$itemExpandido.querySelector(`.${cls_container_expandido}`)
  }

  expanded(e) {
    e.preventDefault();
    this.$itemExpandido.classList.remove(csl_hidde);
    this.autoclose();
  }

  _close(){
    clearInterval(this.idClose);
    this.close();
  }

  handle(){
    this.$itemReplegado.addEventListener(EVENT_OPEN, this.expanded.bind(this));
    this.$linkClose.addEventListener('click', this._close.bind(this));
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

  makeBase() {
    this.$parentDiv = createElement('div', {
      id: `content_${window.apntag_targetId}`,
      class: cls_wrap,
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
      <div style="width: ${_width_retract}px; height: ${_height_retract}px">
        <div class='${cls_item} ${cls_replegado}'>
            ${$mainRetract.outerHTML}
        </div>
        <div class='${cls_item} ${cls_expandido}'>
        ${this.withButton ? this.makeButtonClose() : ''}
        <a href='${setClickUrl(CLICK_URL, LANDING)}' class="${cls_link}" target='_blank'>
          ${$mainExpanded.outerHTML}
        </a>  
        </div>
      </div>
    `;

    this.$parentDiv.appendChild(createFragment(innerHTML));

    pDocument.body.appendChild(this.$parentDiv);
  }

  makeButtonClose(){
    let [_width, _height] = BUTTON_CLOSE_SIZE.split("x");
    let [top, right] = BUTTON_CLOSE_POSITION.split("x");
    return `
        <a class='${cls_close}' style="top: ${top.concat('px')}; right: ${right.concat('px')}">
            <img style="width: ${_width.concat('px')}; height: ${_height.concat('px')}" />
        </a>
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