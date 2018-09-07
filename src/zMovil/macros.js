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
    // replace: '414'
  },
  { search: '${CREATIVE_HEIGHT}',
    replace: '1',
    // replace: '65'
  },
  { search: '#{IMAGE_SMALL}',
    replace : 'https://dummyimage.com/320x50/000/fff&text=Probando+texto.png',
    // replace: 'http://jab.pe/wsaccaco/zmovil/index.html'
  },
  { search: '#{IMAGE_LARGE}',
    replace : 'https://dummyimage.com/414x60/000/fff&text=Probando+texto.png'
    // replace: 'http://jab.pe/wsaccaco/zmovil/index.html'
  }
];