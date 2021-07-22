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
  const inputname = users.name;

  if (inputname) {
    users.country.forEach((data) => {
      const c = document.createElement("ul");
      c.innerHTML = `
  <li><a>country:${data.country_id}</a></li>
 <li><a>Probability:${data.probability}</a></li>`;
      document.body.append(c);
    });
  }
}

const filter = document.createElement("div");
filter.innerHTML = `<input type="text" placeholder="Enter Name" id="myText" />
<button onclick="getusers()">Display Data</button>`;
// let x = document.getElementById("mytext").value;
document.body.append(filter);
