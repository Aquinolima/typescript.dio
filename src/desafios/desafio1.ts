// Como podemos rodar isso em um arquivo .ts sem causar erros? 
/* 
let employee = {};
employee.code = 10;
employee.name = "John";
 */

// Resposta 
// Existem algumas maneiras para resolver esse problema.

// Modo 1
const funcionario = {
    codigo: 10,
    nome: 'João'
};

// Modo 2
const funcionario2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'joao'
}

// Modo 3 com interface
interface Funcionario {  
    codigo: number,
    nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'João';

// Modo 4 com interface

const funcionarioObj2: Funcionario = {
    codigo: 10,
    nome: 'João'
}