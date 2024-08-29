import { showCardCategory, filterApi } from "../module/filter.js";
import show from "../module/show.js";


//principal
function main() {
  const html = document.querySelector(".cardJs")
  fetch("https://aulamindhub.github.io/amazing-api/events.json")
    .then(res => res.json())
    .then(data => {
      data.events = filterApi("upComing", data)
      if (data.events.length > 0) {
        showCardCategory(data, [], "")
      } else {
        show.showEror(html)
      }
    })
    .catch(error => {      
        show.showEror(html)
    })

}

main()
