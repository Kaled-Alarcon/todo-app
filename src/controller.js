import { todos, addTodo, checkTodo, clearAll, clearCompleted } from "./todos";

const setupController = () => {
   const todoInput = document.getElementById("todo-input");

   const todoTasksContainer = document.getElementById("todo-tasks-container");

   const todoTasksCountLabel = document.getElementById("todo-pending-label");

   // const todoCompletedLabel = document.getElementById("todo-completed-label");

   const todoClearButton = document.getElementById("todo-clear");

   const todoClearCompletedButton = document.getElementById("todo-clear-completed");

   todoInput.addEventListener("change", (ev) => {
      if (ev.target.value === "" || ev.target.value === undefined) {
         return;
      }

      const task = addTodo(ev.target.value);
      const taskDiv = document.createElement("div");
      taskDiv.classList.add("todo-task-card");
      taskDiv.id = task.id;
      const taskCheckInput = document.createElement("input");
      taskCheckInput.type = "checkbox";
      taskCheckInput.checked = task.checked;
      const taskTitle = document.createElement("span");
      taskTitle.textContent = task.title;

      taskDiv.appendChild(taskCheckInput);
      taskDiv.appendChild(taskTitle);
      todoTasksContainer.appendChild(taskDiv);

      todoTasksCountLabel.textContent = `${todos.length} tarea/s`;

      taskCheckInput.addEventListener("change", () => {
         checkTodo(task.id);

         taskDiv.classList.toggle("checked");
      });

      ev.target.value = "";
   });

   todoClearButton.addEventListener("click", () => {
      clearAll();
      todoTasksContainer.innerHTML = "";
      todoTasksCountLabel.textContent = `Sin tareas`;
   });

   todoClearCompletedButton.addEventListener("click", () => {
      const deletedTasks = clearCompleted();

      deletedTasks.forEach((task) => {
         const taskFind = document.getElementById(task.id);
         taskFind.remove();
      });

      if (todos.length === 0) {
         todoTasksCountLabel.textContent = "Sin tareas";
         return;
      }

      todoTasksCountLabel.textContent = `${todos.length} tarea/s`;
   });
};

export default setupController;
