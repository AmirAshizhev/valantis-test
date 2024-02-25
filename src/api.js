import { URL, xAuth } from './x-auth';

class Api {
  constructor(config) {
    this._url = config.baseUrl;
    this._headers = config.headers;
  }


  getCardsIds(){
    return fetch(`${this._url}`, {
      method: 'POST',
      headers: {
        ...this._headers,
      },
      body: JSON.stringify({
        "action": "get_ids",
        "params": {"offset": 0, "limit": 50}
      }),
    })
    .then(this._checkResponse)
  }

  getCardsByIds(ids) {
    return fetch(`${this._url}`, {
      method: 'POST',
      headers: {
        ...this._headers,
      },
      body: JSON.stringify({
        "action": "get_items",
        "params": {"ids": ids}
      }),
    })
    .then(this._checkResponse)
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
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