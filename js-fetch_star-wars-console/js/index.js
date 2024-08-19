console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error");
    }

    const data = await response.json();
    console.log(data);
    console.log("First person: ", data.results[0]);
  } catch (error) {
    console.error("Error", error);
  }
}

fetchData();
