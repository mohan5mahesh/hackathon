async function getusers() {
  try {
    const data = await fetch("https://api.nationalize.io/?name=michael");
    const users = await data.json();
    // console.log(users);
    const res = await search_user(users);
  } catch {
    console.log("error");
  }
}

function search_user(users) {
  users.country.forEach((data) => {
    const c = document.createElement("div");
    c.innerHTML = `
   <h3>country:${data.country_id}</h3>
   <p>Probability:${data.probability}</p>`;
    document.body.append(c);
  });
}
getusers();
