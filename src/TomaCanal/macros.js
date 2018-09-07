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
  { search: '#{LANDING_PAGE_URL_LEFT}',
    replace: 'https://gestion.pe/?ref=gesr'
  },
  { search: '#{LANDING_PAGE_URL_TOP}',
    // replace: '#{LANDING_PAGE_URL_TOP}'
    replace: 'https://elcomercio.pe/especial/vivetranquilo'
  },
  { search: '#{LANDING_PAGE_URL_RIGHT}',
    replace: 'https://elcomercio.pe/especial/zona-ejecutiva'
  },
  { search: '#{MEDIA_URL_LEFT}',
    replace: '/src/TomaCanal/img/skin-izquierdo.jpg'
    // replace: 'https://jab.pe/comz/AppNexus/templates/toma_de_canal/skin-izquierdo/index.html'
  },
  { search: '#{MEDIA_SIZE_LEFT}',
    replace: '150x600'
  },
  { search: '#{MEDIA_URL_TOP}',
    // replace: '#{MEDIA_URL_TOP}'
    // replace: 'https://jab.pe/comz/AppNexus/templates/toma_de_canal/top/index.html'
    replace: './img/top.jpg'
  },
  { search: '#{MEDIA_SIZE_TOP}',
    replace: '980x150'
  },
  { search: '#{MEDIA_URL_RIGHT}',
    // replace: 'https://jab.pe/comz/AppNexus/templates/toma_de_canal/skin-izquierdo/index.html',
    replace: '/src/TomaCanal/img/skin-izquierdo.jpg'
  },
  { search: '#{MEDIA_SIZE_RIGHT}',
    replace: '150x600'
  },
];
