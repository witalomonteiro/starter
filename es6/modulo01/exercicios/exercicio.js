/*
// 1º Exercício
class User {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }
    isAdmin() {
        return this.admin === true;
    }
}

class Admin extends User {
    constructor(email, senha) {
        super(email, senha);
        this.admin = true;
    }   
}

const User1 = new User('emailwitalo@monteiro.com', '123');
const Admin1 = new Admin('Barros@monteiro.com', '123');

console.log(User1.isAdmin());
console.log(Admin1.isAdmin());

// 2º Exercício
const users = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = users.map(( { idade } ) => {
    return idade;
});
console.log(idades);

const funcionarios = users.filter(( { empresa, idade } ) => {
    return empresa === 'Rocketseat' && idade >= 18;
});
console.log(funcionarios);

const encontrar = users.find(( { empresa } ) => {
    return empresa === 'Google';
});
console.log(encontrar);

const calculo = users
    .map( user => ({ ...user, idade: user.idade * 2 }))
   .filter(({ idade }) => idade <= 50 );
console.log(calculo);

// 3º Exercício
const arr = [1, 2, 3, 4, 5];
arr.map(item => item + 10);

const user = { nome: 'Diego', idade: 23};
const mostraIdade = user => user.idade;
console.log(mostraIdade(user));

const promise = () => new Promisse((resolve, reject) => resolve());

// 4º Exercício
const user = {
    empresa: 'Rocketseat',
    nome: 'Witalo Monteiro',
    idade: 26,
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
};

const { empresa, endereco: { cidade, estado } } = user;
console.log(empresa);
console.log(cidade);
console.log(estado);

const mostraInfo = user => `${user.nome} tem ${user.idade} anos`;
//console.log(mostraInfo(user));
console.log(mostraInfo({ nome: 'Witalo', idade: 26 } ));

// 5º Exercício
// 5.1 Rest
const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;
console.log(x);
console.log(y);

function soma(...nums) {
    return params.reduce((a, b) => a + b);
}
console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));

// 5.2 Spread
const user = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
};
const user1 = { nome: 'Witalo', ...user };
const user2 = { nome: 'Monteiro', ...user };
console.log(user1);
console.log(user2);

// 6º Exercício - Template Literals
const user = 'Witalo';
const idade = 26;
console.log(`O usuário ${user} possui ${idade} anos de idade.`);
*/

// 7º Exercício - Object Short Syntax
const nome = 'Witalo';
const idade = 26;

const user = {
    nome,
    idade,
    cidade: 'Fortaleza'
};
console.log(user);