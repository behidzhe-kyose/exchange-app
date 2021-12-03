import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.huobi.pro\n',
    apiKey: process.env.HUOBI_API_KEY,
    SignatureMethod: 'HmacSHA256',
    SignatureVersion: 2
})