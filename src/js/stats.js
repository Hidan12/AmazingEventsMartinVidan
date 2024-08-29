function getPercentage(objetDate) {
    return objetDate.estimate ? (objetDate.estimate / objetDate.capacity) * 100 : (objetDate.assistance / objetDate.capacity) * 100
}

function filterCategory(info, propInfo){
    let infoCategory = []
    let arrCat =[]
    info.forEach(event => {
        if (!arrCat.includes(event.category)) {
            arrCat.push(event.category)
            infoCategory.push({
                category: event.category,
                revenue: (event.price * event[propInfo]),
                percentage: event.percentageAssists
            }) 

            
        }else{
            let tmp = infoCategory.find(inf => inf. category == event.category)
            tmp.revenue +=  (event.price * event[propInfo])
            tmp.percentage = (event.percentageAssists + tmp.percentage) / 2
        }
        
    })

    return infoCategory
}

function showStastCategory (idHtml, info){
    info.forEach(event =>{
        idHtml.innerHTML +=`
                            <tr>
                                <td class="text-center fw-medium">${event.category}</td>
                                <td class="text-center">${event.revenue} usd</td>
                                <td class="text-center">${(Math.floor(event.percentage * 10) / 10).toFixed(1)} (%)</td>
                            </tr>
        
        
        `
    })
}

function showPercent (idHtml, highAttendance, lowAttendance, cap){
    idHtml.innerHTML += `
                                <tr>
                                    <td class="text-center">${highAttendance.name} (${highAttendance.percentageAssists}%)</td>
                                    <td class="text-center">${lowAttendance.name} (${lowAttendance.percentageAssists}%)</td>
                                    <td class="text-center">${cap.name} (${cap.capacity})</td>
                                </tr>
            `
}

let main = () => {
    let past = []
    let upComing = []

    const tablePercent = document.getElementById("tablePercen")
    const tablePast = document.getElementById("tablePast")
    const tableUp = document.getElementById("tableUp")

    fetch("https://aulamindhub.github.io/amazing-api/events.json")
        .then(res => res.json())
        .then(json => {
            json.events.forEach((element, index) => {
                json.events[index].percentageAssists = getPercentage(element)
                if (element.date < json.currentDate) {
                    past.push(json.events[index])
                } else {
                    upComing.push(json.events[index])
                }
            });
            //ordeno de mayor o menor segun el porcentaje de asistencia
            past.sort((eventA, eventB) => eventB.percentageAssists - eventA.percentageAssists)
            upComing.sort((eventA, eventB) => eventB.percentageAssists - eventA.percentageAssists)           
            json.events.sort((eventA, eventB) => eventB.capacity - eventA.capacity)
            
            
            let highAttendance =  past[0]
            let lowAttendance = past[past.length-1]
            
            showPercent(tablePercent, highAttendance, lowAttendance, json.events[0])      
            
            let infoCategoryUp = filterCategory(upComing, "estimate")
            let infoCategoryPast = filterCategory(past, "assistance")

            showStastCategory(tableUp, infoCategoryUp)    
            showStastCategory(tablePast, infoCategoryPast)
        })

}

main()