import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.binance.com/',
    'X-MBX-APIKEY': process.env.BINANCE_API_KEY,
})
