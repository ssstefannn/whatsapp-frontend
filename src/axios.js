import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://whatsapp-clone-ssstefannn.herokuapp.com',
});

export default instance;