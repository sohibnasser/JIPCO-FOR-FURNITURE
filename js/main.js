


// start scroll

let btn = document.getElementById('btn');
window.onscroll = function(){
  if (scrollY>=562){
    btn.style.display = 'block';
  }
  else{
    btn.style.display = 'none';
  }
}

btn.onclick = function(){
  scroll({
    left:0,
    top:0,
    behavior:'smooth'
  })
}

// end scroll





// start navbar

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("jipco");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block"; 
  setTimeout(carousel, 2000);    
}

// end navbar




// start header
let btnmore = document.querySelector('#btnmore');
let btnless = document.querySelector('#btnless');
let p =  document.querySelector('#p');

btnmore.onclick = function (){
  btnless.classList.remove('hide');
  p.classList.remove('hide');
  p.style.marginTop ='-25px';
  this.classList.add('hide');
  
}

btnless.onclick = function (){
  p.classList.add('hide');
  this.classList.add('hide');
  btnmore.classList.remove('hide');
}

// end header

