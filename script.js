const arr = [];
const select = document.querySelector("#select");
const listItems = document.querySelector('ul')

const chars = "abcdefghiklmnopqrstuvwxyz";

function randomChars() {
  for (let i = 0; i < 5; i++) {
    let num = chars[Math.floor(Math.random() * chars.length)];

    arr.push(num);
  }
}
randomChars();

function createItem() {
  for (let i = 0; i < arr.length; i++) {
    select.innerHTML += `<option value='${arr[i]}'>${arr[i]}</option>`;
   
  }
}
createItem();

async function string() {
  const req = await fetch("list.json");
  const json = await req.json();
  listItems.innerHTML = ''
    for (let user of json) {
        if(select.value.includes(user.name[0].toLowerCase())){
            listItems.innerHTML += `<li>${user.name}</li>`
        } 
      }
      if(listItems.children.length === 0)  
      listItems.innerHTML = 'No matches result message'
     
}
string();

select.addEventListener('change', string)