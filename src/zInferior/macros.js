module.exports = [
  { search: '${CACHEBUSTER}',
    replace: '439360928'
  },
  {
    search : '${MEDIA_URL}',
    replace : 'http://elcomercio.pe'
  },
  {
    search: '#{LANDING}',
    replace: 'http://elcomercio.pe'
  },
  { search: '${CLICK_URL}',
    replace: 'https://nym1-ib.adnxs.com/click?AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACF3XVbAAAAAAEAAAAkIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAAAAAEAfgJPrAAAAAA./bn=0/test=1/clickenc=https%3A%2F%2Fdiariocorreo.pe%2F'
  },
  { search: '${CREATIVE_WIDTH}',
    replace: '1'
    // replace: '414'
  },
  { search: '${CREATIVE_HEIGHT}',
    replace: '1',
    // replace: '65'
  },
  { search: '#{CREATIVE}',
    // replace: './zInferior/img/950x60.jpg',
    replace: 'https://jab.pe/wsaccaco/zInferior/index.html'
  },
  { search: '#{CREATIVE_SIZE}',
    replace : '980x90'
  },
  { search: '#{BUTTON_CLOSE}',
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

];