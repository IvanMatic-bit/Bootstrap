

var alertBox = document.getElementById("alertBox");
var slikaAlrtBox=document.getElementById("slikalertBox");
function prikazi(i)
{
  
    document.getElementById("slikalertBox").src  = "./Files/Katalog"+i+".jpg";
    alertBox.style.display="block";
   document.getElementById("alertBoxTable").innerHTML =document.getElementsByClassName("tabelaPodataka")[i-1].innerHTML;
  
  
   $(document).mouseup(function (e) { 
    if ($(e.target).closest("#alertBox").length 
                === 0) { 
        $("#alertBox").hide(); 
    } 
}); 
      
   

  
}

function Zatvori()
{
    alertBox.style.display="none";
}

$(window).scroll(function() {
    if ($(this).scrollTop() >=$(window).height()) {        
        $('#toTop').show();    
    } else {
        $('#toTop').hide();  
    }
});
$('#toTop').click(function() {      
    $('body,html').scrollTop({
        scrollTop : 0                       
    }, 0);
});

