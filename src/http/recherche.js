import request from './request'

export function rechercheFilm(nom, categorie, siteId) {
  return request({
    url: `/canal/programmes/search/${nom}/${categorie}/${siteId}`,
    method: 'get'
  })
}

export function getCatgorieFilm(siteId) {
  return request({
    url: `/canal/programmes/landing/categories/${siteId}`,
    method: 'get'
  })
}
