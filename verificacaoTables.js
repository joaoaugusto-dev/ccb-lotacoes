//const Funcionario = require('./funcionarios/Funcionarios');

const verificacaoTabelas = async () => {
    try {
        //await Funcionario.sync();
        console.log('Tabelas verificadas com sucesso!');
    } catch (error) {
        console.error('Erro ao verificar tabelas:', error);
    }
};

module.exports = verificacaoTabelas;