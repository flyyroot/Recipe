var bars = document.querySelector('#menu')
function tampilMenu(){
    if(bars.style.display === 'none'){
        bars.style.display = 'block';
    }
    else{
        bars.style.display = 'none'
    }
}
var app = document.getElementById('root');
var container = document.createElement('div');
container.setAttribute('class','container');
app.appendChild(container);

var xhttp = new XMLHttpRequest();
xhttp.open('GET','https://www.themealdb.com/api/json/v1/1/random.php')
xhttp.send()
xhttp.onload = function(){
    section_1 = document.getElementById('section-one')
    popular = document.getElementById('pop-word')
    datae = this.responseText
    data_s = JSON.parse(datae)
    console.log(data_s)
    section_1.style.backgroundImage = `url(${data_s['meals'][0]['strMealThumb']})`
    let contain_popular = '';
    Object.values(data_s).forEach((popular)=>{
    contain_popular+=`
    <ul>
    <li>${['meals'][0]['strMealThumb']}</li>
    <li>${popular.title}</li>
    <li class="kcol">${popular.kcol}</li>
    </ul>
    `
    });
    // popw.innerHTML=contain1;
}


// request.onload = function(){
//     var fakeData = JSON.parse(this.response);
//     if(request.status >= 200 && request.status < 400){
//         fakeData.forEach(companyRole =>{
//             var card = document.createElement('div');
//             card.setAttribute('class','card');

//             var elm = document.createComment("img");
//             elm.setAttribute("src", companyRole.personAvatar);
//             elm.setAttribute("height", "180px");
//             elm.setAttribute("width","100%");
//             elm.setAttribute("alt","Profile Picture");

//             var h1 = document.createElement('h1');
//             h1.textContent = companyRole.nameFirst;

//             var p1 = document.createElement('p1');
//             p1.textContent = companyRole.jobTitle;

//             var p2 = document.createElement('p2');
//             p2.textContent = 'Also known as "' + companyRole.nickName + '"';
//             var br = document.createElement("br");

//             container.appendChild(card);

//             card.appendChild(elm);
//             card.appendChild(h1);
//             card.appendChild(p1);
//             card.appendChild(br);
//             card.appendChild(p2);

//         });
//     } else{
//         console.log("You shall not pass")
//     }
// }

// request.open("POST", "https://app.fakejson.com/q");
// request.setRequestHeader("content-type","application/json");
// request.send(data);

// request.onload = function(){
//     var fakeData = JSON.parse(this.response);
//     console.log(fakeData)
// }



// let data = 'https://jsonplaceholder.typicode.com/users';

// async function GetData(){
//     const resp = await fetch(data);
//     const result = await resp.json();
//     console.log(result)
// }

// GetData()
// .then(resp=>{
//     console.log(resp)
// })
// .catch(error=>{
//     console.log(error);
// });

