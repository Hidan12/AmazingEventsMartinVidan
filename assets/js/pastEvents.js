const data = {
  currentDate: "2023-01-01",
  events: [
    {
      _id: "639c723b992482e5f2834be9",
      name: "Collectivities Party",
      image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
      date: "2022-12-12",
      description:
        "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      assistance: 42756,
      price: 5,
      __v: 0,
    },
    {
      _id: "639c723b992482e5f2834beb",
      name: "Korean style",
      image: "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
      date: "2023-08-12",
      description:
        "Enjoy the best Korean dishes, with international chefs and awesome events.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      price: 10,
      __v: 0,
      estimate: 42756,
    },
    {
      _id: "639c723c992482e5f2834bed",
      name: "Jurassic Park",
      image: "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
      date: "2022-11-02",
      description:
        "Let's go meet the biggest dinosaurs in the paleontology museum.",
      category: "Museum",
      place: "Field",
      capacity: 82000,
      price: 15,
      __v: 0,
      assistance: 65892,
    },
    {
      _id: "639c723c992482e5f2834bef",
      name: "Parisian Museum",
      image: "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
      date: "2023-11-02",
      description:
        "A unique tour in the city of lights, get to know one of the most iconic places.",
      category: "Museum",
      place: "Paris",
      capacity: 8200,
      estimate: 8200,
      price: 3500,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf1",
      name: "Comicon",
      image: "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
      date: "2022-02-12",
      description:
        "For comic lovers, all your favourite characters gathered in one place.",
      category: "Costume Party",
      place: "Room C",
      capacity: 120000,
      assistance: 110000,
      price: 54,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf3",
      name: "Halloween Night",
      image: "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
      date: "2023-02-12",
      description: "Come with your scariest costume and win incredible prizes.",
      category: "Costume Party",
      place: "Room C",
      capacity: 12000,
      estimate: 9000,
      price: 12,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf5",
      name: "Metallica in concert",
      image: "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
      date: "2023-01-22",
      description: "The only concert of the most emblematic band in the world.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      estimate: 138000,
      price: 150,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf7",
      name: "Electronic Fest",
      image: "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
      date: "2022-01-22",
      description:
        "The best national and international DJs gathered in one place.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      assistance: 110300,
      price: 250,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834bf9",
      name: "10K for life",
      image: "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
      date: "2022-03-01",
      description: "Come and exercise, improve your health and lifestyle.",
      category: "Race",
      place: "Soccer field",
      capacity: 30000,
      assistance: 25698,
      price: 3,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834bfb",
      name: "15K NY",
      image: "https://i.postimg.cc/zv67r65z/15kny.jpg",
      date: "2023-03-01",
      description:
        "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
      category: "Race",
      place: "New York",
      capacity: 3000000,
      price: 3,
      __v: 0,
      estimate: 2569800,
    },
    {
      _id: "639c723d992482e5f2834bfd",
      name: "School's book fair",
      image: "https://i.postimg.cc/Sst763n6/book1.jpg",
      date: "2023-10-15",
      description: "Bring your unused school book and take the one you need.",
      category: "Book Exchange",
      place: "Room D1",
      capacity: 150000,
      estimate: 123286,
      price: 1,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834bff",
      name: "Just for your kitchen",
      image: "https://i.postimg.cc/05FhxHVK/book4.jpg",
      date: "2022-11-09",
      description:
        "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
      category: "Book Exchange",
      place: "Room D6",
      capacity: 130000,
      assistance: 90000,
      price: 100,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834c01",
      name: "Batman",
      image: "https://i.postimg.cc/vH52y81C/cinema4.jpg",
      date: "2022-3-11",
      description: "Come see Batman fight crime in Gotham City.",
      category: "Cinema",
      place: "Room D1",
      capacity: 11000,
      assistance: 9300,
      price: 225,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834c03",
      name: "Avengers",
      image: "https://i.postimg.cc/T3C92KTN/scale.jpg",
      date: "2023-10-15",
      description:
        "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
      category: "Cinema",
      place: "Room D1",
      capacity: 9000,
      estimate: 9000,
      price: 250,
      __v: 0,
    },
  ],
};





function filterFech(info) {
  fechaPresente = new Date(info.currentDate)
  let temp = []
  info.events.forEach(even => {
    let fechaItems = new Date(even.date)
    if (fechaItems < fechaPresente) {
      temp.push(even)
    }
  });

  return temp

}


data.events = filterFech(data)


//mostrado y creacion de tarjetas
function createCards(idHtml, objet) {
  idHtml.innerHTML += `
            <div class="card col-sm-8 col-md-5 col-xl-3">
                <img src=${objet.image} class="card-img-top object-fit-cover p-2 heigth-img" alt="...">
                <div class="card-body body-card-heigth d-flex flex-column justify-content-between">
                  <div>
                    <h5 class="card-title">${objet.name}</h5>
                    <p class="card-text">${objet.description}</p>
                  </div>
                  <div class="d-flex flex-row justify-content-between align-items-center">
                        <p class="card-text">Price: ${objet.price}</p>
                        <a href="./details.html?id=${objet._id}" class="btn btn-primary">Details</a>
                  </div>
                </div>
            </div>

    `
}

//estilos de checkbox
const selecCheck = (labelHTML) => {
  labelHTML.classList.remove("border-black");
  labelHTML.classList.add("border-primary");
}
const unselectCheck = (labelHTML) => {
  labelHTML.classList.remove("border-primary");
  labelHTML.classList.add("border-warning");
}



const showCategory = (category, contCategory, id, arcat, contentHtml) => {

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
      filters(arcat, document.getElementById("search").value.trim(), contentHtml)
    } else {
      let pos = arcat.findIndex(p => p.id == id)
      arcat.splice(pos, 1)

      if (arcat.length > 0) {

        //filtro los elementos 
        filters(arcat, document.getElementById("search").value.trim(), contentHtml)

      } else {
        filters([], document.getElementById("search").value.trim(), contentHtml)
      }
      //cambio de color el checks para que se note que no esta seleccinado
      unselectCheck(label)
    }

  });

};
const showCardCategory = (data, checksFilter) => {
  let category = []
  const selecClass = document.querySelector(".cardJs")
  const categoryHtml = document.getElementById("category")
  const inputSearch = document.getElementById("search")
  const buttonSearch = document.getElementById("searchButton")

  data.events.forEach(events => {
    createCards(selecClass, events)
    if (!category.includes(events.category)) {
      category.push(events.category)
      showCategory(events.category, categoryHtml, category.length, checksFilter, selecClass)
    }
  });

  inputSearch.addEventListener("keyup", () => {
    let conten = inputSearch.value.trim()
    if (conten != "") {
      filters(checksFilter, conten.toLocaleLowerCase(), selecClass)
    } else {
      filters(checksFilter, "", selecClass)
    }
  })
  buttonSearch.addEventListener("click", () => {
    filters(checksFilter, inputSearch.value.trim().toLocaleLowerCase(), selecClass)
  })
}



//filtro
const filterString = (string, stringSearch) => {
  return string.toLocaleLowerCase().includes(stringSearch)
}

const filters = (arrayChecks, inputSearch, html) => {
  //borro el contenido de la classe html
  html.innerHTML = ""
  let bandFind = false
  //verifico que tipo de filtro viene
  if (arrayChecks.length > 0 && inputSearch != "") {

    //filtro los elementos segun corresponde, si lo encuentro lo mando a createcard para que me lo muestre en pantalla
    data.events.forEach(events => {
      if (arrayChecks.some(ch => ch.category == events.category) && (filterString(events.name, inputSearch) || filterString(events.description, inputSearch))) {
        createCards(html, events)
        bandFind = true
      }
    })
    if (!bandFind) {
      html.innerHTML = "<p>No element was found with the filter applied</p>"
    }

  } else if (arrayChecks.length > 0 && inputSearch == "") {

    data.events.forEach(events => {
      if (arrayChecks.some(ch => ch.category == events.category)) {
        createCards(html, events)
        bandFind = true
      }
    })
    if (!bandFind) {
      html.innerHTML = "<p>No element was found with the filter applied</p>"
    }
  } else {

    data.events.forEach(events => {
      if (filterString(events.name, inputSearch) || filterString(events.description, inputSearch)) {
        createCards(html, events)
        bandFind = true
      }
    })
    if (!bandFind) {
      html.innerHTML = "<p>No element was found with the filter applied</p>"
    }

  }
}

//principal
function main(data) {
  showCardCategory(data, [])
}

main(data)



