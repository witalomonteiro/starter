/*
// Webpack Server

//import { soma, sub } from './funcoes';
//import { soma as somaFunction, sub } from './funcoes';
//import soma, { sub } from './funcoes';
import * as funcoes from '../funcoes';

//console.log(soma(1, 2));
//console.log(sub(1, 2));
console.log(funcoes.default(3, 5));
console.log(funcoes.sub(1, 2));

//alert('TESTE!');
// 1º Exercício
// 1.1
import ClassUser from './funcoes';
console.log(ClassUser.info());
// 1.2
import { idade } from './funcoes';
console.log(idade);
// 1.3
import ClassUser, { idade as idadeUser} from './funcoes';

// Async/Await
const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});

/*
// Promise utilizando Then e Catch
minhaPromise()
    .then(response => {
    console.log(response)
    })
    .catch(err => {
        console.log(err)
    })

// Promisse utilizando Async/Await
const executaPromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
};
executaPromise();

// Axios
import axios from 'axios';
class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch (err) {
            console.warn('Erro na API"');
        }
    }
}
Api.getUserInfo('diego3g');

// Exercício
// 1º
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
const umPorSegundo = async () => {
    await delay()
    console.log('1s')
    await delay()
    console.log('2s');
    await delay()
    console.log('3s');
}
umPorSegundo();

// 2º
import axios from 'axios';
async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response.data)
    } catch (err) {
        console.warn('Erro na API!')
    }
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

// 3º
class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`)
            console.log(response.data)
        } catch (err) {
            console.warn('Repositório não existe!')
        }
        
    }
   }
   Github.getRepositories('diego3g');
   Github.getRepositories('rocketseat/rocketseat.com.br');
   Github.getRepositories('rocketseat/dslkvmskv');

*/
// 3º
const buscaUsuario = async usuario  => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response.data)
    } catch (err) {
        console.warn('Usuário não existe');
    }
}
buscaUsuario('diego3g');
   