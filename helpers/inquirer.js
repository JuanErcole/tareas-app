const inquirer = require('inquirer');

const preguntas = [
  {
    type:'list',
    name:'opcion',
    message: '¿Que opcion deseas hacer?',
    choices: [
      {
        value:'1',
        name: '1. Crear tarea',
      },
      {
        value:'2',
        name: '2. Listar tareas',
      },
      {
        value:'3',
        name: '3. Listar tareas completadas',
      },
      {
        value:'4',
        name: '4. Listar tareas pendientes',
      },
      {
        value:'5',
        name: '5. Completar tarea(s)',
      },
      {
        value:'6',
        name: '6. Borrar tarea',
      },
      {
        value:'0',
        name: '0. Salir',
      },
    ]
  }
];

const preg = [
  {
    type:'input',
    name:'pausa',
    message: `Presione ${'ENTER'.green} para continuar`,
  }
];
const inquirerMenu = async () => {
  // console.clear();
  console.log('==========================');
  console.log(' Seleccione una opcion ');
  console.log('==========================');

  const { opcion } = await inquirer.prompt(preguntas);
  return opcion;
}

const pausa = async() => {

  return await inquirer.prompt( preg );
}




module.exports = {
  inquirerMenu, pausa
}
