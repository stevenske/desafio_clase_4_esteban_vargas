let price = 0
let discount = 0
let spain = 1800
let france = 2200
let england = 2100

let name = prompt("hi!! what's your name?")
alert(`hi ${name} welcome to TrainTrips!!`)

alert("we have 10% discount trip in the next countries:Spain, France, and England")

let trip = prompt("write the country that you want to trip!!").toLowerCase()

function discount10 (a,b){
    return a - (a * b)
}

while(trip !='esc'){
    switch (trip){
        case 'spain':
            price = spain
            discount = discount10(spain,0.10)
            alert(`the price of the trip to ${trip} is $${price} and with the 10% discount the total is ${discount}`)
            break
        case 'france':
            price = france
            discount = discount10(france,0.10)
            alert(`the price of the trip to ${trip} is $${price} and with the 10% discount the total is ${discount}`)
            break
            case 'england':
                price = england
                discount = discount10(england,0.10)
                alert(`the price of the trip to ${trip} is $${price} and with the 10% discount the total is ${discount}`)
                break
            case '':
                alert('please write a country')
                break
            default:
            alert("we don't have that country in discount")
            break
        }
    trip = prompt("write another country that you want to trip or write esc!!").toLowerCase()
}


//INTENTO FALLIDO 1
// if(trip == 'spain'){
//     price = spain
//     discount = discount10(spain,0.10)
// }else if(trip == 'france'){
//     price = france
//     discount = discount10(france,0.10)
// }else if(trip == 'england'){
//     price = england
//     discount = discount10(france,0.10)
// }else if (trip == ''){
//     while (trip == ''){
//         alert('please write a country in offert (Spain, France or England)')
//         trip = prompt("write the country that you want to trip!!").toLowerCase()
//     }
// }else{
//     alert("we don't have this country in trip offerts")
// }

// alert(`the price of the trip to ${trip} is $${price} and with the 10% discount the total is ${discount}`)




// INTENTO FALLIDO 2
// while(trip == ''){
//     if(trip == 'spain'){
//         price = spain
//         discount = discount10(spain,0.10)
//     }else if(trip == 'france'){
//         price = france
//         discount = discount10(france,0.10)
//     }else if(trip == 'england'){
//         price = england
//         discount = discount10(france,0.10)
//     }else{
//         alert('please write a country in offert (Spain, France or England)')
//         trip = prompt("write the country that you want to trip!!").toLowerCase()
//     }
// }

