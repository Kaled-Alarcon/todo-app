import "./style.css";
import todoContainerHtml from "./todo-container.html?raw";
import setupStore from "./store";
import setupController from "./controller";
import { todos } from "./todos";

const app = document.getElementById("app");

const setup = () => {
   app.innerHTML = todoContainerHtml;
};

setup();

setupStore(todos);

setupController();
