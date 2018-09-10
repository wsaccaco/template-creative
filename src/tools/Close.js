import {toPixel} from '../tools/toPixel'

export function Close( url, classNames, SIZE, POSITION){

  let [_width, _height] = toPixel(SIZE);
  let [top, right] = toPixel(POSITION);

  return `
        <a class='${classNames}' style="top: ${top}; right: ${right}">
            <img src="${url}" style="width: ${_width}; height: ${_height}" />
        </a>
    `;
}