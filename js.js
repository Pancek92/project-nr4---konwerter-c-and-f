const converter = document.querySelector('#converter')
const results = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
let fahrenheit
let celcius

// T(°F) = T(°C) * 1.8 + 32
// T(°C) = (T(°F) - 32) / 1.8


const change = () => {
    if(one.textContent === '°C') {
        one.textContent = '°F'
        two.textContent = '°C'
        results.textContent = ''
    } else {
        one.textContent = '°C'
        two.textContent = '°F'
        results.textContent = ''
    }
}

const farToCel = () => {
    if(one.textContent === '°C') {
        fahrenheit = converter.value * 1.8 + 32
        results.textContent = `${converter.value} °C to ${fahrenheit.toFixed(1)} °F`
        converter.value = ''
    }
}

const celToFar = () => {
    if(one.textContent === '°F') {
        celcius = (converter.value - 32) / 1.8
        results.textContent = `${converter.value} °F to ${celcius.toFixed(1)} °C`
        converter.value = ''
    }
}

const conversion = () => {
    if(converter.value !== ''){
        if(one.textContent === '°C') {
            farToCel()
        } else {
            celToFar()
        }
    } else {
        results.textContent = 'Musisz podać jakąś wartość'
    }
}

const reset = () => {
    converter.value = ''
    results.textContent = ''
}


changeBtn.addEventListener('click', change)
convBtn.addEventListener('click', conversion)
resetBtn.addEventListener('click', reset)