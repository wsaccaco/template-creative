export function toPixel( string ) {
  return string.split("x").map( size => {
    return `${size}px`
  });
}