const url = "https://uselessfacts.jsph.pl/api/v2/facts/random";

// fetch data return joke string
async function getFactData() {
    const response = await fetch(url);
    const data = await response.json();

    return data.text;
}

// update the UI
function showFactInUI(text) {
    document.getElementById("output").innerHTML = `<p>${text}</p>`;
}

// load fact on button click
document.getElementById("btn").addEventListener("click", async () => {
    document.getElementById("output").innerText = "Loading...";

    const factText = await getFactData();
    showFactInUI(factText);
});
