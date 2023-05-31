/* Elementos HTML */
const form = document.querySelector('#taskForm');
const input = document.querySelector('#taskInput');
const modal = document.querySelector('#modal');
const taskList = document.querySelector('#taskList');
const label = document.querySelector('.no-content');

/* Clase para las tareas y su informacion */
class Task {
    /* Constructor de la clase que solicita una descripcion de la tarea y genera la fecha de creacion */
    constructor(desc) {
        this.description = desc;

        let d = new Date();

        this.time = d.toLocaleString();
    }

    description;
    time;
}

/* Clase de la lista de tareas con sus funciones  */
class TaskList {
    tasks = [];

    /* Funcion para añadir las tareas a la lista */
    addTask(string) {
        var task = new Task(string);

        this.tasks.push(task);

        input.value = '';

        this.updateTasks();
    }

    /* Funcion para actualizar los elementos HTML de la lista */
    updateTasks() {
        let string = '';
        let i = 1;
        this.tasks.forEach((task) => {
            string += `
            <li class="task">
                <span class="taskIterator">
                    ${i}
                </span>
                <h2 class="taskDesc">
                    ${task.description}
                </h2>

                <span class="taskDate">
                    ${task.time}
                </span>
            </li>
        `;
            i++;
        });

        taskList.innerHTML = string;
    }
}

/* Inicializacion de la lista de tareas */
var list = new TaskList();

/* Listener que se activa al hacer el submit del form, con condicionales que verifican el contenido del INPUT */
form.addEventListener('submit', (e) => {
    /* Funcion que nos permite evitar que el sumbit del formulario recargue la pagina */
    e.preventDefault();

    input.value.length > 0
        ? list.addTask(input.value)
        : alert('Ingresa una tarea');

    list.tasks.length > 0
        ? (label.style.display = 'none')
        : (label.style.display = 'block');
});
