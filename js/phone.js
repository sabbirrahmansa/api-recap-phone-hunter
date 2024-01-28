
const loadphone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const data =  await res.json();
    const phones = data.data;
    // console.log(phone)
    displayPhone(phones)
    

}

const displayPhone = phones =>{
    // console.log(phones)
    // 1 step get element by id
    const phoneContainer = document.getElementById('phone-container')

   phones.forEach(phone =>{

    console.log(phone)

     // 2 step creat a div
     const phoneCard = document.createElement('div')
     phoneCard.classList=`card w-96 bg-gray-100 shadow-xl`;

     // 3 step inner html
     phoneCard.innerHTML =`
     <figure><img src="${phone.image}" alt="Shoes" /></figure>
     <div class="card-body">
         <h2 class="card-title">${phone. phone_name}</h2>
         <p>If a dog chews shoes whose shoes does he choose?</p>
         <div class="card-actions justify-end">
         <button class="btn btn-primary">Buy Now</button>
         </div>
     </div>
     
     
     `;
     // 4 step append chaild

     phoneContainer.appendChild(phoneCard)

   


   })



}




loadphone() ;