import request from './request'

export function landingProgammation(id) {
  return request({
    url: `/canal/programmes/landing/${id}`,
    method: 'get'
  })
}

export function landingProgammationSite(id) {
  return request({
    url: `/canal/programmes/specific/salle/${id}`,
    method: 'get'
  })
}

export function listSalle() {
  return request({
    url: '/canal/site/valide',
    method: 'get'
  })
}

export function listeEcran(idScreen, idFilm) {
  return request({
    url: `/canal/programmes/specific/screen/${idFilm}/${idScreen}`,
    method: 'get'
  })
}

export function listeConfiserie(idSalle) {
  return request({
    url: `/canal/confiserie/oneSite/validated/${idSalle}`,
    method: 'get'
  })
}

export function configurationSiege(data) {
  return request({
    url: "/canal/siege/configuration",
    method: "post",
    data,
  });
}

export function listeAgregateur() {
  return request({
    url: '/canal/agregateur',
    method: 'get'
  })
}

export function reservation(idFilm, idUser, idHoraire, idSalle, idAgregateur, idTransaction, data) {
  return request({
    url: `/canal/factures/generate/specific/${idFilm}/${idUser}/${idHoraire}/${idSalle}/${idAgregateur}/${idTransaction}`,
    method: "post",
    data,
  });
}

export function reservationSiege(idFilm, idUser, idHoraire, idSalle, data) {
  return request({
    url: `/canal/factures/reservation/${idFilm}/${idUser}/${idHoraire}/${idSalle}`,
    method: "post",
    data,
  });
}

export function userLikeFilm(idUser, idFilm) {
  return request({
    url: `/canal/favoris/isliked/${idUser}/${idFilm}`,
    method: 'get'
  })
}

export function aimerFilm(data) {
  return request({
    url: '/canal/favoris',
    method: "post",
    data,
  });
}