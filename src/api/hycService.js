import request from '@/utils/request'
// import store from '@/store'

export const balance = () => {
  return request({
    method: 'GET',
    url: '/hyc/hycService'
    // Authorization: `${store.state.user}`
  })
}
