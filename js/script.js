const DATA_URL = "json/data.json"
const container = document.getElementById("container")

function showData(dataArray) {
  dataArray.forEach(item => {
    container.innerHTML += `<p>${item.name} ${item.lastname}</p>`
  })
}

async function getStudentsFromJson() {
  const res = await fetch(DATA_URL)
  const data = await res.json()
  const { students } = data
  return students
}

getStudentsFromJson()
  .then(students => showData(students))