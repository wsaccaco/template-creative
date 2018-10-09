import {createElement} from '../tools/createElement';
import {createTypeElement} from '../tools/createTypeElement';
import {setClickUrl} from '../tools/setClickUrl';
import {getExtension} from '../tools/getExtension';
import {createFragment} from '../tools/createFragment';
import {Close} from '../tools/Close';
import {toPixel} from '../tools/toPixel';
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
  pointer_disable,
  cls_piece,
  transition,
  animate,
  patch
} from './folding.css';
import {cls_link, id_container} from '../TomaCanal/TomaCanal.css';

let pDocument = document.body.ownerDocument.defaultView.parent.document;

let localStyles = document.querySelectorAll('style.gec_appnexus');
let ListStyles = Array.prototype.slice.call(localStyles);

const CLICK_URL = '${CLICK_URL}';
const MEDIA_URL = '${MEDIA_URL}';
const RETRACT = '#{RETRACT}';
const RETRACT_SIZE = '#{RETRACT_SIZE}';

const LANDING = '#{LANDING}';

const PIECE1 = '#{PIECE1}';
const PIECE2 = '#{PIECE2}';
const PIECE3 = '#{PIECE3}';
const PIECE4 = '#{PIECE4}';
const PIECE5 = '#{PIECE5}';
const PIECE6 = '#{PIECE6}';

const PIECE_TOP_SIZE = '#{PIECE_TOP_SIZE}';
const PIECE_BOTTOM_SIZE = '#{PIECE_BOTTOM_SIZE}';

const BUTTON_CLOSE = '#{BUTTON_CLOSE}';
const BUTTON_CLOSE_SIZE = '#{BUTTON_CLOSE_SIZE}';
const BUTTON_CLOSE_POSITION = '#{BUTTON_CLOSE_POSITION}';

console.log(MEDIA_URL);

function destroyTargetId() {
  if (window.apntag_targetId) {
    let targetID = pDocument.querySelector(`#${window.apntag_targetId}`);
    if (targetID) {
      targetID.setAttribute('data-running', name);
      targetID.innerHTML = '';
    } else {
      console.warn('no se encontro el targetID');
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
    this.$frameElement = window.frameElement;
    this.targetID = pDocument.querySelector(`#${window.apntag_targetId}`) ||
      pDocument.body;

    let size_top = toPixel(PIECE_TOP_SIZE, 'object');
    let size_bottom = toPixel(PIECE_BOTTOM_SIZE, 'object');
    this.pieces = [
      Object.assign({}, size_top, {
        piece: PIECE3,
      }),
      Object.assign({}, size_top, {
        piece: PIECE2,
      }),
      Object.assign({}, size_top, {
        piece: PIECE1,
      }),
      Object.assign({}, size_bottom, {
        piece: PIECE4,
      }),
      Object.assign({}, size_bottom, {
        piece: PIECE5,
      }),
      Object.assign({}, size_bottom, {
        piece: PIECE6,
      })];

    this.init();
  }

  init() {
    this.willMount();
    this.mount();
    this.didMount();
  }

  _hiddeFrame() {
    if (this.$frameElement) {
      this.$frameElement.setAttribute('width', 0);
      this.$frameElement.setAttribute('height', 0);
    }
  }

  willMount() {
    this.targetID.classList.add(cls_placement);
    this.unmountIfExists();
    this._hiddeFrame();
    this.copyStyles();
  }

  didMount() {
    this.handle();
    // this.$closeImage.src = BUTTON_CLOSE;
    pDocument.body.classList.add(cls_overflow);
    // destroyTargetId();
  }

  _hidde() {
    this.$parentDiv.classList.add(csl_hidden);
  }

  mount() {
    this.makeBase();
    this._selectores();
  }

  _selectores() {
    this.$linkClose = this.$parentDiv.querySelector(`.${cls_close}`);
    if (this.$linkClose)
      this.$closeImage = this.$linkClose.querySelector(`img`);
    this.$itemReplegado = this.$parentDiv.querySelector(`.${cls_replegado}`);
    this.$itemExpandido = this.$parentDiv.querySelector(`.${cls_expandido}`);
    this.$replegado = this.$itemReplegado.querySelector(
      `.${cls_container_replegado}`);
    this.$expandido = this.$itemExpandido.querySelector(`.${cls_container_expandido}`);
    let tmp = [].slice.call(this.$itemExpandido.querySelectorAll(`.${cls_piece}`));
    this.$pieces = [...tmp.splice(0, 3).reverse(), ...tmp];
  }

  _open(e) {
    e.preventDefault();
    this._autoclose();
    this.$parentDiv.classList.remove(csl_hidden);
    this.$itemReplegado.classList.add(pointer_disable);
    this._animateOpen();
  }

  _autoclose(){
    this.idClose = setTimeout(() => {
      this._close();
    }, 8000)
  }

  _animateOpen(){

    let __transitionend = ()=>{
      this.$expandido.classList.add(patch);
      this.$expandido.removeEventListener('transitionend', __transitionend);
    };

    this.$pieces.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add(transition);
        item.classList.add(animate);
        if (index === this.$pieces.length - 1) {
          this.$expandido.addEventListener('transitionend', __transitionend);
        }
      }, 200 * index)
    })
  }

  _animateClose(){

    let _transitionClose = () => {
      this.$expandido.removeEventListener("transitionend", _transitionClose)
      this.$expandido.classList.remove(patch);
      this._hidde();
    };

    let _animatePieceClose = (e) => {
      e.target.removeEventListener("transitionend", _animatePieceClose);
      e.target.classList.remove(transition);
    };

    let pieces = [...this.$pieces];
    pieces.reverse();
    pieces.forEach((item, index) => {
      setTimeout(() => {
        item.classList.remove(animate);
        item.addEventListener("transitionend", _animatePieceClose);

        if (index === pieces.length - 1) {
          this.$expandido.addEventListener('transitionend', _transitionClose);
        }

      }, 200 * index)
    })
  }

  _close() {
    clearInterval(this.idClose);
    this._animateClose();
  }

  _handleTransition(){

    let _didTransition = (e) => {
      if(e.propertyName.indexOf("transform") >= 0 && this.$parentDiv.classList.contains(csl_hidden)){
        this.$itemReplegado.classList.remove(pointer_disable);
      }
    };

    this.$itemReplegado.addEventListener("transitionend", _didTransition, false)
  }

  handle() {

    this.$itemReplegado.addEventListener('mouseover', this._open.bind(this));
    this._handleTransition();

    if (this.$linkClose) {
      this.$linkClose.addEventListener('click', this._close.bind(this));
    }

    this.$replegado.onload = () => {
      this.$parentDiv.classList.add(cls_loaded);
    };
  }

  mainContainer(landing, classname = '', style = {}, onLoad = () => {}) {
    let mainContainer = createTypeElement(landing, {
      scrolling: 'no', class: `${classname}`,
    });

    Object.assign(mainContainer.style, style);
    mainContainer.onload = () => onLoad(mainContainer);
    return mainContainer;
  }

  expandedContainer(pieces, classname = '', style = {}, onLoad = () => {}) {

    let divParent = createElement('div', {
      class: classname
    });

    pieces.map(({piece, width, height}) => {

      divParent.appendChild(createTypeElement(piece, {
        scrolling: 'no',
        class: `${cls_piece}`,
        style: { width, height }
      }));
    });

    Object.assign(divParent.style, style);
    divParent.onload = () => onLoad(divParent);
    return divParent;
  }

  makeBase() {
    this.$parentDiv = createElement('div', {
      id: `content_${window.apntag_targetId}`,
      class: `${cls_wrap} ${csl_hidden}`,
    });

    let [_width_retract, _height_retract] = RETRACT_SIZE.split('x');
    let [t_size_w, t_size_h] = toPixel(PIECE_TOP_SIZE, 'number');
    let [b_size_w, b_size_h] = toPixel(PIECE_BOTTOM_SIZE, 'number');

    let [_width_expanded, _height_expanded] = [t_size_w * 3, t_size_h + b_size_h];

    let $mainRetract = this.mainContainer(RETRACT, cls_container_replegado, {
      width: `${_width_retract}px`,
      height: `${_height_retract}px`,
    });

    let $mainExpanded = this.expandedContainer(this.pieces,
      cls_container_expandido, {
        width: `${_width_expanded}px`,
        height: `${_height_expanded}px`,
      });

    let innerHTML = `
      <div style="width: ${_width_retract}px; height: ${_height_retract}px">
        <div class='${cls_item} ${cls_replegado}'>
            ${$mainRetract.outerHTML}
        </div>
        <div class='${cls_item} ${cls_expandido}'>
        
        ${ getExtension(BUTTON_CLOSE)
          ? Close(BUTTON_CLOSE, cls_close, BUTTON_CLOSE_SIZE, BUTTON_CLOSE_POSITION)
          : ''}
        <a href='${setClickUrl(CLICK_URL, LANDING)}' class="${cls_link}" target='_blank'>
          ${$mainExpanded.outerHTML}
        </a>  
        </div>
      </div>
    `;

    this.$parentDiv.appendChild(createFragment(innerHTML));

    this.targetID.appendChild(this.$parentDiv);
  }


  unmountIfExists() {
    let contentAds = pDocument.querySelector(
      `#content_${window.apntag_targetId}`);
    let targetID = pDocument.querySelector(`#${window.apntag_targetId}`);
    if (!contentAds) return false;
    contentAds.remove();
    removeStyles();
    this.targetID.classList.remove(cls_placement);
    targetID.removeAttribute('data-running');
  }

  copyStyles() {
    ListStyles.forEach(style => {
      style.classList.add(id_style);
      pDocument.head.appendChild(style);
    });
  }

}

new Ads();