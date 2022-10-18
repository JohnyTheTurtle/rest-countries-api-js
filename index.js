const url_api = "https://restcountries.com/v3.1/all"
const allRegions = ["africa", "america", "antarctic", "asia", "europe", "oceania"]

const createCountry = function(countryAPI){
    const main = document.querySelector(".main")
    const country = document.createElement("div")
    country.className = "country"
    const flag = document.createElement("img")
    flag.src = countryAPI.flags.svg
    flag.alt = countryAPI.common
    const name = document.createElement("h3")
    name.id = "name"
    name.innerText = countryAPI.name.common
    const population = document.createElement("h4")
    population.innerText = "Population: " + countryAPI.population
    const region = document.createElement("h4")
    region.id = "region"
    region.innerText = "Region: " + countryAPI.region
    const capital = document.createElement("h4")
    capital.id = "capital"
    capital.innerText = "Capital: " + countryAPI.capital
    country.append(flag, name, population, region, capital)
    main.append(country)
}

const filerByRegion = function(){
    const filterSelector = document.getElementById("search-by-region")
    const allCountries = document.querySelectorAll(".country")
    for(let i = 0; i <allCountries.length; i++){
        if(filterSelector.value === "All"){
            allCountries[i].classList.remove("filtered-out")
        } else {
            const countryRegion = allCountries[i].querySelector("#region").innerText.replace("Region: ", "")
        
            if(countryRegion === filterSelector.value){
                allCountries[i].classList.remove("filtered-out")
            } else{
                allCountries[i].classList.add("filtered-out")
            }   
        }
    }
}
const filterByCountry = function() {
    const filterSelector = document.getElementById("search-by-name")
    const allCountries = document.querySelectorAll(".country")
    console.log(allCountries)

            console.log("true")
            for(let i = 0; i < allCountries.length; i++){
                const countryName= allCountries[i].querySelector("#name").innerText
                console.log(countryName)
                if(countryName.toLowerCase() === filterSelector.value.toLowerCase()){
                    allCountries[i].classList.remove("filtered-out")
                } else{
                    allCountries[i].classList.add("filtered-out")
                }       
            }
        

}

const fetchCountries = async() => {
    const apireply = await fetch(url_api)
    const data = await apireply.json()
    data.map(country => createCountry(country))
 }   
 fetchCountries()



