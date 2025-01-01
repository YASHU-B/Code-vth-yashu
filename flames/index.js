
    function calculate(){
        let addbothinput;

        const loverone = document.querySelector(".loverone").value;
        const lovertwo = document.querySelector(".lovertwo").value;

        document.querySelector(".nameone").innerHTML=loverone;
        document.querySelector(".nametwo").innerHTML=lovertwo;


        if(loverone===lovertwo){
            alert("Error Both names are Same..!")
        }
        else{
            addbothinput=loverone+lovertwo;
            const myarr =addbothinput.split('')
            

            function removeduplicate(arr){
                let discarded =[];
                let good = [];
                let test;

                while(test =arr.pop()){
                    if(arr.indexOf(test)>-1){
                        discarded.push(test)
                        continue;

                    }
                    else if(discarded.indexOf(test)){
                        good.push(test)
                    }
                    

                }
                return good.reverse();
            }
            x=removeduplicate(myarr)
            console.log(x)

            if(x.length===1|| x.length===7|| x.length===13|| x.length===19|| x.length===25){
                document.querySelector(".flame").innerHTML ="FRIENDSHIP"
            }
            else if(x.length===2|| x.length===8|| x.length===15|| x.length===20|| x.length===25){
                 document.querySelector(".flame").innerHTML ="LOVERS"
            }
            else if(x.length===3|| x.length===9|| x.length===16|| x.length===21|| x.length===25){
                 document.querySelector(".flame").innerHTML ="AFFECTION"
            }
            else if(x.length===4|| x.length===10|| x.length===17|| x.length===22|| x.length===25){
                 document.querySelector(".flame").innerHTML ="MARRIAGE"
            }
            else if(x.length===5|| x.length===11|| x.length===18|| x.length===23|| x.length===25){
                 document.querySelector(".flame").innerHTML ="ENEMIES"
            }
            else if(x.length===6|| x.length===12|| x.length===19|| x.length===24|| x.length===25){
                 document.querySelector(".flame").innerHTML ="SIBLINGS"
            }
        }
            
    }   
    
