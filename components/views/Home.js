export default st => `
<main>
<section id="jumbotron">
  <h2>Savvy Coders Aug 21 Cohort</h2>
  <a href="">"Call to Action" "Button"</a>


</section>
    Weather in ${st.weather.city} ${kelvinToFahrenheit(st.weather.temp)}F, feels
    like ${kelvinToFahrenheit(st.weather.feelsLike)}F
</main>
`;

const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);
