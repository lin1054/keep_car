/**
 * 用户相关请求模块
 */
import request from '@/utils/request'

export const login = data => {
  console.log(data)
  return request({
    method: 'POST',
    url: '/api/login',
    data
  })
}

/**
 *
 * 发送验证码
 * 注意：每手机每分钟发送一次
 */
export const sendSms = data => {
  return request({
    method: 'post',
    url: '/api/reguser',
    data
  })
}
