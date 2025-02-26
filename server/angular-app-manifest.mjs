
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/chatbot"
  },
  {
    "renderMode": 2,
    "route": "/resources"
  },
  {
    "renderMode": 2,
    "route": "/about"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 799, hash: 'b0d747ecc5cdaf4c960e534ce0ee3be3f8d8ed0eef2059102fa615bc24d7d792', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1145, hash: 'ed58a21e383b7bc3d815c54c27513dece9ae1cea3e380de093b069765f2c2d4a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'chatbot/index.html': {size: 20803, hash: '141a06866561d9633571586ec9b21e624cab5eff10ad56afafcbe6a4cb27e07f', text: () => import('./assets-chunks/chatbot_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 9955, hash: '66794c46c39fb5a177372f0e8d8e62617e27142a12ca027ade0ff590b0019430', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'resources/index.html': {size: 9944, hash: '2b2beeb86dac9280e2b6484a1424b43375aa41b37c0a48fb5a383d658ff27cdd', text: () => import('./assets-chunks/resources_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 12306, hash: 'de30ff320a88479d0e4b183a77e58d1d1a4d2869ca7ce032ff72da836fc2246c', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-YBSM3WPD.css': {size: 443, hash: 'fgnQbtFpNaM', text: () => import('./assets-chunks/styles-YBSM3WPD_css.mjs').then(m => m.default)}
  },
};
