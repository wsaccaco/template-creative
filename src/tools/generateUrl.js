import {createElement} from '../tools/createElement'

let pages = [
  {site: "https://elcomercio.pe/", prefix: 'eco'},
  {site: "https://trome.pe/", prefix: 'trm'},
  {site: "https://depor.pe/", prefix: 'dep'},
  {site: "https://peru21.pe/", prefix: 'p21'},
  {site: "https://gestion.pe/", prefix: 'ges'},
  {site: "https://publimetro.pe/", prefix: 'pub'},
  {site: "https://peru.com/", prefix: 'pco'},
  {site: "https://diariocorreo.pe/", prefix: 'cor'},
  {site: "https://ojo.pe/", prefix: 'ojo'},
  {site: "https://bocon.pe/", prefix: 'boc'},
  {site: "https://mujerPandora.com/", prefix: 'pan'},
  {site: "https://elshow.pe/", prefix: 'shw'},
];

let parent = document.querySelector("#list_urls");


function append(url){
  let divTmp = createElement('div', {}, document.createTextNode(url));
  parent.appendChild(divTmp);
}

function generateURLs(inv_code = [], idCreative){
  parent.innerHTML = '';
  pages.forEach(({site, prefix}) => {
    inv_code.forEach(({device, inv}, index) => {
      let preUrl = `${site}?ast_override_inv_code=${prefix}_${device}_${inv}:${idCreative}`;
      append(preUrl)
    });
  });
}

window.generateURLs = generateURLs;

// Comercio - movil
// https://elcomercio.pe/?ast_override_inv_code=eco_m_port1_movil2:111355187
//   Comercio - desktop
// https://elcomercio.pe/?ast_override_inv_code=eco_d_port1_boton1:111355187
//
//   Trome - movil
// https://trome.pe/?ast_override_inv_code=trm_m_port1_movil2:111355187
//   Trome - desktop
// https://trome.pe/?ast_override_inv_code=trm_d_port1_boton1:111355187
//
//   Depor - movil
// https://depor.pe/?ast_override_inv_code=dep_m_port1_movil2:111355187
//   Depor - desktop
// https://depor.pe/?ast_override_inv_code=dep_d_port1_boton1:111355187
//
//   Peru21 - movil
// https://peru21.pe/?ast_override_inv_code=p21_m_port1_movil2:111355187
//   Peru21 - desktop
// https://peru21.pe/?ast_override_inv_code=p21_d_port1_boton1:111355187
//
//   Gestion - movil
// https://gestion.pe/?ast_override_inv_code=ges_m_port1_movil2:111355187
//   Gestion - desktop
// https://gestion.pe/?ast_override_inv_code=ges_d_port1_boton1:111355187
//
//   Publimetro - movil
// https://publimetro.pe/?ast_override_inv_code=pub_m_port1_movil2:111355187
//   Publimetro - desktop
// https://publimetro.pe/?ast_override_inv_code=pub_d_port1_boton1:111355187
//
//   Perucom - movil
// https://peru.com/?ast_override_inv_code=pco_m_port1_movil2:111355187
//   Perucom - desktop
// https://peru.com/?ast_override_inv_code=pco_d_port1_boton1:111355187
//
//   Correo - movil
// https://diariocorreo.pe/?ast_override_inv_code=cor_m_port1_movil2:111355187
//   Correo - desktop
// https://diariocorreo.pe/?ast_override_inv_code=cor_d_port1_boton1:111355187
//
//   Ojo - movil
// https://ojo.pe/?ast_override_inv_code=ojo_m_port1_movil2:111355187
//   Ojo - desktop
// https://ojo.pe/?ast_override_inv_code=ojo_d_port1_boton1:111355187
//
//   Bocon - movil
// https://bocon.pe/?ast_override_inv_code=boc_m_port1_movil2:111355187
//   Bocon - desktop
// https://bocon.pe/?ast_override_inv_code=boc_d_port1_boton1:111355187
//
//   MujerPandora - movil
// https://mujerPandora.com/?ast_override_inv_code=pan_m_port1_movil2:111355187
//   MujerPandora - desktop
// https://mujerPandora.com/?ast_override_inv_code=pan_d_port1_boton1:111355187
//
//   Show - movil
// https://elshow.pe/?ast_override_inv_code=shw_m_port1_movil2:111355187
//   Show - desktop