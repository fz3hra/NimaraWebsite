// local datas
const reviews = [
  {
    id: 1,
    name: "Mujore Faatimah-Iz-Zaahra",
    job: "Student and front-end developer",
    img:
      "./zaa.jpeg",
    text:
      "1st year student at the University of Mauritius, is a tech geek and loves to learn new things. Technology and building new things is what I am interests me the most.",
  },
  {
    id: 2,
    name: "Boodhun Jemima",
    job: "Student",
    img:
      "./jem.jpeg",
    text:
      "Coding is my passion which leads me to be a software engineering student at the University Of Mauritius. To live life to the fullest and learn from my mistakes is my vision; to be a better version of myself is my goal.",
  },
  {
    id: 3,
    name: "Bhavini",
    job: "Student",
    img:
      "./bhav.jpeg",
    text:
      "Living in a technological era, I have always been enthralled by the milestones in this field, especially in the domain of Artificial Intelligence(AI) and Robotics. This has always been another dimension for me to explore further. Eventually, coding became a means for me to enter this parallel world. However, besides this inquisitive facet of mine, I also have an affinity for arts, be it music, painting or literature. The reason for indulging myself in these two completely different areas is that I believe that the versatility of a person has a contribution to what completes us as a whole.",
  },
];

//select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item

let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function(){
 showPerson(currentItem);
});

// show person based on item 

function showPerson(person)
{
   const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//show next person

nextBtn.addEventListener('click', function(){
  currentItem++;
  if(currentItem > reviews.length - 1)
    {
      currentItem =0;
    }
  showPerson(currentItem);
});

//show prev person
prevBtn.addEventListener('click', function(){
  currentItem--;
  if(currentItem < 0)
    {
      currentItem = reviews.length - 1;
    }
  showPerson(currentItem);
});