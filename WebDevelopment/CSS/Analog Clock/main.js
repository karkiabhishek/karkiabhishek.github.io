// Clock
const hour = document.getElementById('clock-hour'),
      minutes = document.getElementById('clock-minutes'),
      seconds = document.getElementById('clock-seconds')

const clock = () =>{
    let date = new Date()

    let hh = date.getHours()*30,
        mm = date.getMinutes()*6,
        ss = date.getSeconds()*6     

        // We add a rotation to the elements
        hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
        minutes.style.transform = `rotateZ(${mm}deg)`
        seconds.style.transform = `rotateZ(${ss}deg)`
}  

// Full circle length is equal to 360 degrees. We need to calculate degrees per time unit "tick".

// With minute and second it is easy:
// 360deg / 60 min = 6 (deg per minute),
// 360deg / 60 sec = 6 (deg per second).

// With hours a bit other. Full day is 24 hours, but clock watch is only show 12 hours (am or pm). So hour's tick will be:
// 360deg / 12 hours = 30 (deg per hour)

setInterval(clock, 1000) //1000 = 1s

// Clock and Date Text
const textHour = document.getElementById('text-hour'),
      textMinutes = document.getElementById('text-minutes'),
      textAmPm = document.getElementById('text-ampm'),
      dateDay = document.getElementById('date-day'),
      dateMonth = document.getElementById('date-month'),
      dateYear = document.getElementById('date-year')

const clockText = () =>{
    let date = new Date()

    let hh = date.getHours(),
        ampm,
        mm = date.getMinutes(),
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear()
     
// We change the hours from 24 to 12 hours and establish it is AM or PM
if(hh >= 12){
    hh = hh - 12
    ampm = 'PM'
}else{
    ampm = 'AM'
}

// We detect when it's 0 AM and transform to 12 AM
if(hh == 0){hh = 12}

// Show a zero before hours
if(hh < 10){hh = `0${hh}`}

// Show Time
textHour.innerHTML = `${hh}:`

// Show a zero before the minutes
if(mm < 10){mm = `0${mm}`}

// Show minutes
textMinutes.innerHTML = mm

// Show am or pm
textAmPm.innerHTML = ampm

// We get the months of the year and show it
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

// We show the day, the month and the year
dateDay.innerHTML = day
dateMonth.innerHTML = `${months[month]},`
dateYear.innerHTML = year

}
setInterval(clockText, 1000) 

// Dark/Light Theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
