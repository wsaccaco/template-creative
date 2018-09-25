export function toPixel(string, type = 'array') {
  let sizes = string.split('x').map(size => {
    return `${size}px`;
  });
  switch (type) {
    case 'array':
      return sizes;
    case 'object':
      let [width, height] = sizes;
      return {
        width,
        height
      }
  }
}