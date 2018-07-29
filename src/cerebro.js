let changeListenrs = [];
let language = {
  language: null,
  data: [],
  url: 'http://www.cerebro-io.com/graphql',
};

const get = () => language;

const set = (language1) => {
  language = language1;
  changeListeners.forEach((l) => l(language));
};

const fetch = () => {

}

const save = () => {

}

const load = () => {

}

export const Cerebro = {
  set,
  get,
  fetch,
  save,
  load,
  language,
}