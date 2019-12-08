
$(".scrolling-pane").scroll(function(){
  $(this).find(".Name").css('top', 0 + 'px');
  $(this).find(".Name").css('position', 'absolute');
});





var spanWhat = document.getElementsByClassName('What');
var i = 0;
while(i < spanWhat.length){
   spanWhat[i].onmouseover = function change(){
       var i = 0;
       while(i < spanWhat.length){
           spanWhat[i].style.color = ‘rgb(255, 235, 55)’;
           i++;
       }
   }
   spanWhat[i].onmouseout = function change(){
       var i = 0;
       while(i < spanWhat.length){
           spanWhat[i].style.color = 'black';
           i++;
       }
   }
   i++;
 }


$('.scrolling-pane rachel').click({
  lazyLoad: 'ondemand',
  slidesToShow: 3,
  slidesToScroll: 1
});

// document.getElementById('Links/gif3.gif').addEventListener('mouseover', function(){
// myFunction();
// });

allRachelNodes = document.querySelectorAll('.racheltext');

for(var i = 0; i < allRachelNodes.length; i++) {
  allRachelNodes[i].addEventListener('mouseover', function(){
    myFunction('rachel');
  });

  allRachelNodes[i].addEventListener('mouseleave', function(){
    myFunction('rachel');
  });
}
// docu

function myFunction(string) {
  switch(string) {
    case 'rachel':
      var x = document.getElementById('rachel');
      // console.log(x);
      break;
    default:
      break;
  }
  // var x = elem;
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function showImage() {
  var image = document.querySelector(".rachel");
  image.style["display"] = "block";
}

// add event listener to text
var el = document.querySelector(".74 Yeah.");
el.addEventListener("click", showImage, false);

}



// var spanWhat = document.getElementsByClassName('What');
// var i = 0;
// while(i < spanWhat.length){
//    spanWhat[i].onmouseover = function change(){
//        var i = 0;
//        while(i < spanWhat.length){
//            spanWhat[i].style.color = ‘rgb(255, 235, 55)’;
//            i++;
//        }
//    }
//    spanWhat[i].onmouseout = function change(){
//        var i = 0;
//        while(i < spanWhat.length){
//            spanWhat[i].style.color = 'black';
//            i++;
//        }
//    }
//    i++;
//  }
