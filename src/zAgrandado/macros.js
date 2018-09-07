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
  }
  ,
  { search: '#{BUTTON_CLOSE}',
    replace: 'https://vcdn.adnxs.com/p/creative-image/3b/1e/64/e0/3b1e64e0-ca86-4774-82ad-4f9300ab9612.png'
  },
  { search: '#{IMAGE}',
    replace: 'https://vcdn.adnxs.com/p/creative-image/e9/c6/3f/7c/e9c63f7c-841c-4eb2-acf2-fa3b3fc36123.gif'
    // replace: 'https://jab.pe/wsaccaco/zagrandado/index.html'
  },
  {
    search :'#{BUTTON_CLOSE_POSITION}',
    replace: 'right_bottom'
  }
]