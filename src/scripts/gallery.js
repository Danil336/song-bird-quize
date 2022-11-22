const urlJson = "./assets/birds.json";

const picturesArea = document.querySelector(".gallery_pictures");

new Promise((resolve) => {
  resolve(fetch(urlJson));
})
  .then((data) => data.json())
  .then((data) => generateAllPictures(data));

function generateAllPictures(arrays) {
  arrays.forEach((elem) => {
    elem.forEach(elem2 => {
      const picture = document.createElement("div");
      picture.innerHTML = `
      <div class="picture">
      <div class="picture_item">
          <div class="picture_img">
            <img src="${elem2.image}" alt="">
          </div>
          <div class="picture_name">${elem2.name}</div>
          <div class="picture_desctiption">${elem2.description}</div>
        </div>
      </div>
      `;
      picturesArea.appendChild(picture)
    })
  });
}

