import { filters } from "./filter.js";
//estilos de checkbox
const selecCheck = (labelHTML) => {
    labelHTML.classList.remove("border-black");
    labelHTML.classList.add("border-primary");
}

const unselectCheck = (labelHTML) => {
    labelHTML.classList.remove("border-primary");
    labelHTML.classList.add("border-bt");
}

export default {
    showCard: (idHtml, objet, pag) => {
        idHtml.innerHTML += `
            <div class="card col-11 col-sm-8 col-md-5 col-xl-3">
                <img src=${objet.image} class="card-img-top object-fit-cover p-2 heigth-img" alt="...">
                <div class="card-body body-card-heigth d-flex flex-column justify-content-between">
                  <div>
                    <h5 class="card-title">${objet.name}</h5>
                    <p class="card-text">${objet.description}</p>
                  </div>
                  <div class="d-flex flex-row justify-content-between align-items-center">
                        <p class="card-text m-0">Price: $${objet.price}</p>
                        <a href="${pag == "home" ? "./views/details.html" : "./details.html"}?id=${objet._id}" class="btn btn-primary">Details</a>
                  </div>
                </div>
            </div>

    `
    },
    showCategory: (category, contCategory, id, arcat, contentHtml, data, pag) => {
        // Crear el contenedor del input y label
        const div = document.createElement("div");
        div.id = "cont" + id;
        div.className = "mx-1"

        // Crear el input y el label
        const input = document.createElement("input");
        input.className = "btn-check";
        input.type = "checkbox";
        input.id = "inp" + id;
        input.value = category;

        const label = document.createElement("label");
        label.className = "btn btn-outline-dark";
        label.id = "l" + id;
        label.htmlFor = input.id;
        label.textContent = category;

        // Añadir el input y el label al contenedor
        div.appendChild(input);
        div.appendChild(label);
        contCategory.appendChild(div);

        // Añadir el event listener de cada check
        input.addEventListener("change", () => {
            const inputs = document.getElementById("inp" + id)
            const label = document.getElementById("l" + id)
            if (inputs.checked) {
                //lo añado a un array para ver que filtro se aplico
                arcat.push({
                    id: id,
                    category: category
                })
                selecCheck(label)
                filters(arcat, document.getElementById("search").value.trim(), contentHtml, data, pag)
            } else {
                let pos = arcat.findIndex(p => p.id == id)
                arcat.splice(pos, 1)

                if (arcat.length > 0) {

                    //filtro los elementos 
                    filters(arcat, document.getElementById("search").value.trim(), contentHtml, data, pag)

                } else {
                    filters([], document.getElementById("search").value.trim(), contentHtml, data, pag)
                }
                //cambio de color el checks para que se note que no esta seleccinado
                unselectCheck(label)
            }

        });

    },
    showEror: (idHtml) => {
        idHtml.innerHTML = `<p class="card-text">We are having trouble getting the information, please try again later.</p>`
    },
    showDetail: (event, idHtml) => {
        idHtml.innerHTML = `
                        <div class="row g-0 col-12 justify-content-around">
                            <div class="col-md-4 d-flex flex-column align-items-center justify-content-center">
                                <img src=${event.image} class="img-fluid rounded-start align-middle img-detail w-100 object-fit-cover" alt="...">
                            </div>
                            <div class="col-md-6">
                                <div class="card-body">
                                    <h5 class="card-title">${event.name}</h5>
                                    <p class="card-text">${event.description}</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item d-flex justify-content-between">
                                        <p class="card-text col-5 text-start">Date: ${event.date}</p>
                                        <p class="card-text col-5 text-start">Place: ${event.place}</p>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between">
                                        <p class="card-text text-start col-5">Capacity: ${event.capacity}</p>
                                        <p class="card-text text-start col-5">Category: ${event.category}</p>
                                        </li>
                                        <li class="list-group-item text-center d-flex justify-content-between">
                                        ${event.estimate ? `<p class="card-text col-5 text-start"><small class="text-body-secondary">Estimate: ${event.estimate}</small></p>` : ""}
                                        ${event.assistance ? `<p class="card-text col-5 text-start"><small class="text-body-secondary">Assistance: ${event.assistance}</small></p>` : ""}
                                        <p class="card-text text-start col-5">Price: $${event.price}</p>
                                    </li>
                                </ul>
                                    
                            </div>
                        </div>
`
    }
}