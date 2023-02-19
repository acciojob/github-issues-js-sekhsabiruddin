//your code here

let pageNumberHere = 1;
async function fetchData() {
  let url = `https://api.github.com/repositories/1296269/issues?page=${pageNumberHere}&per_page=5`;
  console.log(url);
  const result = await fetch(url);
  const data = await result.json();

  let pageNumber = document.getElementById("page-number");
  pageNumber.innerHTML = "Page Number " + pageNumberHere;

  let ol = document.createElement("ol");

  data.map((issue) => {
    ol.innerHTML += `<li>${issue.title} ${issue.number}</li>`;
  });

  let dataDiv = document.getElementById("show");
  dataDiv.innerHTML = "";
  dataDiv.appendChild(ol);
}

fetchData();
let load_next_btn = document.getElementById("load_next");

load_next_btn.addEventListener("click", function (e) {
  pageNumberHere++;
  fetchData();
});

let load_prev_btn = document.getElementById("load_prev");

load_prev_btn.addEventListener("click", function (e) {
  if (pageNumberHere >= 2) {
    pageNumberHere--;
    fetchData();
  }
});
