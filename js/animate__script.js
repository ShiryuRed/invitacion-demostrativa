
const loader = document.querySelector(".loader-container");

function hiddenLoader() {
  loader.classList.add("hidden-loader")
}
function removeLoader() {
  loader.innerHTML = ' ';
  loader.setAttribute("hidden", "");
}

setTimeout(function(){
  hiddenLoader();
},3000)
setTimeout(function(){
  removeLoader();
},4000)

const wrapper2 = document.getElementById("tiles");

const titleTile = document.querySelector(".tiles")

let columns = Math.floor(document.body.clientWidth / 70),
    rows = Math.floor(document.body.clientHeight / 500);

let toggled = false;

let switchW = true;

if (switchW == true) {
  noScroll();
}

function tilesOn() {

}

const handleOnClick2 = index => {
    toggled = !toggled;

    anime({
      targets: '.tile2',
      opacity: toggled ? 0 : 1,
      delay: anime.stagger (40, {
        grid: [columns, rows],
        from: index
      }) 
    });
    titleTile.classList.add("title-tiles");
    setTimeout(function(){
    wrapper2.style.display = ("none");
    titleTile.style.display = ("none");
    wrapper2.innerHTML = ' ';
    switchW = false;
  }, 800);
   body.classList.remove("no-scroll");
   musicStart();
}

const createTile2 = index => {
  const tile2 = document.createElement("div");

  tile2.classList.add("tile2");

  tile2.onclick = e => handleOnClick2(index);

  titleTile.onclick = e => handleOnClick2();


  return tile2;
};

const createTiles2 = quantity => {
  Array.from(Array(quantity)).map((tile, index) => {
    wrapper2.appendChild(createTile2(index));
  })
};

const createGrid2 = () => {
  wrapper2.innerHTML = "";
  if (switchW == true) { 
    columns = Math.floor(document.body.clientWidth / 70);
    rows = Math.floor(document.body.clientHeight / 500);

    wrapper2.style.setProperty("--columns", columns);
    wrapper2.style.setProperty("--rows", rows);

    createTiles2(columns * rows);
  }
};



if (switchW == true) {
    window.onresize = () => resize();
    const resize = () =>{
    createGrid2();
  }
}



if (screen.width < 1024) {
    createTiles2(columns * rows);
    createGrid2();
} else if (screen.width >= 1024){
     
  let columns = Math.floor(document.body.clientWidth / 80),
      rows = Math.floor(document.body.clientHeight / 800);

  let toggled = false;

  let switchW = true;

  if (switchW == true) {
    noScroll();
  }
  const handleOnClick2 = index => {
      toggled = !toggled;

      anime({
        targets: '.tile2',
        opacity: toggled ? 0 : 1,
        delay: anime.stagger (40, {
          grid: [columns, rows],
          from: index
        }) 
      });
      titleTile.classList.add("title-tiles");
      setTimeout(function(){
      wrapper2.style.display = ("none");
      titleTile.style.display = ("none");
      wrapper2.innerHTML = ' ';
      switchW = false;
    }, 800);
     body.classList.remove("no-scroll");
     musicStart();
  }

  const createTile2 = index => {
    const tile2 = document.createElement("div");

    tile2.classList.add("tile2");

    tile2.onclick = e => handleOnClick2(index);

    titleTile.onclick = e => handleOnClick2(index);


    return tile2;
  };

  const createTiles2 = quantity => {
    Array.from(Array(quantity)).map((tile, index) => {
      wrapper2.appendChild(createTile2(index));
    })
  };

  const createGrid2 = () => {
    wrapper2.innerHTML = "";
    if (switchW == true) { 
      columns = Math.floor(document.body.clientWidth / 80);
      rows = Math.floor(document.body.clientHeight / 800);

      wrapper2.style.setProperty("--columns", columns);
      wrapper2.style.setProperty("--rows", rows);

      createTiles2(columns * rows);
    }
  };



  if (switchW == true) {
      window.onresize = () => resize();
      const resize = () =>{
      createGrid2();
    }
  }
  createGrid2();
  }
/*
if (screen.width < 1024) {
    createTiles2(columns * rows);
    createGrid2();
} else {
    wrapper2.style.display = ("none");
    wrapper2.innerHTML = ' ';
    titleTile.style.display = ("none");
    titleTile.innerHTML = ' ';
    switchW = false;
    noScroll();
}
*/
