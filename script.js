// // S61ntT6rO03gxWOqvoqka_2ysaYx4Z9ecT-Y7p8FTJQ :Access key

// // 1IvaoiYT-hZswqiX3dxcmt7DOLW_DCqBETxL9N7SE4E: secret key


// let page = 1;
// let acess = "S61ntT6rO03gxWOqvoqka_2ysaYx4Z9ecT-Y7p8FTJQ"

// async function searchImage(){
//    let key = inp.value
//    console.log(key)
//    const url = 'https://api.unsplash.com/search/photos?page=1&query=${key}&client_id=S61ntT6rO03gxWOqvoqka_2ysaYx4Z9ecT-Y7p8FTJQ'
//    const response= await fetch(url)
//    const data= await response.json()
// console.log(data)
//    const result= data.results
//    console.log(result,data)

//    result.map((res)=>{
//       const imggg = document.createElement("img")
//       imggg.src = res.urls.small
//       const imgglink = document.createElement("a")
//       imgglink.href = res.links.html
//       imgglink.target = "_blank"

//       imgglink.appendChild(imggg)
//       imagee.appendChild(imgglink)
//    })
// }

// formm.addEventListener("submit",(e)=>{
//      e.preventDefault();
//      page = 1
//      searchImage()
// })

let page = 1;
let acess = "S61ntT6rO03gxWOqvoqka_2ysaYx4Z9ecT-Y7p8FTJQ";

async function searchImage() {
    let key = inp.value;
    console.log(key);
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${key}&client_id=${acess}&per_page=12`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        const results = data.results;
        displayImages(results);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayImages(results) {
    const imagee = document.getElementById('imagee');
    if(page === 1){
    imagee.innerHTML = '';
    } // Clear previous images
    results.forEach(res => {
        const img = document.createElement('img');
        img.src = res.urls.small;

        const link = document.createElement('a');
        link.href = res.links.html;
        link.target = '_blank';
        link.appendChild(img);

        imagee.appendChild(link);

        img.addEventListener("mouseover",()=>{
            img.style.boxShadow = "0 0 10px #fff"
        })
        img.addEventListener("mouseleave",()=>{
             img.style.boxShadow = "0 0 0px #000000"
        })
    });
    showMoreButton.style.display = "block"
}

const formm = document.getElementById('formm');
formm.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1; // Reset page number on form submission
    searchImage();
});

const showMoreButton = document.getElementById('show');
showMoreButton.addEventListener('click', () => {
    page++; // Increment page number for pagination
    searchImage();
});



inp.addEventListener("keydown",(event)=>{
    if(event.keyCode === 13){
        btn.click();
    }
} )