import { URL, xAuth } from './x-auth';


class Api {
  constructor(config) {
    this._url = config.baseUrl;
    this._headers = config.headers;
  }

  seeConfig(){
    return this
  }
}

const api = new Api({
  baseUrl: `${URL}`,
  headers: {
    'Content-Type': 'application/json',
    'X-Auth': `${xAuth}`
  },
});

export default api;