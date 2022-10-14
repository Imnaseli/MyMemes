let meme = null
const url = 'https://meme-api.herokuapp.com/gimme'
const anotherone = document.getElementById('anothermeme')
const nameofmeme = document.getElementById('nameofmeme')
const authorofmeme = document.getElementById('authorofmeme')
const pictureofmeme = document.getElementById('pictureofmeme')
const errorline = document.getElementById('errorline')

async function getmymeme(url){
    //FIX: Tring to add a Try catch for the fetch
        //try{    

            let response = await fetch(url);

        //}catch(error){
    //NOTE: The main problem is that after the try block, the response variable is regarded as empty
          //  if(error !== null){
                //errorline.innerText = 'Please check your Internet connection'
            //}else{

                let meme = await response.json();
                pictureofmeme.innerHTML =`<img src='${meme.url}' height=300 width=300 />` 
                nameofmeme.innerText =`Title: "${meme.title}"`
                authorofmeme.innerText = `Author: ${meme.author}`
            //}
        //}
}

anotherone.onclick = () => {
    getmymeme(url)
}

