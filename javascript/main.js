const btns = document.querySelectorAll(".btn");
const books = document.querySelectorAll(".book-card");

for(i= 0; i < btns.length; i++){
    btns[i].addEventListener("click", (e) =>{
        e.preventDefault();
        const filter = e.target.dataset.filter;
        books.forEach((books)=>{
            if(filter == "all"){
                books.style.display = "block"
            }else{
                if(books.classList.contains(filter)){
                    books.style.display = "block"
                }else{
                    books.style.display = "none"
                }
            }
        })
    })
}


//Filtras
const search = document.getElementById("search");

search.addEventListener("keyup", (e) => {
    e.preventDefault();
    const searchValue = search.value.toLowerCase().trim();

    for(i = 0; i < books.length; i++){
        if(books[i].classList.contains(searchValue)){
            books[i].style.display = "block";
        }else if(searchValue == ""){
            books[i].style.display = "block";
        }else{
        books[i].style.display = "none";
        }
    }
})