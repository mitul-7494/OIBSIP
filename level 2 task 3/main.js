window.addEventListener('load', () =>{
    const form = document.querySelector('#input-form');
    const task = document.querySelector('#input-box');
    const list = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskvalue = task.value;

        const div1 = document.createElement("div");
        div1.classList.add("task");


        const div2 = document.createElement("div");
        div2.classList.add("content");

        const box = document.createElement("input");
        box.type = "text";
        box.setAttribute("readonly", "readonly");
        box.value = taskvalue;
        div2.appendChild(box);

        div1.appendChild(div2);

        const div3 = document.createElement("div");
        div3.classList.add("actions");

        const edit = document.createElement("button");
        edit.classList.add("edit");
        edit.innerText = "Edit";
        div3.appendChild(edit);

        const del = document.createElement("button");
        del.innerText = "Delete";
        del.classList.add("delete");

        div3.appendChild(del);

        div1.appendChild(div3);

        list.appendChild(div1);


        edit.addEventListener('click',() => {
            if(edit.innerText.toLowerCase() == "edit"){
                box.removeAttribute("readonly");
                box.focus();
                edit.innerText = "Save";
                box.addEventListener('focusout', ()=>{
                    box.setAttribute("readonly", "readonly");
                    edit.innerText = "Edit";
                });
            }
            else{
                box.setAttribute("readonly", "readonly");
                edit.innerText = "Edit";
            }
        });
        
        del.addEventListener('click', () => {
            list.removeChild(div1);
        });
    });



});