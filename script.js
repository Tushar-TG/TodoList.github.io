

function addTask(){

    const divv=document.createElement('div');
    divv.classList.add('t1');
    const div1=document.createElement('div');
    div1.classList.add('item-head');
    div1.textContent=prompt("Enter heading for your task");
    divv.appendChild(div1);
    const ip=document.getElementById('gc');
    ip.appendChild(divv);
    div1.addEventListener("click",function(){
        const it=document.createElement('div');
        const it2=document.createElement('input');
        it2.setAttribute('type','checkbox');
        it2.addEventListener("click",function(){
            it2.disabled=true;
        })
        const it3=document.createElement('label');
        it.classList.add('item-checkbox');
        it2.classList.add('chkbox');
        it3.classList.add('chkbox-val');
        it3.textContent=prompt("Enter Task");
        it.appendChild(it2);
        it.appendChild(it3);
        divv.appendChild(it);
        
    });



    
}