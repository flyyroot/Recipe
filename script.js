var bars = document.querySelector('#menu')
function tampilMenu(){
    if(bars.style.display === 'none'){
        bars.style.display = 'block';
    }
    else{
        bars.style.display = 'none'
    }
}

// let searc_btn = document.getElementById('btn-search');

// searc_btn.addEventListener('click',search)
function tampilCari(){
    document.getElementById('search-bar').innerHTML=`
        <form method="get" class="cari">
        <input type="text" name="cari" class="search-food">
        <button type="submit" name="submit"><i class="fa fa-search"></i></button>
        </form>
    `
}

var xhttp = new XMLHttpRequest();
xhttp.open('GET','https://www.themealdb.com/api/json/v1/1/random.php')
xhttp.send()
xhttp.onload = function(){
    section_1 = document.getElementById('section-one')
    popw = document.getElementById('pop-word')
    datae = this.responseText
    data_s = JSON.parse(datae)
    console.log(data_s)
    section_1.style.backgroundImage = `url(${data_s['meals'][0]['strMealThumb']})`
    let contain_popular = '';
    Object.values(data_s).forEach((popular)=>{
    // console.log(popular)
    contain_popular+=`
    <ul>
    <li>${popular[0]['idMeal']}</li>
    <li>${popular[0]['strMeal']}</li>
    <li class="kcol">${popular[0]['strArea']}</li>
    </ul>
    `
    });
    popw.innerHTML=contain_popular;
}

async function CategoryFood(){
    let resp = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    let datas = await resp.json()
    console.log(datas.categories[0].strCategory)
    popf = document.getElementById('popular-food')
    let contain_food = '';
    Object.keys(datas.categories).forEach((food)=>{
        let desc =datas.categories[food].strCategoryDescription
        let word50 = desc.slice(0,100)

        contain_food+=`
        <div class="items">
        <img src="${datas.categories[food].strCategoryThumb}" alt="image" class="img-food">
        <p class="name">${datas.categories[food].strCategory}</p><br>
        <p class="desc">${word50}....</p><br>
        <div class="ct"><a class="opt" href="#">Select</a></div>
        </div>
       
        `

    })
    popf.innerHTML = contain_food;
    
    
}  
CategoryFood()
CategoryFood()
.then(resp=>{
    console.log(resp)
})
.catch(error=>{
    console.log(error);
});

// recipe
function GetRecipe(){
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((resp)=>resp.json())
    .then((data)=>{
        bahanBahan(data.meals[0])
    })
}
GetRecipe()

function bahanBahan(bahan){
    const bahanya = [];
    for(x=1;x<=20;x++){
      if(bahan[`strIngredient${x}`]){
        bahanya.push( `${bahan[`strIngredient${x}`]} - ${bahan[`strMeasure${x}`]}`)
      }else{
          break;
      }
    }
    console.log(bahanya)
    bahanya10 = bahanya.slice(0,9);
    bahanya11 = bahanya.slice(10,20);
    document.getElementById('ingre').innerHTML = `
    <h2>${bahan.strMeal}</h2>
    <h4>Ingredients</h4>
    <div class="ingred g-2">
        <div class ="ingre-1">
            <img src="${bahan.strMealThumb}" class="img-food">
           
        </div>
        <div class="ingre2">
        <ul>
        ${bahanya10.map(bahane=>
            `<li>${bahane}</li>`).join(' ')}
        </ul>
        </div>
       <div class="ingre3">
       <ul>
       ${bahanya11.map(bahane=>
           `<li>${bahane}</li>`).join(' ')}
       </ul>
       </div>

    </div>
    <div class="resep">
    <h2>Petunjuk </h2>
    <p class="petunjuk">
    ${bahan.strInstructions}
    </p>
    </div>

    <div class="resep">
    <h2>VIDEO </h2>
    <p class="petunjuk">
    <iframe src="https://www.youtube.com/embed/${bahan.strYoutube.slice(-11)}"/>
    </p>
    </div>
    `
}