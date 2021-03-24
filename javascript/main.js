const btns = document.querySelectorAll(".button");
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

//Get input element
let filterInput = document.getElementById('search');
//EventListener
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
	let filterValue = document.getElementById('search').value.toUpperCase();
	//Get names ul
	let ul = document.getElementById('books');
	//Get items
	let li = ul.querySelectorAll('li.book-card');

	//Loop through collection-item list
	for(let i = 0;i < li.length;i++){
		let a = li[i].getElementsByTagName('a')[0];
		// If matched
		if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
			li[i].style.display = '';
		} else {
		    li[i].style.display = 'none';
		}

	}
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("press");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

