const BASE_URL = 'http://localhost:3000';
const ENV = 'dev';
const APP = 'esoapp';

export const URLS = {
  traits: {
    getAll: `${BASE_URL}/${ENV}/${APP}/traits/all`,
    updateOne: `${BASE_URL}/${ENV}/${APP}/traits/update`,
    generate: `${BASE_URL}/${ENV}/${APP}/traits/generate`,
    fill: `${BASE_URL}/${ENV}/${APP}/traits/fill`,
  },
  writs: {
    getAll: `${BASE_URL}/${ENV}/${APP}/writs/all`,
    updateOne: `${BASE_URL}/${ENV}/${APP}/writs/update`,
    createOne: `${BASE_URL}/${ENV}/${APP}/writs/new`,
    generate: `${BASE_URL}/${ENV}/${APP}/writs/generate`,
  },
  styles: {
    getAll: `${BASE_URL}/${ENV}/${APP}/styles/all`,
    getOne: `${BASE_URL}/${ENV}/${APP}/styles/one`,
    updateOne: `${BASE_URL}/${ENV}/${APP}/styles/update`,
    updateMany: `${BASE_URL}/${ENV}/${APP}/styles/update`,
    addNew: `${BASE_URL}/${ENV}/${APP}/styles/new`,
    generate: `${BASE_URL}/${ENV}/${APP}/styles/generate`,
    fill: `${BASE_URL}/${ENV}/${APP}/styles/fill`,
  },
  auth: {
    getOne: `${BASE_URL}/${ENV}/${APP}/users/one`,
    getAll: `${BASE_URL}/${ENV}/${APP}/users/all`,
    register: `${BASE_URL}/${ENV}/${APP}/users/new`,
    login: `${BASE_URL}/${ENV}/${APP}/users/login`,
    checkToken: `${BASE_URL}/${ENV}/${APP}/users/checkToken`,
  },
};
