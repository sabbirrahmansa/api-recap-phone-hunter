
const loadphone = async (searchText) => {
    // modifi url , in paramiter
    const res = await fetch(` 
    https://openapi.programming-hero.com/api/phones?search=${searchText}
    `)
    const data =  await res.json();
    const phones = data.data;
    // console.log(phone)
    displayPhone(phones)
    

}

const displayPhone = (phones) =>{
    // console.log(phones)
    // 1 step get element by id
    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.textContent ='';

   phones.forEach(phone =>{

    console.log(phone)

     // 2 step creat a div
     const phoneCard = document.createElement('div')
     phoneCard.classList=`card  bg-gray-500 p-4 shadow-xl`;

     // 3 step inner html
     phoneCard.innerHTML =`
     <figure><img src="${phone.image}" alt="Shoes" /></figure>
     <div class="card-body">
         <h2 class="card-title">${phone. phone_name}</h2>
         <h5> brand ${phone. brand}</h5>
         <p>${phone.slug}</p>
         <div class="card-actions justify-end">
         <button class="btn btn-primary">Buy Now</button>
         </div>
     </div>
     
     
     `;
     // 4 step append chaild

     phoneContainer.appendChild(phoneCard)

   


   })



}
// button a onclick deya function ta bosaiya deshi
const hendelSearch = () =>{
    // 2 line korsi text field ar id neya value bosaisi , ar tar thaky velue neshi
    const searchField = document.getElementById('input-Field')
    const searchText = searchField.value ;

    // loadphone function ta call koray deshi, and paramiter bosaisi
    loadphone(searchText)
    
}






 