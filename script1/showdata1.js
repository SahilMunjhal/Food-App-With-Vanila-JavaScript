async function getData(url){
  try{
    let response=await fetch(url);
    let data=await response.json();
    return data;
  }catch(err){
      console.log("err",err)
  }
   
}

function appendData(data,location){
    data.meals.forEach((element) =>{
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=element.strMealThumb;
        
        let p=document.createElement("p");
        p.innerText=element.strMeal;
        div.append(img,p);

        location.append(div);
    })
}

export{getData,appendData}

