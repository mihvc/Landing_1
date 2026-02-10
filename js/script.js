let carsData = [];

fetch('js/cars.json')
.then(response => response.json())
.then(data => {
  carsData = data;
  console.log('Done');
})

let homeScene = document.getElementById('scene_home');
let modelScene = document.getElementById('scene_model');
let menuLink = document.querySelectorAll('.menu_link');
let backBtn = document.querySelector('.back_btn');



function carSpecs(carId, carsData){
  let car = carsData[carId]
  document.querySelector('.model_title').textContent = car.title;

  let specItems = document.querySelectorAll('.model_spec_list');
  let i = 0;
  for (let key in car.specs) {
    if(specItems[i]) {
      specItems[i].querySelector('.spec_name').textContent = key;
      specItems[i].querySelector('.spec_list').textContent = car.specs[key];
    }
    i++
  }
  document.querySelector('.label-length .value').textContent = car.specs['Длина'];
  document.querySelector('.label-width .value').textContent = car.specs['Ширина'];
  document.querySelector('.label-height .value').textContent = car.specs['Высота'];

  let carImage = document.querySelector('.car_image');
  carImage.src = car.image;
  carImage.alt = car.title;
}

menuLink.forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();

    let carId = link.getAttribute('data-car')

    homeScene.classList.remove('active');
    modelScene.classList.add('active');
    carSpecs(carId, carsData);
  })
})

backBtn.addEventListener('click', function(e){
  e.preventDefault();
  homeScene.classList.add('active');
  modelScene.classList.remove('active');
})

