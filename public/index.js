function addImage(kesyword,index){
    const imgElement = document.createElement('img');
    imgElement.src=`https://source.unsplash.com/400x225?${kesyword}&sig=${index}`;
    imgElement.className="img"+index;

    const gallery = document.querySelector(".gallery");
    gallery.appendChild(imgElement);

}
function removeAllPhotos(){
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = '';

}

function searchPhoto(event){
    const keyword = event.target.value;
    //console.log(keyword);
    if(event.key === 'Enter' && keyword){
        removeAllPhotos();
        for(let i =0;i<9;i++){
            addImage(keyword,i);

        }
    }
}
function handleUpdate(){

    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
  
}

function main(){
    const controlInputs = document.querySelectorAll('.controls input');
   // console.log(controlInputs);
   controlInputs.forEach((input)=>{input.addEventListener('change',handleUpdate)});
    
    const inputElement = document.querySelector('.search');
    inputElement.addEventListener('keydown',searchPhoto);
}
main();