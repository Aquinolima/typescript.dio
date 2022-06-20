const pessoa = {
    nome: 'Thiago',
    idade: 31,
    profissao: 'Desenvolvedor'
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

enum Profissao {
    Desenvolvedor,
    Arquiteto,
    Engenheiro,
    QA,
    SquadLeader
}

const thiago: Pessoa = {
    nome: 'Thiago Aquino',
    idade: 31,
    profissao: Profissao.Desenvolvedor
}

const cyndi: Estudante = {
    nome: 'Cyndi',
    idade: 27,
    profissao: Profissao.SquadLeader,
    materias: ['Gestão de Projetos', 'Projetos Ágeis', 'Gestão de Equipe']
}

function listar(lista: string[]){
    for (const item of lista){
        console.log('- ', item);
    }
}

listar(cyndi.materias)