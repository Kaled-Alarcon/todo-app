const setupStore = (todosList) => {
   localStorage.setItem("store", JSON.stringify(todosList));
};

export default setupStore;
