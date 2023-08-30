const obj = [
  {
    id: 1,
    Img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2960&q=80",
    Name: "James Jo",
    Job: "Web Developer",
    Description:
      "I am a enthusiastic developers passionate about creating simple and effective tools like the Counter App. My goal is to provide useful and user-friendly solutions that enhance productivity and enjoyment.",
  },
  {
    id: 2,
    Img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2861&q=80",
    Name: "Alice Johnson",
    Job: "Graphic Designer",
    Description:
      "Passionate about creating visually stunning designs. My goal is to provide useful and user-friendly creative design that enhance productivity.",
  },
  {
    id: 3,
    Img: "https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
    Name: "Linda Smith",
    Job: "Data Scientist",
    Description:
      "Analyzing data to uncover hidden insights. My goal is to provide useful and user-friendly data that eincreases profit",
  },
  {
    id: 4,
    Img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
    Name: "Ella Martinez",
    Job: "Marketing Manager",
    Description:
      "Creating strategic marketing campaigns. My goal is to provide useful and user-friendly solutions that enhance Marketing strategy of company",
  },
];

let img = document.getElementById("img");
let a = document.getElementById("name");
let b = document.getElementById("job");
let c = document.getElementById("desc");

let left = document.querySelector(".left");
let right = document.querySelector(".right");
let random = document.querySelector(".surprise-button");

let i = 0;

function changeVal(j) {
  img.src = obj[j].Img;
  a.innerHTML = obj[j].Name;
  b.innerHTML = obj[j].Job;
  c.innerHTML = obj[j].Description;
}

left.addEventListener("click", () => {
  i--;
  if (i < 0) {
    i = obj.length - 1;
  }
  changeVal(i);
  console.log(i);
});

right.addEventListener("click", () => {
  i++;
  if (i > obj.length - 1) {
    i = 0;
  }
  changeVal(i);
  console.log(i);
});

random.addEventListener("click", () => {
  let ran = Math.floor(Math.random() * obj.length);
  changeVal(ran);
  console.log(ran);
});
