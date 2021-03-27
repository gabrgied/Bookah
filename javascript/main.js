const btns = document.querySelectorAll(".button");
let book = document.querySelectorAll(".book-card");
  let filterInput = document.getElementById('search-one'); 
  let filterInputTwo = document.getElementById('search-two'); 


document.getElementById("radio-one").addEventListener('click', function(){
  filterInput.style.display = "block"
  filterInputTwo.style.display = "none"  

});

document.getElementById("radio-two").addEventListener('click', function(){
  filterInput.style.display = "none"
  filterInputTwo.style.display = "block"  

});

filterInputTwo.addEventListener('keyup', filterAuthor);

function filterAuthor(){
  let filterValues = document.getElementById('search-two').value.toUpperCase();

  for(let i = 0;i < book.length;i++){
    let b = book[i].getElementsByTagName('h5')[0];

    if(b.innerHTML.toUpperCase().indexOf(filterValues) > -1){
      book[i].style.display = '';
    } else {
        book[i].style.display = 'none';
    }
  
    }
  }


  filterInput.addEventListener('keyup', filterTitles);

function filterTitles(){
	let filterValue = document.getElementById('search-one').value.toUpperCase();

	for(let i = 0;i < book.length;i++){
		let a = book[i].getElementsByTagName('h2')[0];

		if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
			book[i].style.display = '';
		} else {
		    book[i].style.display = 'none';
		}

	  }


    var bookCard = [].slice.call(book);
    var displayShow = bookCard.filter(function(el) {
        return getComputedStyle(el).display !== "none"
    });
    
    var numberOfVisibleDivs = displayShow.length;
    
    let alert = document.querySelector('.showresult');
    
    console.log(alert)
    
    if(numberOfVisibleDivs == 0){
      alert.style.display = "block";
    }else{
      alert.style.display = "none";
        }

  }

  



  for(i= 0; i < btns.length; i++){
    btns[i].addEventListener("click", (e) =>{
        e.preventDefault();
        const filter = e.target.dataset.filter;
        book.forEach((book)=>{
            if(filter == "all"){
                book.style.display = "block"
            }else{
                if(book.classList.contains(filter)){
                    book.style.display = "block"
                }else{
                    book.style.display = "none"
                        
                }
            }
          
        })
    })
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
