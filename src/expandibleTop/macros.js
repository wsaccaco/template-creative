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
    // replace: './expandibleRight/img/replegado-300x600.jpg',
    replace: 'https://jab.pe/wsaccaco/expandidoRight/replegado/index.html',
  },
  { search: '#{RETRACT_SIZE}',
    replace: '300x600',
  },
  { search: '#{EXPANDED}',
    // replace: './expandibleRight/img/expandido-600x600.jpg',
    replace: 'https://jab.pe/wsaccaco/expandidoRight/expandido/index.html',
  },
  { search: '#{EXPANDED_SIZE}',
      replace: '600x600',
  },
  { search: '#{BUTTON_CLOSE}',
    replace: '',
    // replace: 'https://www.shareicon.net/data/32x32/2016/08/18/809313_close_512x512.png'
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