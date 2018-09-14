import {toPixel} from '../tools/toPixel'

const Close = function _Close( url, classNames, SIZE, POSITION){

  let [_width, _height] = toPixel(SIZE);
  let [top, right] = toPixel(POSITION);

  return `
        <a class='${classNames}' href="javascript:void(0)" style="top: ${top}; right: ${right}">
            <img src="${url}" style="width: ${_width}; height: ${_height}" />
        </a>
    `;
};

const Button = Close;

export {Close};
export {Button};