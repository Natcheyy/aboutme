document.addEventListener("DOMContentLoaded", function() {
    const themePicker = document.querySelector("#theme");
    const html = document.querySelector("html");
    themePicker.addEventListener("change", function(){
        const themeChoice = themePicker.value;
        switch(themeChoice){
            case "dark":
                html.style.backgroundColor = "rgb(25,39,52)";
                html.style.color = "white"
                break;
            case "light":
                html.style.backgroundColor = "";
                break;
        }
    });

    const seasonSelect = document.querySelector("#season");
    const selectOutput = document.querySelector("#selectOutput");

    seasonSelect.addEventListener("change", setWeather);
    function setWeather() {
        const choice = seasonSelect.value;
        if (choice === "Spring"){
            selectOutput.textContent = `The first spring flowers are typically lilacs, irises, lilies, tulips, daffodils, and dandelions.`
        }
        else if (choice === "Summer"){
            selectOutput.textContent = `The Eiffel Tower grows in the summer! The heat expands the iron of the Eiffel Tower causing it to grow 6 inches during the summer.`;
        }
        else if (choice === "Autumn"){
            selectOutput.textContent = `Fall was called “harvest” because of the “harvest moon” that occurs when the full moon is closest to the autumn equinox.`;
        }
        else if (choice === "Winter"){
            selectOutput.textContent = `Winter is the prime time for witnessing the Northern Lights. Countries like Norway, Iceland, and Finland offer stunning views of these shimmering light shows, which are caused by charged particles from the Sun interacting with Earth’s magnetic field`;
        }
        else {
            selectOutput.textContent = ``;
        }
    }
});