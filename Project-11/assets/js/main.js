// let city = "surat";
// let city = prompt("Enter the name of city :- ");
// let city = document.getElementById(city);
// console.log(city);
alert("Zip code and country Code is not necessary");
const apikey = "825cdf6beccfb177d23dc802bc578141";

const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const myCity = document.getElementById('city').value;
    // const myCity = "surat";
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${myCity}&units=metric&appid=${apikey}`)
        .then(response => response.json())
        .then(data => {
            const unixTime = data.dt;
            const timezoneOffset = data.timezone;

            const localTime = new Date((unixTime + timezoneOffset) * 1000);

            const formattedDate = localTime.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                });
            const now = new Date();

            const time = now.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false
            });
            // console.log(time);
            console.log(data);

            let output = `
            <div class="row">
                <h3 class="date mb-0 text-white">${formattedDate}</h3>
                <h1 class="time text-white">${time}</h1>
            </div>
            <div class="row">
                <div class=" col-4">
                    <p class="text-center mb-2 text-white fw-semi-bold" style="font-size:22px";>Temp</p>
                    <p class="text-center text-white" style="font-size:16px";>${data.main.temp}</p>
                </div>
                <div class=" col-4">
                    <p class="text-center mb-2 text-white fw-semi-bold" style="font-size:22px";>Humidity</p>
                    <p class="text-center text-white" style="font-size:16px";>${data.main.humidity}</p>
                </div>
                <div class=" col-4">
                    <p class="text-center mb-2 text-white fw-semi-bold" style="font-size:22px";>Wind</p>
                    <p class="text-center text-white" style="font-size:16px";>${data.wind.speed}</p>
                </div>
            </div>
            `;
            let main = document.getElementById("main-box");
            document.getElementById("main-box").innerHTML = output;
            // document.getElementById("main-box").style.
            main.classList.add("trans");
        });
});
