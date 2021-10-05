let chhotka =document.querySelector(".inner")
let chhotka1 = document.querySelector(".inner1")

function select(e){
    e.preventDefault()
    if(chhotka.style.backgroundColor===""){
  chhotka.style.backgroundColor="blue"
    }else if(chhotka.style.backgroundColor==="blue"){
        chhotka.style.backgroundColor=""
    }
}
document.querySelector(".inner1").disabled=true;

function select1(e){
    e.preventDefault()
    if(chhotka1.style.backgroundColor===""){
  chhotka1.style.backgroundColor="blue"
    }else if(chhotka1.style.backgroundColor==="blue"){
        chhotka1.style.backgroundColor=""
        chhotka1.disabled=true;
    }

}


chhotka.onclick=select
chhotka1.onclick=select1