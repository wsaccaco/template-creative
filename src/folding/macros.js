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
  {
    search: '#{PIECE1}',
    replace: './folding/img/1.jpg'
  },
  {
    search: '#{PIECE2}',
    replace: './folding/img/2.jpg'
  },
  {
    search: '#{PIECE3}',
    replace: './folding/img/3.jpg'
  },
  {
    search: '#{PIECE4}',
    replace: './folding/img/4.jpg'
  },
  {
    search: '#{PIECE5}',
    replace: './folding/img/5.jpg'
  },
  {
    search: '#{PIECE6}',
    replace: './folding/img/6.jpg'
  },
  {
    search: '#{PIECE_TOP_SIZE}',
    replace: '300x400'
  },
  {
    search: '#{PIECE_BOTTOM_SIZE}',
    replace: '300x600'
  },
  { search: '#{RETRACT}',
    replace: './folding/img/300x600.jpg',
    // replace: 'https://jab.pe/wsaccaco/expandidoRight/replegado/index.html',
  },
  { search: '#{RETRACT_SIZE}',
    replace: '300x600',
  },
  { search: '#{EXPANDED_SIZE}',
      replace: '900x1000',
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
    search :'#{LANDING}',
    replace: 'https://www.youtube.com/watch?v=kCWWMOzKi2c'
  }
]