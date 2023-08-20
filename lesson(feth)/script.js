

let url = "https://dummyjson.com/products"

fetch(url)
.then(res => res.json())
// .then(data => console.log(data.products))
.then(data => render(data.products))

let div_root = document.querySelector('#root')
function render(array) {
  for(elem of array){
    let div_elem = document.createElement('div')
    div_elem.className = 'div_size'

    let img_elem = document.createElement('img')
    let title_elem = document.createElement('h3')
    let price_elem = document.createElement('h3')
    let rating_elem = document.createElement('p')

    rating_elem.innerHTML = rating(elem.rating)


    title_elem.innerHTML = 'Title: ' + elem.title
    price_elem.innerHTML = 'Price: '  + elem.price + ' $'



    img_elem.style.width = 400
    img_elem.style.height = 400
    img_elem.src = elem.thumbnail


    div_elem.append(img_elem,title_elem,price_elem,rating_elem)
    div_root.append(div_elem)

  }
}

function rating(n){
  n = Math.round(n);
  let star = '';
  for(let i = 0; i < 5; i++){
      if (i < n) {
          star += '<span class="fa fa-star active"></span>';
      } else {
          star += '<span class="fa fa-star"></span>';
      }
  }
  return star;
}


