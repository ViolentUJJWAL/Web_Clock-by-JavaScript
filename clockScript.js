function hourGraph(i) {
	if (i==1){
		return "60px"
	}
	else if (i==2){
		return "120px"
	}
	else if (i==3){
		return "170px"
	}
	else if (i==4){
		return "230px"
	}
	else if (i==5){
		return "280px"
	}
	else if (i==6){
		return "340px"
	}
	else if (i==7){
		return "390px"
	}
	else if (i==8){
		return "450px"
	}
	else if (i==9){
		return "500px"
	}
	else if (i==10){
		return "550px"
	}
	else if (i==11){
		return "610px"
	}
	else if (i==12){
		return "660px"
	}
	else{
		return "660px"
	}
}

function minSecGraph(i) {
	if (i<=5){
		return "60px"
	}
	else if (i<=10){
		return "120px"
	}
	else if (i<=15){
		return "170px"
	}
	else if (i<=20){
		return "230px"
	}
	else if (i<=25){
		return "280px"
	}
	else if (i<=30){
		return "340px"
	}
	else if (i<=35){
		return "390px"
	}
	else if (i<=40){
		return "450px"
	}
	else if (i<=45){
		return "500px"
	}
	else if (i<=50){
		return "550px"
	}
	else if (i<=55){
		return "610px"
	}
	else if (i<=60){
		return "660px"
	}
	else{
		return "660px"
	}
}

function ampmGraph(i) {
	if (i<=12){
		return "340px"
	}
	else{
		return "660px"
	}
}

function week(j) {
	switch (j) {
		case 1:
			return "Monday"
		case 2:
			return "Tuersday"
		case 3:
			return "Wednesday"
		case 4:
			return "Thursday"
		case 5:
			return "Friday"
		case 6:
		 	return "saturday"
		case 7:
			return "Sunday"
	}
}

function month(i) {
	switch (i) {
		case 1:
			return "January"
		case 2:
			return "February"
		case 3:
			return "March"
		case 4:
			return "April"
		case 5:
			return "May"
		case 6:
			return "June"
		case 7:
			return "July"
		case 8:
			return "August"
		case 9:
			return "September"
		case 10:
			return "October"
		case 11:
			return "November"
		case 12:
			return "December"
	}
}


let timeId = setInterval(function() {

	let currentDate = new Date()
	let h = currentDate.getHours()
	let m = currentDate.getMinutes()
	let s = currentDate.getSeconds()
	let ampm ="AM"
	let ap = h
	let date = currentDate.getDate()
	let day = week(currentDate.getDay())
	let fullmonth = month(currentDate.getMonth() + 1)
	let year = currentDate.getFullYear()
	if (5<=h && h<12){
		document.body.style.backgroundImage = "url('https://wallpaper.dog/large/20509902.jpg')"	
	}
	else if (12<=h && h<16) {
		document.body.style.backgroundImage = "url('https://c4.wallpaperflare.com/wallpaper/329/443/707/forest-path-fall-leaves-wallpaper-preview.jpg')"
		heading.style.color = "white"
	}
	else if (16<=h && h<=21){
		document.body.style.backgroundImage = "url('https://wallpaper.dog/large/20414988.jpg')"
		heading.style.color = "cyan"
	}
	else {
		document.body.style.backgroundImage = "url('https://images.alphacoders.com/514/514042.jpg')"
		heading.style.color = "white"
	}
	timeDate.innerHTML = `<pre><b>${date} ${fullmonth} ${year}, ${day}</b>    ${currentDate.toLocaleTimeString()}</pre>`
	if (h>12){
		h = h - 12
		ampm = "PM"
	}
	else if (h==0) {
		h=12
	}
	hours.style.width=hourGraph(h)
	if (h>=6){
		hours.innerHTML = `${h} HOURS`
	}
	else{
		hourPera.innerHTML = `${h} HOURS`
	}
	minutes.style.width=minSecGraph(m)
	if (m>=30){
		minutes.innerHTML = `${m} MINUTES`
		minPera.innerHTML = ``
	}
	else{
		minPera.innerHTML = `${m} MINUTES`
		minutes.innerHTML = ``
	}
	socend.style.width=minSecGraph(s)
	if (s>=30){
		socend.innerHTML = `${s} SECONDS`
		secPera.innerHTML = ``
	}
	else{
		secPera.innerHTML = `${s} SECONDS`
		socend.innerHTML = ``
	}
	ampmG.style.width=ampmGraph(ap)
	ampmG.innerHTML = ampm


}, 1000)
