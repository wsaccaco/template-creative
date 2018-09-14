module.exports = [
  { search: '${CACHEBUSTER}',
    replace: '439360928'
  },
  {
    search : '${MEDIA_URL}',
    replace : 'http://elcomercio.pe'
  },
  { search: '${CLICK_URL}',
    replace: 'https://nym1-ib.adnxs.com/click?AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACF3XVbAAAAAAEAAAAkIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAAAAAEAfgJPrAAAAAA./bn=0/test=1/clickenc=https%3A%2F%2Fdiariocorreo.pe%2F'
  },
  { search: '${CREATIVE_WIDTH}',
    replace: '1'
  },
  { search: '${CREATIVE_HEIGHT}',
    replace: '1'
  },
  { search: '#{RETRACT}',
    // replace: './expandibleTop/img/replegado.jpg',
    replace: 'https://jab.pe/wsaccaco/zInferiorExpandible/Replegado/index.html',
  },
  { search: '#{RETRACT_SIZE}',
    replace: '1020x45',
  },
  { search: '#{EXPANDED}',
    // replace: './expandibleTop/img/expandido.gif',
    replace: 'https://jab.pe/wsaccaco/zInferiorExpandible/Expandido/index.html',
  },
  { search: '#{EXPANDED_SIZE}',
      replace: '1020x210',
  },
  { search: '#{BUTTON_EXPANDED}',
    // replace: '',
    replace: './expandibleTop/img/icon-expand.png'
  },
  {
    search :'#{BUTTON_EXPANDED_SIZE}',
    replace: '32x32'
  },
  {
    search :'#{BUTTON_EXPANDED_POSITION}',
    replace: '5x5'
  },
  { search: '#{BUTTON_CLOSE}',
    // replace: '',
    replace: 'https://www.shareicon.net/data/32x32/2016/08/18/809313_close_512x512.png'
  },
  {
    search :'#{BUTTON_CLOSE_SIZE}',
    replace: '32x32'
  },
  {
    search :'#{BUTTON_CLOSE_POSITION}',
    replace: '5x5'
  },
  {
    search :'#{EVENT_OPEN}',
    replace: 'mouseover',
    // replace: 'click'
  },
  {
    search :'#{LANDING}',
    replace: 'https://www.youtube.com/watch?v=kCWWMOzKi2c'
  }
]