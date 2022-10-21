

    window.addEventListener("scroll",()=>{

     console.log(window.scrollY);

     let mydiv = document.getElementsByClassName('line'); 
     let myword = document.getElementsByClassName('score_word');
   
     if(window.scrollY>=632&&window.scrollY<=1460){
          
         for(let i = 0 ;i<mydiv.length;i++){
                
              if(myword[i].innerText=='HTML'){
                 
                      mydiv[i].style.cssText=" width:50% ";
                     
              
                      
                 }else if(myword[i].innerText=='CSS'){
                  
                     mydiv[i].style.width="50%";
               }else if(myword[i].innerText=='JAVASCRIPT'){
                  mydiv[i].style.width="45%";
               }else if(myword[i].innerText=='REACT'){
                mydiv[i].style.width="35%";
               }

            }}else if(window.scrollY<=632||window.scrollY>=1460){
        for(let i = 0 ;i<mydiv.length;i++){
               
                            mydiv[i].style.width="0%";

            }
     }

    }) 


  
     function tt(){
       alert(`hey ${document.getElementById("name_fill").value} i will contact you in few day`);
       
     }

