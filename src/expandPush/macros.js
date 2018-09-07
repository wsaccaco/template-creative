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
  { search: '#{IMAGE_COLPASE}',
    replace: 'http://jab.pe/wsaccaco/expandible/contraido/index.html'
  },
  { search: '${CREATIVE_WIDTH}',
    replace: '960'
  },
  { search: '${CREATIVE_HEIGHT}',
    replace: '35'
  },
  { search: '#{BUTTON_EXPAND}',
    replace: 'https://vcdn.adnxs.com/p/creative-image/7c/12/1d/08/7c121d08-02af-4c56-b6d9-d67f771d5cf8.png',
    flags: 'i'
  },
  { search: '#{IMAGE_EXPANDED}',
    replace: 'http://jab.pe/wsaccaco/expandible/expandido/index.html'
  },
  { search: '#{IMAGE_EXPANDED_WIDTH}',
    replace: '960'
  },
  { search: '#{IMAGE_EXPANDED_HEIGHT}',
    replace: '400'
  },
  { search: '#{BUTTON_COLAPSE}',
    replace: 'https://vcdn.adnxs.com/p/creative-image/43/b5/e1/b8/43b5e1b8-171e-4d44-84b4-faf781e9bed3.png'
  },
  { search: '#{BUTTON_COLAPSE_WIDTH}',
    replace: '150'
  },
  { search: '#{BUTTON_COLAPSE_HEIGHT}',
    replace: '30'
  },
  { search: '#{BUTTON_COLAPSE_RIGHT}',
    replace: '0'
  },
  { search: '#{BUTTON_COLAPSE_TOP}',
    replace: '0'
  },
  { search: '#{BUTTON_EXPAND_WIDTH}',
    replace: '150'
  },
  { search: '#{BUTTON_EXPAND_HEIGHT}',
    replace: '30'
  },
  { search: '#{BUTTON_EXPAND_RIGHT}',
    replace: '0'
  },
  { search: '#{BUTTON_EXPAND_TOP}',
    replace: '0'
  },
  { search: '#{TIME}',
    replace: '8'
  }
]