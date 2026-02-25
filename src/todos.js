import setupStore from "./store";
import generateUUID from "./utils/uuid-generator";

let todos = [];

const addTodo = (title) => {
   const task = {
      id: generateUUID(),
      title: title,
      checked: false,
      createdAt: new Date(),
   };

   todos.push(task);
   setupStore(todos);
   return task;
};

const checkTodo = (id) => {
   let newTodos = todos.map((task) => {
      if (task.id === id) {
         task.checked = !task.checked;
      }

      return task;
   });

   todos = newTodos;
   setupStore(todos);
   return todos;
};

const clearAll = () => {
   todos = [];
   setupStore(todos);
};

const clearCompleted = () => {
   const newTodos = todos.filter((task) => {
      if (task.checked === false) {
         return task;
      }
   });

   const deletedTodos = todos.filter((task) => {
      if (task.checked === true) {
         return task;
      }
   });

   todos = newTodos;
   setupStore(todos);
   return deletedTodos;
};

export { todos, addTodo, checkTodo, clearAll, clearCompleted };
