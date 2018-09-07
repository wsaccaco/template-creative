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
    // replace: 'https://vcdn.adnxs.com/p/creative-image/e9/c6/3f/7c/e9c63f7c-841c-4eb2-acf2-fa3b3fc36123.gif'
    replace: 'http://jab.pe/wsaccaco/zInferiorExpandible/Replegado/index.html',
  },
  { search: '#{RETRACT_SIZE}',
    replace: '1020x45',
  },
  { search: '#{EXPANDED}',
    // replace: 'https://vcdn.adnxs.com/p/creative-image/e9/c6/3f/7c/e9c63f7c-841c-4eb2-acf2-fa3b3fc36123.gif'
    replace: 'http://jab.pe/wsaccaco/zInferiorExpandible/Expandido/index.html',
  },
  { search: '#{EXPANDED_SIZE}',
    replace: '1020x210',
  },
  { search: '#{BUTTON_CLOSE}',
    replace: 'https://i1.rgstatic.net/ii/profile.image/296447992975371-1447690117410_Q64/Luis_Mejia_Umana.jpg'
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
    // replace: 'mouseover',
    replace: 'click'
  },
  {
    search :'#{LANDING}',
    replace: 'https://www.youtube.com/watch?v=kCWWMOzKi2c'
  }
]