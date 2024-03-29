const front = document.querySelector(".firstColumn");
const back = document.querySelector(".secondColumn");
const theme = document.querySelectorAll(".theme");
const bachelor = document.querySelector(".bachelor");
const master = document.querySelector(".master");
const footer = document.querySelector(".copyWrite");
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const headerMenu = document.querySelector(".headerMenu");
const scroll = document.querySelector(".scrollController");
const menuItems = document.querySelectorAll(".menuItem");
const html = document.querySelector('html');

// Skills Section
const activeCircles = [];
const skills = [{
  column: 1,
  row: 1,
  title: "Html",
  count: 9
}, {
  column: 1,
  row: 1,
  title: "CSS (Stylus/Sass)",
  count: 9
}, {
  column: 1,
  row: 1,
  title: "Responsive Web Design",
  count: 10
}, {
  column: 1,
  row: 1,
  title: "JavaScript",
  count: 8
}, {
  column: 1,
  row: 1,
  title: "React.js",
  count: 7
}, {
  column: 1,
  row: 1,
  title: "Git",
  count: 7
}, {
  column: 1,
  row: 1,
  title: "Ubuntu",
  count: 4
}, {
  column: 1,
  row: 1,
  title: "English",
  count: 9
}, {
  column: 2,
  row: 1,
  title: "Data Structure",
  count: 8
}, {
  column: 2,
  row: 1,
  title: "MySQL",
  count: 5
}, {
  column: 2,
  row: 1,
  title: "Node.js",
  count: 3
}, {
  column: 2,
  row: 1,
  title: "Express.js",
  count: 2
}, {
  column: 2,
  row: 1,
  title: "Deno",
  count: 1
}];
const activateCircle = () => {
  for (let i = 0; i < activeCircles.length; i++) {
    activeCircles[i].classList.add("active");
  }
};
const deactivateCircle = () => {
  for (let i = 0; i < activeCircles.length; i++) {
    activeCircles[i].classList.remove("active");
  }
};
const circleMaker = (parent, count, all = 10) => {
  let i = 0;
  let j = 0;
  while (i < all) {
    const circle = document.createElement("div");
    parent.appendChild(circle);
    circle.classList.add("circle");
    if (j < count) {
      activeCircles.push(circle);
      j++;
    }
    i++;
  }
};
skills.map(skill => {
  const newSkill = document.createElement("div");
  if (skill.column === 1) {
    front.appendChild(newSkill);
  } else {
    back.appendChild(newSkill);
  }
  newSkill.classList.add("skill");
  const title = document.createElement("h3");
  newSkill.appendChild(title);
  title.innerHTML = skill.title;
  const wrapper = document.createElement("div");
  newSkill.appendChild(wrapper);
  wrapper.classList.add("wrapper");
  circleMaker(wrapper, skill.count);
});
document.addEventListener("scroll", () => {
  const windowHeight = window.innerHeight;
  const windowPosition = window.scrollY;
  if (windowPosition > 1.5 * windowHeight && windowPosition < 2.5 * windowHeight) {
    activateCircle();
  } else {
    deactivateCircle();
  }
});

// Change Theme
const setTheme = theme => {
  html.setAttribute('data-theme', theme);
};
const toggleTheme = () => {
  const currentTheme = html.getAttribute('data-theme');
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
};
theme.forEach(item => {
  item.addEventListener("click", toggleTheme);
});

// Degree's Slider
master.addEventListener("click", () => {
  master.classList.add("active");
  bachelor.classList.remove("active");
});
bachelor.addEventListener("click", () => {
  bachelor.classList.add("active");
  master.classList.remove("active");
});

// Footer Copy Write
const date = new Date();
const year = date.getFullYear();
footer.innerHTML = `© ${year} Mahrokh Tehran, Iran. All rights reserved.`;

//Responsive Menu
hamburgerMenu.addEventListener("click", () => {
  scroll.style.overflowY = 'unset';
  hamburgerMenu.classList.toggle("open");
  headerMenu.classList.toggle("openMenu");
  if (hamburgerMenu.classList.contains("open")) {
    scroll.style.overflowY = 'hidden';
  }
});
menuItems.forEach(menuItem => {
  menuItem.addEventListener('click', () => {
    headerMenu.classList.remove("openMenu");
    hamburgerMenu.classList.remove("open");
    hamburgerMenu.classList.remove("open");
    scroll.style.overflowY = 'unset';
  });
});