const exampleData = '{ "title":"Grand Theft Auto V", "price":"11.73", "cover":"https://images.g2a.com/1024x768/1x1x0/grand-theft-auto-v-pc-rockstar-key-global-i10000000788017/59e5efeb5bafe304c4426c47"}';
const pageData = JSON.parse(exampleData);

console.log(pageData.cover);


setTitle();
setPrice();
setImage();


function setTitle() {
  const imageColumn = document.getElementById("informationColumn");
  const titleParagraph = document.createElement('p');
  titleParagraph.textContent = pageData.title;
  imageColumn.appendChild(titleParagraph);
};

function setPrice() {
  const imageColumn = document.getElementById("informationColumn");
  const priceParagraph = document.createElement('p');
  priceParagraph.textContent = "£" + pageData.price;
  imageColumn.appendChild(priceParagraph);
};

function setImage() {
  const gameCover = document.getElementById('gameCoverLarge');
  const imageURL = pageData.cover;
  gameCover.src = imageURL;
};
