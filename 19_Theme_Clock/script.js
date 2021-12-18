const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = ['Sunday', 'Monday', 'Tueday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Dark Mode - add or remove the class of dark and change the text
toggle.addEventListener('click', (e) => {
const html = document.querySelector('html')

if (html.classList.contains('dark')) {
    html.classList.remove('dark')
    e.target.innerHTML = 'Dark Mode'
} else {
    html.classList.add('dark')
    e.target.innerHTML = 'Light Mode'
}
})

// clocks

function setTime() {
    const time = new Date();
    // console.log(time)
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    // hours for clock
    const hoursForClock = hours % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
// mapping hour, mins and secs to deg so that clock rotates
hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

// setting the digital clock
timeEl.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}`: minutes}`
dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

    // StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;

}

setTime()

// getting clock to 'tick' we have to recall setTime function every 1second  = 1000 ms
setInterval(setTime, 1000)