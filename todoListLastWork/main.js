const addForm = document.getElementById('addForm');
const list = document.getElementById('listUl');


addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let value = addForm.addInput.value;
    generateTemp(value);
    addForm.addInput.value = '';
})

function generateTemp (value) {
    const item = `<li class="item">
            <p class="text">${value}</p>
            <div class="bascet">
                    <img src="images/junk.png" class="deleteBtn" alt="">
                </div>
            </li>`
    listUl.innerHTML += item; 
}

list.addEventListener('click', (e) => deleteTodo(e.target));
function deleteTodo(item){
    console.log(item);
    if(item.className === "deleteBtn"){
        item.parentNode.parentNode.remove();
    }
}

