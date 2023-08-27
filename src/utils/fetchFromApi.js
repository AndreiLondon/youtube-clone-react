import axios from 'axios';
// const axios = require('axios');

// const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const BASE_URL = 'https://youtube-v311.p.rapidapi.com/activities/';

const options = {
//   method: 'GET',
//   url: 'https://youtube-v311.p.rapidapi.com/activities/',
//   params: {
//     part: 'snippet',
//     channelId: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
//     maxResults: '50'
//   },
// url: BASE_URL,
params: {
    maxResults: '50'
},
  headers: {
    'X-RapidAPI-Key': process.env. 
    REACT_APP_REACT_API_KEY,
    'X-RapidAPI-Host': 'youtube-v311.p.rapidapi.com'
  }
};

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  };