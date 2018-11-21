/*
  Comportamiento:
  - Muestra banners en el top, y en los dos zocalos, los dos zocalos son fix
  - si existe la etiqueta main en la web se inserta dentro, sino solo dentro del body
    - si los banner se insertan en el main, los zocalos estan pegados al contenido de la web (lo esperado)
    - si los banner se insertan en el body, los zocalos estaran pegados a los laterales.

 */
import {createElement} from '../tools/createElement';
import {createTypeElement} from '../tools/createTypeElement';
import {setClickUrl} from '../tools/setClickUrl';
import {getExtension} from '../tools/getExtension';
import {stringToHtml} from '../tools/stringToHtml';

import {
  id_style,
  id_container,

  cls_toma_canal,
  cls_right,
  cls_left,
  cls_top,
  cls_loaded,
  cls_link,
  cls_tc,
  cls_wrap_link,
  cls_fly,
  cls_ie
} from './TomaCanal.css';
import {detectIE} from '../tools/isIE';

let pDocument = document.body.ownerDocument.defaultView.parent.document;

let localStyles = document.querySelectorAll('style.gec_appnexus');
let ListStyles = Array.prototype.slice.call(localStyles);

const CLICK_URL = '${CLICK_URL}';
const MEDIA_URL = '${MEDIA_URL}';
const CREATIVE_WIDTH = '${CREATIVE_WIDTH}';
const CREATIVE_HEIGHT = '${CREATIVE_HEIGHT}';
const LANDING_PAGE_URL_LEFT = '#{LANDING_PAGE_URL_LEFT}';
const LANDING_PAGE_URL_TOP = '#{LANDING_PAGE_URL_TOP}';
const LANDING_PAGE_URL_RIGHT = '#{LANDING_PAGE_URL_RIGHT}';
const MEDIA_URL_LEFT = '#{MEDIA_URL_LEFT}';
const MEDIA_URL_TOP = '#{MEDIA_URL_TOP}';
const MEDIA_URL_RIGHT = '#{MEDIA_URL_RIGHT}';
const MEDIA_SIZE_LEFT = '#{MEDIA_SIZE_LEFT}';
const MEDIA_SIZE_TOP = '#{MEDIA_SIZE_TOP}';
const MEDIA_SIZE_RIGHT = '#{MEDIA_SIZE_RIGHT}';

console.log(MEDIA_URL);

function resizeTargetID(width, height) {
  if (window.apntag_targetId) {
    let targetID = pDocument.querySelector(`#${window.apntag_targetId}`);
    if (targetID) {
      targetID.setAttribute('data-running', name);
      let $iframe = targetID.querySelector('iframe');
      $iframe.setAttribute('width', `${width}px`);
      $iframe.setAttribute('height', `${height}px`);
    } else {
      console.warn('no se encontro el targetID');
    }
  }
}

function removeParentStyles() {
  let parentStyles = pDocument.querySelectorAll(`.${id_style}`);
  let ListParentStyles = Array.prototype.slice.call(parentStyles);

  ListParentStyles.forEach(parentStyle => {
    parentStyle.remove();
  });
}

class Ads {
  constructor(props) {

    let [left_width, left_height] = MEDIA_SIZE_LEFT.split('x');
    let [top_width, top_height] = MEDIA_SIZE_TOP.split('x');
    let [right_width, right_height] = MEDIA_SIZE_RIGHT.split('x');

    this.sides = [
      {
        side: 'left',
        height: left_height || 0,
        width: left_width || 0,
        landing: LANDING_PAGE_URL_LEFT,
        media: MEDIA_URL_LEFT,
      }, {
        side: 'top',
        height: top_height || 0,
        width: top_width || 0,
        landing: LANDING_PAGE_URL_TOP,
        media: MEDIA_URL_TOP,
      }, {
        side: 'right',
        height: right_height || 0,
        width: right_width || 0,
        landing: LANDING_PAGE_URL_RIGHT,
        media: MEDIA_URL_RIGHT,
      }];

    this.init();
  }

  init() {
    this.willMount();
    this.mount();
    this.didMount();
  }

  willMount() {
    pDocument.body.classList.add('tc');
    pDocument.body.classList.add(cls_tc);

    resizeTargetID(CREATIVE_WIDTH, CREATIVE_HEIGHT);
    this.unmountIfExists();
    this.copyStyles();
  }

  didMount() {
    this.handle();
  }

  __scrollable(top_height){
    return () => {
      let _TopY = window.frameElement.getBoundingClientRect().top;
      return _TopY + +top_height <  +top_height/2;
    }
  }

  handle(){
    let [top_width, top_height] = MEDIA_SIZE_TOP.split('x');
    let _scrollable = this.__scrollable(top_height);
    pDocument.addEventListener("scroll", () => {
      let r = _scrollable();
      if(r){
        pDocument.body.classList.add(cls_fly);
      }else{
        pDocument.body.classList.remove(cls_fly);
      }
    });
  }

  mount() {
    this.makeBase();
  }

  mainContainer(landing, style = {}, onLoad = () => {}) {
    let mainContainer = createTypeElement(landing,
      {scrolling: 'no', class: id_container});
    Object.assign(mainContainer.style, style);
    mainContainer.onload = () => onLoad(mainContainer);
    return mainContainer;
  }

  makeBase() {
    let cls = {
      left: cls_left,
      right: cls_right,
      top: cls_top,
    };

    let sides = this.sides.map(({side, height, width, landing, media}) => {

      if (side === 'top') {
        if (!getExtension(media)) {
          return;
        } else {
          resizeTargetID(width, height);
        }
      }

      let $mainContainer = this.mainContainer(media, {
        width: `${width}px`,
        height: `${height}px`,
        pointerEvents: 'none',
      });

      let innerHTML = `
        <div class="${cls_wrap_link}">
          <a href='${setClickUrl(CLICK_URL, landing)}' class="${cls_link}" target='_blank'>
            ${$mainContainer.outerHTML}
          </a>
        </div>
      `;

      this[`parent${side}`] = createElement('div', {
        id: `content_${side}_${window.apntag_targetId}`,
        class: `${cls_toma_canal} ${cls[side]}`,
      }, stringToHtml(innerHTML));

      let $container = this[`parent${side}`].querySelector(`.${id_container}`);
      let $link = this[`parent${side}`].querySelector(`.${cls_link}`);
      $container.onload = () => {
        $link.classList.add(cls_loaded);
      };

      if (side === 'top') {
        document.body.appendChild(this[`parent${side}`]);
        return false
      } else {
        return this[`parent${side}`]
      }

    });
    sides.forEach((element) => {
      if(element){
        let $pMain = pDocument.body.querySelector('main');
        if ($pMain) {
          $pMain.appendChild(element);
        } else {
          pDocument.body.appendChild(element);
        }

      }
    })


  }

  unmountIfExists() {
    this.sides.forEach(({side}) => {
      this.removeMaterial(side);
    });
    let targetID = pDocument.querySelector(`#${window.apntag_targetId}`);
    if (targetID) {
      removeParentStyles();
      targetID.removeAttribute('data-running');
    }
  }

  removeMaterial(side) {
    let contentAds = pDocument.querySelector(
      `#content_${side}_${window.apntag_targetId}`);
    if (!contentAds) return false;
    contentAds.remove();
  }

  copyStyles() {

    function copy(style, styles){
      try{style.innerHTML = styles;}
      catch(error){style.styleSheet.cssText = styles;}
    }

    ListStyles.forEach(style => {
      style.classList.add(id_style);
      let _style = createElement('style', {class: `gec_appnexus ${id_style}`});
      copy(_style, style.innerHTML);
      pDocument.head.appendChild(_style);
    });
  }

}

new Ads();