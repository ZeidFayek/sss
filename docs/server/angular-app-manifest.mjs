
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/DigitalBondProject"
  }
],
  assets: new Map([
['index.csr.html', {size: 5711, hash: 'fc60c1548206aa72916f4190caa4c043456b4baf2d5f8b8be79787588888b2f0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1209, hash: '007d4dfb91165195b0dc0db9c6969ff65f330ad51361f44d6ddd4aebe9864de9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['t/index.html', {size: 62643, hash: '0e77429d5ad1783c32357b4234d2d2c535ea12c88cbbfde8b812b6140ce15249', text: () => import('./assets-chunks/t_index_html.mjs').then(m => m.default)}], 
['main-IIO3AIVH.css', {size: 26054, hash: '3KMEVki9tus', text: () => import('./assets-chunks/main-IIO3AIVH_css.mjs').then(m => m.default)}], 
['main.server.css', {size: 26054, hash: '3KMEVki9tus', text: () => import('./assets-chunks/main_server_css.mjs').then(m => m.default)}], 
['styles-B3SA6HC3.css', {size: 265112, hash: 'Qc6lqRfUEFg', text: () => import('./assets-chunks/styles-B3SA6HC3_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
