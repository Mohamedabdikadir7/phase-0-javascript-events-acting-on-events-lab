// Your code here
const dorger = document.getElementById("dodger")
document.addEventListener("keydown", function(e){
    if(e.key ==="ArrowLeft"){
        const newleft =dorger.style.left.replace("px", "");
        const leftint =parseInt(newleft);
        console.log(leftint)
            if(leftint >=0){
                dorger.style.left = `${leftint-1}px`

            }
            else{
                alert("game over")
            }
       

    }else if(e.key ==="ArrowRight"){
        const newleft =dorger.style.left.replace("px", "");
        const leftint =parseInt(newleft);
        if(leftint <=360){
            dorger.style.left = `${leftint+1}px`

        }

    } else if (e.key === 'ArrowUp'){

        const newleft =dorger.style.left.replace("px", "");
            const leftint =parseInt(newleft);
            if(leftint <=380){
                dorger.style.left = `${leftint+1}px`
        
            }
   
    
 }

// the up and down code 
// else if(e.key ==="ArrowUp"){
//     const newleft =dorger.style.left.replace("px", "");
//     const leftint =parseInt(newleft);
//     if(leftint <=360){
//         dorger.style.left = `${leftint+1}px`

//     }

//     }else if(e.key ==="ArrowDown"){
//         const newleft =dorger.style.down.replace("px", "");
//         const leftint =parseInt(newleft);
//         if(leftint <=360){
//             dorger.style.left = `${leftint+1}px`

//         }

//     }
//     else{
//         alert("Click the right key")
//     }
    
 


