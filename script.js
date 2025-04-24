function getWeather() {
    const location = document.getElementById("locationInput").value.trim();
  
    if (!location) {
      document.getElementById("result").innerHTML = `<span style="color:red;">Please enter a location.</span>`;
      return;
    }
  
    const apiKey = "b80dc9d4f0974d5e9d3181224250902";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(location)}&aqi=yes`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Location not found or invalid.");
        }
        return response.json();
      })
      .then(data => {
        const temp = data.current.temp_c;
        const condition = data.current.condition.text;
        document.getElementById("result").innerHTML = `
          <strong>${data.location.name}, ${data.location.country}</strong><br/>
          Temperature: <strong>${temp}°C</strong><br/>
          Condition: ${condition}
        `;
      })
      .catch(error => {
        document.getElementById("result").innerHTML = `<span style="color:red;">${error.message}</span>`;
      });
  }
  
