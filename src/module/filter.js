import show from "./show.js";

const filterString = (string, stringSearch) => {
    return string.toLocaleLowerCase().includes(stringSearch)
}

export const filters = (arrayChecks, inputSearch, html, data, pag) => {
    //borro el contenido de la classe html
    html.innerHTML = ""
    let bandFind = false
    //verifico que tipo de filtro viene
    if (arrayChecks.length > 0 && inputSearch != "") {
        //filtro los elementos segun corresponde, si lo encuentro lo mando a createcard para que me lo muestre en pantalla
        data.events.forEach(events => {
            if (arrayChecks.some(ch => ch.category == events.category) && (filterString(events.name, inputSearch) || filterString(events.description, inputSearch))) {
                show.showCard(html, events, pag)
                bandFind = true
            }
        })
        if (!bandFind) {
            html.innerHTML = "<p>No element was found with the filter applied</p>"
        }

    } else if (arrayChecks.length > 0 && inputSearch == "") {

        data.events.forEach(events => {
            if (arrayChecks.some(ch => ch.category == events.category)) {
                show.showCard(html, events, pag)
                bandFind = true
            }
        })
        if (!bandFind) {
            html.innerHTML = "<p>No element was found with the filter applied</p>"
        }
    } else {

        data.events.forEach(events => {
            if (filterString(events.name, inputSearch) || filterString(events.description, inputSearch)) {
                show.showCard(html, events, pag)
                bandFind = true
            }
        })
        if (!bandFind) {
            html.innerHTML = "<p>No element was found with the filter applied</p>"
        }

    }
}


export const showCardCategory = (data, checksFilter, pag) => {
    let category = []
    const selecClass = document.querySelector(".cardJs")
    const categoryHtml = document.getElementById("category")
    const inputSearch = document.getElementById("search")
    const buttonSearch = document.getElementById("searchButton")
  
    data.events.forEach(events => {
      show.showCard(selecClass, events, pag)
      if (!category.includes(events.category)) {
        category.push(events.category)
        show.showCategory(events.category, categoryHtml, category.length, checksFilter, selecClass, data, pag)
      }
    });
  
    inputSearch.addEventListener("keyup", () => {
      let conten = inputSearch.value.trim()
      if (conten != "") {
        filters(checksFilter, conten.toLocaleLowerCase(), selecClass, data, pag)
      } else {
        filters(checksFilter, "", selecClass, data, pag)
      }
    })
    buttonSearch.addEventListener("click", () => {
      filters(checksFilter, inputSearch.value.trim().toLocaleLowerCase(), selecClass, pag)
    })
  }