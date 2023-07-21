const BASE_URL = 'http://localhost:3000';
const ENV = 'dev';
const APP = 'esoapp';

export const URLS = {
  traits: {
    getOne: `${BASE_URL}/${ENV}/${APP}/traits/singleTrait`,
    getAll: `${BASE_URL}/${ENV}/${APP}/traits/allTraits`,
    updateOne: `${BASE_URL}/${ENV}/${APP}/traits/updateTrait`,
  },
  writs: {
    getAll: `${BASE_URL}/${ENV}/${APP}/writs/all`,
    delete: `${BASE_URL}/${ENV}/${APP}/writs/delete`,
    updateOne: `${BASE_URL}/${ENV}/${APP}/writs/update`,
    createOne: `${BASE_URL}/${ENV}/${APP}/writs/new`,
    generate: `${BASE_URL}/${ENV}/${APP}/writs/generate`,
  },
  styles: {
    getOne: `${BASE_URL}/${ENV}/${APP}/styles/singleStyle`,
    getAllByItems: `${BASE_URL}/${ENV}/${APP}/styles/allItemStyles`,
    getAllByMotif: `${BASE_URL}/${ENV}/${APP}/styles/allMotifStyles`,
    updateOne: `${BASE_URL}/${ENV}/${APP}/styles/updateStyle`,
  },
  auth: {
    getOne: `${BASE_URL}/${ENV}/${APP}/users/one`,
    getAll: `${BASE_URL}/${ENV}/${APP}/users/all`,
    register: `${BASE_URL}/${ENV}/${APP}/users/new`,
    login: `${BASE_URL}/${ENV}/${APP}/users/login`,
    checkToken: `${BASE_URL}/${ENV}/${APP}/users/checkToken`,
  },
};
