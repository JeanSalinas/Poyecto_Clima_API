let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = 'b6479bf62adc2a9d13957b7b80593090'
let units = 'metric';
let lang = 'es'

document.getElementById('buscar').addEventListener('click', () => {
    const ciudad = document.getElementById('datosEntrada').value
    if (ciudad) {
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}&units=${units}&lang=${lang}`)
        .then(data => data.json())
        .then(data => mostrarDatosClima(data))
        .catch(error => console.error('Error al obtener datos', error))
}

function mostrarDatosClima(data) {
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''

    const nombreCiudad = data.name
    const paisCiudad = data.sys.country
    const temperaturaCiudad = data.main.temp
    const descripcionCiudad = data.weather[0].description

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${nombreCiudad},${paisCiudad}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.innerHTML = `La temperatura de la ciudad es de <b>${temperaturaCiudad}°C</b>`

    const infoCiudad = document.createElement('p')
    infoCiudad.innerHTML = `El cielo cuenta con <b>${descripcionCiudad}</b>`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(infoCiudad)
}