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
  { search: '#{MEDIA}',
    // replace: 'https://vcdn.adnxs.com/p/creative-image/51/7b/be/42/517bbe42-4ea3-4f73-a0ad-0db8cbdb5c58.gif',
    replace: 'https://jab.pe/comz/AppNexus/templates/principal/index.html',
  },
  {
    search :'#{LANDING}',
    replace: 'https://www.youtube.com/watch?v=kCWWMOzKi2c'
  }
]