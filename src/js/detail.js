import show from "../module/show.js";

const getUrlParam = (nameParam) =>{
  let url = window.location.href
  let objUrl = new URL(url)
  let params = objUrl.searchParams;

  return params.get(nameParam)
}


const filterEvent = (id, data)=>{
  return data.events.find(even => even._id == id)
}
// remplazar showCard por show.showDetail

const noFundEvent = (idHtml, message)=>{
  idHtml.innerHTML = `<p>${message}</p>`
}

const main = ()=>{
  const containerHtml = document.getElementById("conten")
  const idEvent = getUrlParam("id")
  
  let event = undefined
  fetch("https://aulamindhub.github.io/amazing-api/events.json")
  .then(res => res.json())
  .then(json =>{
    if(json.events.length > 0){
      event = filterEvent(idEvent, json)
      event != undefined ? show.showDetail(event, containerHtml) : noFundEvent(containerHtml, "The event you want to see is not available")
    }
  })
  .catch(error => noFundEvent(containerHtml, "The event you want to see is not availableeee"))
}
main()

  