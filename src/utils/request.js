import axios from 'axios'

const request= axios.create({
    baseURL:'https://tapi.yongdaloan.com.cn/dccj-interfaces/V0300/'
})

export default request