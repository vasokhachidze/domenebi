// domens - body
const domens = document.querySelectorAll('.domens');


// search input and btn-searcher 
const nameSearch = document.getElementById('name-seacrh');
const sBtn = document.getElementById('btn-div')

// checkboxes
const checkBoxes = document.querySelectorAll('.filter ul li input')

// price inputs
const startPrice = document.querySelector('#price-start input')
const endPrice = document.querySelector('#price-end input')


// simbol inputs
const simbolStart = document.querySelector('.start-simbol input');
const simbolEnd = document.querySelector('.end-simbol input');


// checkbox search
for(let checkbox of checkBoxes){
    checkbox.addEventListener('click',()=>{
        domens.forEach(domen =>{
            if(checkbox.checked == true){
                if(domen.classList.contains(checkbox.id)){
                    domen.style.display = 'block'
                }else{
                    domen.style.display = 'none'
                }
                
            }else{
                domen.style.display = 'block'
            }
        })
        
    })
}
for(chec in checkBoxes){
    console.log(chec);
}


// listener 
sBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let empty = [];
    let arr = [];

    // name search input new value
    const searchValue = nameSearch.value.toLowerCase();
    
    // price search input new values
    let priceSearchStart = Number(startPrice.value);
    let priceSearchEnd = Number(endPrice.value);

    // simbol search input new values
    let simbolSearchStart = simbolStart.value
    let simbolSearchEnd = simbolEnd.value

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
         if(priceSearchStart <= Number(empty.ariaValueNow) & priceSearchEnd >= Number(empty.ariaValueNow)){
            empty.style.display = 'block'
            arr.push(empty)
            
        }else if(priceSearchEnd == ''){
           priceSearchEnd = 100000;
        }else{
            empty.style.display = 'none'
        }
         
       })
    // search by simbol loop
    arr.forEach(ar =>{
         if (ar.dataset.filter.length  >= simbolSearchStart & ar.dataset.filter.length  <=simbolSearchEnd){
            ar.style.display = 'block'
        }else if(simbolSearchEnd == ''){
           simbolSearchEnd = 100;
        }else{
            ar.style.display = 'none'
        }
    })
       

})



showMeDomenInfo();

function showMeDomenInfo(){
    domens.forEach(domen =>{
        const trigger = domen.querySelector('.domens-box');
        const icon = domen.querySelector('.fa-chevron-down');
        const addCart = domen.querySelector('.showme-price');
        
    
        trigger.addEventListener('click',()=>{
            trigger.nextElementSibling.classList.toggle('active')
            icon.classList.toggle('active-icon');
            
            
            
        })
    
        const iconCheck = document.createElement('i');
        iconCheck.className = 'fa fa-check';
    
        const h2 = document.createElement('h2');
        h2.textContent = 'კალათშია';
    
        const returnIcon = document.createElement('i');
        returnIcon.className = 'fa-solid fa-cart-shopping';
        addCart.addEventListener('click',()=>{
            addCart.classList.toggle('showme')
            
            if(addCart.classList.contains('showme')){
               addCart.querySelector('.fa-cart-shopping').remove()
               addCart.append(iconCheck)
               addCart.append(h2)
            }else{
                iconCheck.remove()
                h2.remove()
                addCart.append(returnIcon)
            } 
        })
    })
    
}

// firstP.setAttribute("id","firstPracPara");