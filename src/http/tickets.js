import request from './request'

export function mesTickets(id, more = false) {
  return request({
    url: `/canal/ticket/user/valide/${id}`,
    method: 'get',
    headers: {
      "More": more.toString()
    }
  })
}

export function mesFactures(id) {
  return request({
    url: `/canal/factures/user/${id}`,
    method: 'get'
  })
}

