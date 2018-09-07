/*
  Note: este archivo ya estaba escrito, solo me modifico algunas cosas para mejorar el diseño
  hay muchas cosas todavía por optimizar y separar el codigo.
 */
import './expandPush.css'

(function() {

  const CLICK_URL = '${CLICK_URL}';
  const IMAGE_COLPASE = '#{IMAGE_COLPASE}';
  const IMAGE_EXPANDED = '#{IMAGE_EXPANDED}';
  const MEDIA_URL =  "${MEDIA_URL}";
  const CACHEBUSTER = '${CACHEBUSTER}';
  const CREATIVE_WIDTH = '${CREATIVE_WIDTH}';
  const CREATIVE_HEIGHT = '${CREATIVE_HEIGHT}';
  const BUTTON_EXPAND = '#{BUTTON_EXPAND}';
  const TIME = '#{TIME}';
  const IMAGE_EXPANDED_WIDTH = "#{IMAGE_EXPANDED_WIDTH}";
  const IMAGE_EXPANDED_HEIGHT = "#{IMAGE_EXPANDED_HEIGHT}";
  const BUTTON_COLAPSE = '#{BUTTON_COLAPSE}';
  const BUTTON_COLAPSE_WIDTH = '#{BUTTON_COLAPSE_WIDTH}';
  const BUTTON_COLAPSE_HEIGHT = '#{BUTTON_COLAPSE_HEIGHT}';
  const BUTTON_COLAPSE_RIGHT = '#{BUTTON_COLAPSE_RIGHT}';
  const BUTTON_COLAPSE_TOP = '#{BUTTON_COLAPSE_TOP}';
  const BUTTON_EXPAND_WIDTH = '#{BUTTON_EXPAND_WIDTH}';
  const BUTTON_EXPAND_HEIGHT = '#{BUTTON_EXPAND_HEIGHT}';
  const BUTTON_EXPAND_RIGHT = '#{BUTTON_EXPAND_RIGHT}';
  const BUTTON_EXPAND_TOP = '#{BUTTON_EXPAND_TOP}';

  let [urlTracker] = CLICK_URL.split("clickenc");
  let landingPage = urlTracker.concat("clickenc=", encodeURIComponent(MEDIA_URL));

  function createElement(node, attrs = {}){
    let tmpNode = document.createElement(node);
    for (let key in attrs) {
      tmpNode.setAttribute(key, attrs[key]);
      if(key === 'style'){
        object_assign(tmpNode.style, attrs[key])
      }
    }
    return tmpNode;
  }

  function _getExtension(url){
    try {
      const _url = url;
      const [file] = _url.split("/").reverse();
      const [extension] = file.split(".").reverse();
      return extension;
    }catch (e) {
      console.error("GEC001 :", e)
    }
  }

  function createTypeElement(url, attr = {}) {
    let extension = _getExtension(url);
    let nodo;
    switch (extension){
      case "html":
         const _attr = Object.assign({}, attr);
         nodo = createElement("iframe", _attr);
         nodo.classList.add("ads-iframe");
        nodo.src = url;
        return nodo;
      case "jpg":
      case "png":
      case "gif":
        nodo = createElement("img", attr);
        nodo.src = url;
        return nodo;
      // case "mp4":
      //   return createElement("mp4", attr);
    }
  }

  const
      rd = CACHEBUSTER,
      utils = {
        parse: function(value) {
          return (isNaN(value)) ? value : (value + 'px');
        },
      };

  let parentDiv = createElement("div", {"class": "ads-gec-expand-collapse"});
  let divColapsed = createElement('div', {id: 'colapsed', style : {position: 'absolute'}});
  let divButtonExpand = createElement('div', {id:  'wrap_btn_expand'});
  let anchorColapsedClick = createElement('a', {id: 'click_url_collapse'});
  let imgColapsedContent = createTypeElement(IMAGE_COLPASE, {id: 'wrap_collapse', "class": "events-none"});
  let divExpanded = createElement('div', {id : 'expanded'});
  let divButtonColapse = document.createElement('div');
  let anchorExpandedClick = createElement('a', {id: 'click_url_expanded'});
  let imgExpandedContent = createTypeElement(IMAGE_EXPANDED, {id: 'wrap_expanded', "class": 'events-none'});

  anchorExpandedClick.classList.add("flex");


  document.body.appendChild(parentDiv);

  parentDiv.appendChild(divColapsed);
  divColapsed.appendChild(divButtonExpand);
  divColapsed.appendChild(anchorColapsedClick);
  anchorColapsedClick.appendChild(imgColapsedContent);
  // anchorColapsedClick.onclick = function() {
  //   window.open(landingPage);
  // };

  object_assign(imgColapsedContent.style, {
    width: utils.parse(CREATIVE_WIDTH),
    height: utils.parse(CREATIVE_HEIGHT),
  });
  object_assign(divColapsed.style, {
    width: utils.parse(CREATIVE_WIDTH),
    height: utils.parse(CREATIVE_HEIGHT),
  });

  let img_open = BUTTON_EXPAND;
  if (img_open) {
    var imgButtonExpand = createElement('img', {id: 'btn_open'});
    imgButtonExpand.src = img_open;
    divButtonExpand.appendChild(imgButtonExpand);
  }

  parentDiv.appendChild(divExpanded);
  divExpanded.appendChild(divButtonColapse);
  divExpanded.appendChild(anchorExpandedClick);
  anchorExpandedClick.appendChild(imgExpandedContent);
  anchorExpandedClick.onclick = function() {
    window.open(landingPage);
  };

  object_assign(imgExpandedContent.style, {
    width: utils.parse(IMAGE_EXPANDED_WIDTH),
    height: utils.parse(IMAGE_EXPANDED_HEIGHT),
  });
  object_assign(divExpanded.style, {
    width: utils.parse(IMAGE_EXPANDED_WIDTH),
    height: utils.parse(IMAGE_EXPANDED_HEIGHT),
  });

  if (BUTTON_COLAPSE) {
    var imgButtonColapse = document.createElement('img');
    imgButtonColapse.src = BUTTON_COLAPSE;
    object_assign(imgButtonColapse.style, {
      position: 'absolute',
      right: '0px',
      top: '0px',
    });
    divButtonColapse.appendChild(imgButtonColapse);
  }

  object_assign(divButtonColapse.style, {
    width: utils.parse(BUTTON_COLAPSE_WIDTH),
    height: utils.parse(BUTTON_COLAPSE_HEIGHT),
    right: utils.parse(BUTTON_COLAPSE_RIGHT),
    top: utils.parse(BUTTON_COLAPSE_TOP),
    position: 'absolute',
    cursor: 'pointer',
  });

  object_assign(divButtonExpand.style, {
    width: utils.parse(BUTTON_EXPAND_WIDTH),
    height: utils.parse(BUTTON_EXPAND_HEIGHT),
    right: utils.parse(BUTTON_EXPAND_RIGHT),
    top: utils.parse(BUTTON_EXPAND_TOP),
    position: 'absolute',
    cursor: 'pointer',
  });

  function expand() {
    object_assign(divExpanded.style, {
      position: 'absolute',
      display: 'block',
    });
    object_assign(divColapsed.style, {
      display: 'none',
    });
    if (window.frameElement) {
      object_assign(window.frameElement.style, {
        width: utils.parse(IMAGE_EXPANDED_WIDTH),
        height: utils.parse(IMAGE_EXPANDED_HEIGHT),
      });
    }
  };
  divButtonExpand.onclick = expand;

  function colapse() {
    object_assign(divExpanded.style, {
      float: 'left',
      display: 'none',
    });
    object_assign(divColapsed.style, {
      display: 'block',
    });
    if (window.frameElement) {
      object_assign(window.frameElement.style, {
        width: utils.parse(CREATIVE_WIDTH),
        height: utils.parse(CREATIVE_HEIGHT),
      });
    }
  };
  divButtonColapse.onclick = colapse;
  colapse();

  if (parseInt(TIME)) {
    expand();
    window.setTimeout(colapse, parseInt(TIME) * 1000);
  }

  function object_assign() {
    var obj = arguments[0];
    for (var index = 1; index < arguments.length; index++) {
      var args = arguments[index];
      for (let field in args) {
        obj[field] = args[field];
      }
    }
    return obj;
  }

})();


// let listNodeAds = Array.prototype.slice.call(document.querySelectorAll("[id^='ads_']"));
// let listTargetID = listNodeAds.map((element) => element.id) || [];
// if (window.hasOwnProperty('apntag')) {
//   window.apntag.refresh(listTargetID);
// }
