// const inputBox = document.getElementById("input-box") as HTMLInputElement;
// const listContainer = document.getElementById("list-container") as HTMLElement;

// // funciones y condicionales para escribir y añadir nuevas tareas
// function addTask(): void {
//     if (inputBox.value === '') {
//         alert("¡Tienes que escribir alguna tarea!");
//     } else {
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
//     }
//     inputBox.value = "";
//     saveData();
// }

// // marcar y eliminar
// listContainer.addEventListener("click", function(e: Event): void {
//     const target = e.target as HTMLElement;
//     if (target.tagName === "LI") {
//         target.classList.toggle("checked");
//         saveData();
//     } else if (target.tagName === "SPAN") {
//         target.parentElement?.remove();
//         saveData();
//     }
// }, false);

// // funciones para salvar la data en el localStorage
// function saveData(): void {
//     localStorage.setItem("data", listContainer.innerHTML);
// }

// function showTask(): void {
//     const data = localStorage.getItem("data");
//     if (data) {
//         listContainer.innerHTML = data;
//     }
// }

// showTask();