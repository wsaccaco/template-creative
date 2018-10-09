export function toPixel(string, type = 'array') {
  let sizes = string.split('x').map(size => {
    return `${size}px`;
  });
  let [width, height] = sizes;
  switch (type) {
    case 'array':
      return sizes;
    case 'object':
      return {
        width,
        height
      }
    case 'number':
      return [parseInt(width, 10), parseInt(height, 10)]
  }
}