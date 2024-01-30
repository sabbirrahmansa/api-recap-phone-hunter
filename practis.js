const phoneload = async (setValue) =>{

    const res = await fetch(` https://openapi.programming-hero.com/api/phones?search=${setValue}`)
    const data = await res.json()
    const phones = data.data ;
    // console.log(phones)
    phoneDisplay(phones)



}

const phoneDisplay = (phones) =>{
    // console.log(phones)
    const idAdd = document.getElementById('display-phoneContainer')
    idAdd.textContent = '' ;
    phones.forEach(phonee =>{
        console.log(phonee)
        const criectDiv = document.createElement('div')
        criectDiv.classList = 'card  bg-gray-50 p-4 shadow-xl'
         criectDiv.innerHTML =`
        <figure><img src="${phonee.image}" alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">${phonee.phone_name}</h2>
                      <p>${phonee.slug}</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
        
        `

        idAdd.appendChild(criectDiv);
    })
}

const searchArea = ()=>{
    const idConnect = document.getElementById('input-textArea')
    const setValue = idConnect.value ;
    phoneload(setValue)
    

}

// phoneload();