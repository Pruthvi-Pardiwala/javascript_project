fetch("https://api.rootnet.in/covid19-in/stats/latest")
  .then(response => response.json())
  .then(data => {

    const summary = data.data.summary;
    // console.log(summary);

    let india_output = `
      <div class="col-4 p-3">
        <div class="d-flex flex-column text-center">
            <p>Recorded Deaths</p>
            <i class="fa-solid fa-skull-crossbones mb-3" style="font-size: 80px;"></i>
            <p> ${summary.deaths}</p>
        </div>
      </div>
      <div class="col-4 p-3">
        <div class="d-flex flex-column text-center">
            <p>Cumulative Cases</p>
            <i class="fa-solid fa-virus mb-3" style="font-size: 80px;"></i>
            <p> ${summary.confirmedCasesIndian}</p>
        </div>
      </div>
      <div class="col-4 p-3">
        <div class="d-flex flex-column text-center">
            <p>Patients Recovered</p>
            <i class="fas fa-heartbeat mb-3" style="font-size: 80px;"></i>
            <p> ${summary.discharged}</p>
        </div>
        </div>
      </div>
    `;
    document.getElementById("india").innerHTML = india_output;

    let state_output = "";
    data.data.regional.forEach(city => {
      state_output += `
        <div class="col-4 mb-3 p-4 rounded-2">
            <h4>${city.loc}</h4>
            <hr>
            <p>- Confirmed: ${city.confirmedCasesIndian}</p>
            <p>- Deaths: ${city.deaths}</p>
            <p>- Recovered: ${city.discharged}</p>
        </div>
      `;
    });

    document.getElementById("state").innerHTML = state_output;

    let top5 = [...data.data.regional]
      .sort((a, b) => b.deaths - a.deaths)
      .slice(0, 5);

    let top5_output = `
      <h3 class="mb-3">Top 5 States by Deaths</h3>
      <ul class="list-group">
    `;

    top5.forEach((state, index) => {
      top5_output += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          ${index + 1}. ${state.loc}
          <span class="badge bg-danger ">
            ${state.deaths}
          </span>
        </li>
      `;
    });

    top5_output += `</ul>`;

    document.getElementById("top_5").innerHTML = top5_output;


      let top5Recovery = [...data.data.regional]
        .sort((a, b) => b.discharged - a.discharged)
        .slice(0, 5);

      let recovery_output = `
        <h3 class="mb-3 ">Top 5 States by Recovery</h3>
        <ul class="list-group">
      `;

      top5Recovery.forEach((state, index) => {
        recovery_output += `
          <li class="list-group-item d-flex justify-content-between align-items-center">
            ${index + 1}. ${state.loc}
            <span class="badge bg-success">
              ${state.discharged}
            </span>
          </li>
        `;
      });

      recovery_output += `</ul>`;

      document.getElementById("top_5r").innerHTML = recovery_output;

      
      })
      
  .catch(error => console.error(error));
         