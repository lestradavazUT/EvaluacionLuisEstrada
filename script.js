const form = document.querySelector('#taskForm');
const input = document.querySelector('#taskInput');
const modal = document.querySelector('#modal');
const list = document.querySelector('#taskList');
const label = document.querySelector('.no-content');

class Task {
    constructor(desc) {
        this.description = desc;

        let d = new Date();

        this.time = d.toLocaleString();
    }

    description;
    time;
}

var tasks = [];

form.addEventListener('submit', () => {
    event.preventDefault();

    var list = new TaskList();

    input.value.length > 0
        ? list.addTask(input.value)
        : alert('Ingresa una tarea');

    tasks.length() > 0
        ? (label.style.display = 'none')
        : (label.style.display = 'block');
});

class TaskList {
    addTask(string) {
        var task = new Task(string);

        tasks.push(task);

        this.updateTasks();
    }

    updateTasks() {
        let string = '';
        let i = 1;
        tasks.forEach((task) => {
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

        list.innerHTML = string;
    }
}
