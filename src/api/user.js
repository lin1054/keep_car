/**
 * 用户相关请求模块
 */
import request from '@/utils/request'

export const login = data =>{
    return request({
        method:'POST',
        url:'/app/xxx',
        data
    })
}

/**
 * 
 * 发送验证码
 * 注意：每手机每分钟发送一次
 */ 
export const sendSms = mobile =>{
    return request({
        method:'GET',
        url:'/app/xxx',
    })
}