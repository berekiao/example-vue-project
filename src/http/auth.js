import request from './request'

export function login(data) {
  return request({
    url: '/auth/signin',
    method: 'post',
    data
  })
}

export function register(data) {
  return request({
    url: 'user/signUp',
    method: 'post',
    data
  })
}

export function registerGoogle(data) {
  return request({
    url: 'user/signUp/reseaux',
    method: 'post',
    data
  })
}

export function loginGoogle(data) {
  return request({
    url: 'user/signIn/reseaux',
    method: 'post',
    data
  })
}
