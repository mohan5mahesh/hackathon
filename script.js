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
    const c = document.createElement("ul");
    c.innerHTML = `
  <li><a>country:${data.country_id}</a></li>
 <li><a>Probability:${data.probability}</a></li>`;
    document.body.append(c);
  });
}
getusers();

const filter = document.createElement("div");
filter.innerHTML = `<input type="text" placeholder="Enter Name" id="input" onkeyup="filter_user()"/>`;
document.body.append(filter);


