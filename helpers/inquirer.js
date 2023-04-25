const inquirer = require('inquirer');

const preguntas = [
  {
    type:'list',
    name:'opcion',
    message: '¿Que opcion deseas hacer?',
    choices: ['op1', 'op2', 'op3']
  }
];

const inquirerMenu = async () => {
  console.clear();
  console.log('==========================');
  console.log(' Seleccione una opcion ');
  console.log('==========================');

  const opt = await inquirer.prompt(preguntas);
  return opt;
}

module.exports = {
  inquirerMenu
}
