// domens - body
const domens = document.querySelectorAll('.domens');


// search input and btn-searcher 
const nameSearch = document.getElementById('name-seacrh');
const sBtn = document.getElementById('btn-div')


// price inputs
const startPrice = document.querySelector('#price-start input')
const endPrice = document.querySelector('#price-end input')


// simbol inputs
const simbolStart = document.querySelector('.start-simbol input');
const simbolEnd = document.querySelector('.end-simbol input');


// listener 
sBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let empty = [];
    let arr = [];

    // name search input new value
    const searchValue = nameSearch.value.toLowerCase();
    
    // price search input new values
    const priceSearchStart = Number(startPrice.value);
    const priceSearchEnd = Number(endPrice.value);

    // simbol search input new values
    const simbolSearchStart = Number(simbolStart.value)
    const simbolSearchEnd = Number(simbolEnd.value)

    // search by name loop
    domens.forEach(domen =>{
        if(domen.dataset.filter == ''){
            domen.style.display = 'block'
        }else if(domen.dataset.filter.indexOf(searchValue)>-1){
            domen.style.display = 'block'
            empty.push(domen);            
        }else{
            domen.style.display = 'none'
        }
          
    })
    // search by price loop
    empty.forEach(empty =>{
        if(priceSearchStart == ''){
            empty.style.display = 'block'
        }else if(priceSearchStart <= Number(empty.ariaValueNow) & priceSearchEnd >= Number(empty.ariaValueNow)){
            empty.style.display = 'block'
            arr.push(empty)
        }else{
            empty.style.display = 'none'
        }
         
       })
    // search by simbol loop
    arr.forEach(ar =>{
        if(simbolSearchStart == ''){
            ar.style.display = 'block'
        }else if (ar.dataset.filter.length >= simbolSearchStart & ar.dataset.filter.length <=simbolSearchEnd){
            ar.style.display = 'block'
        }else{
            ar.style.display = 'none'
        }
    })
       

})




