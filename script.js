const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

function getCard (member) {
  const card = 
    ` <div class="col-6 col-lg-4 mb-2">
        <div class="card-DM d-flex bg-dark">
          <img src=${member.img} alt="" class="w-50 debug">
          <div class="text">
           <h6 class="text-white">${member.name}</h6>
           <p class="text-white">${member.role} </p>
             <p><a href=${member.email} class="link-primary"> </a> </p>
          </div>
        </div> 
      </div> `

  return card
}

function pushCard (array){
 const row = document.querySelector('.row')

  let cards = ' ';
  for (let member of teamMembers) {
    cards += getCard(member)
  }

  row.innerHTML = cards
} 
console.log(pushCard(teamMembers))

/* 
inserisci una tua immagine 
const form = document.querySelectorAll('form');

form.addEventListener('submit', formPushCard)


function formPushCard () {
  const name = document.getElementById('name').value;
  const role = document.getElementById('role').value;
  const email= document.getElementById('email').value;
  const img = document.getElementById('img').value;

  const newArray = {
    name, 
    role, 
    email, 
    img
  }

  console.log(newArray)
} */


