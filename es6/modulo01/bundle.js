"use strict";

/*
// Classes
class List {
    constructor() {
        this.data = [];
    }
    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}
class TodoList extends List {
    constructor() {
        super();
        this.usuario = 'Diego';
    }
    mostraUsuario() {
        console.log(this.usuario);
    }
}
const MinhaLista = new TodoList();
document.getElementById('novotodo').onclick = function() {
    MinhaLista.add("Novo Todo");
}

class Matematica {
    static soma(a, b) {
        return a + b;
    }
}
console.log(Matematica.soma(5, 5));

// Const e Let - Constantes e variaveis de escopo
const user = 'Witalo Monteiro'
user = "Barros"; // não é permitido reatribuir valores a uma const

const usuario = { nome: "Monteiro" };
usuario.nome = "Witalo"; // mas podemos mutar uma constante
console.log(usuario);

function teste(x) {
    let y = 2;
    if (x > 5) {
        console.log(x, y);
    }
}
teste(10);

// Operações em Array
const arr = [1, 2, 3, 4, 5, 8, 9];
const newArr = arr.map((item, index) => {
    return item + index;
});
console.log(newArr);

const sum = arr.reduce((total, next) => {
    return total + next;
});
console.log(sum);

const filter = arr.filter((item) => {
    return item % 2 === 0;
});
console.log(filter);

const find = arr.find((item) => {
    return item === 4;
});
console.log(find);

// Arrow Functions
const arr = [1, 2, 3, 4, 5]
const newArr = arr.map(item => item * 2)
console.log(newArr)
// Valores Padrão
function soma(a, b) {
    return a + b
}
console.log(soma(1));
console.log(soma());

// Desestruturação
const user = {
    nome: 'Witalo',
    idade: 26,
    endereco: {
        cidade: 'Fortaleza',
        estado: 'CE',
    }
}

const { nome, idade, endereco: { cidade } } = user;
console.log(nome)
console.log(idade)
console.log(cidade)

function mostraNome({ nome }) {
    console.log(nome)
}
mostraNome(user)

// Operadores rest/spread
// REST
const user = {
    nome: 'Witalo',
    idade: 26,
    empresa: 'Multiplay'
}
const { nome, ...resto } = user
console.log(nome)
console.log(resto)

const arr = [1, 2, 3, 4]
const [a, b, ...c] = arr
console.log(a)
console.log(b)
console.log(c)

function soma(...params) {
    return params.reduce((total, next) => {
        return total + next
    })
}
console.log(soma(1, 3, 4, 2))

// SPREAD
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = [ ...arr1, ...arr2 ]
console.log(arr3)

const user1 = {
    nome: 'Witalo',
    idade: 26,
    empresa: 'Multiplay'
}
const user2 = { ...user1, nome: 'Monteiro' }
console.log(user2)

// Template Literals
const nome = 'Witalo'
const idade = 26
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`)
*/
// Object Short Syntax
var nome = 'Witalo';
var idade = 26;
var user = {
  nome: nome,
  idade: idade,
  empresa: 'Multiplay'
};
console.log(user);
