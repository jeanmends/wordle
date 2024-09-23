const FIVE = [];

fetch("outros/lista-completa.txt")
  .then((res) => res.text)
  .then((text) => {
    console.log(text.length);
   })
  .catch((e) => console.error(e));

  