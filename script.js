const inputName = document.getElementById("input_name");
const selectDev = document.getElementById("select_dev");
const inputDate = document.getElementById("input_date");
const inputImportant = document.getElementById("input_important");
const btnAdd = document.getElementById("btn_add");
const tBody = document.getElementById("liste_taches");
const btnSortAsc = document.getElementById("btn_sort_asc");
const btnSortDesc = document.getElementById("btn_sort_desc");

const tasks = [];

btnAdd.onclick = () =>{
    const task = {
        name: inputName.value,
        dev: selectDev.value,
        date: inputDate.valueAsDate,
        important: inputImportant.checked
    };
    tasks.push(task);

    const row = createRow(task);
    tBody.append(row)

    inputName.value = null;
    inputDate.value = null;
    selectDev.value = null;
    inputImportant.checked = false;

}

function sortT(way){
    if(way ==="asc"){
        tasks.sort((t1,t2)=> t1.date - t2.date);
    }else{
        tasks.sort((t1,t2)=> t2.date - t1.date);
    }
    tBody.innerHTML ='';
    for(const t of tasks){
        tBody.append(createRow(t))
    }
}

btnSortAsc.onclick = () => sortT("asc");
btnSortDesc.onclick = () => sortT("desc");

function createRow(ex){
    const row = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdDev = document.createElement('td');
    const tdDate = document.createElement('td');
    const tdAction = document.createElement('td');
    const deleteBtn= document.createElement('button');
    const trashIcon = document.createElement('i')

    if(ex.important){
        row.classList.add('important');
    }

    tdName.innerText = ex.name;
    tdDev.innerText = ex.dev;
    tdDate.innerText = ex.date.toLocaleDateString();
    deleteBtn.classList.add('btn_supprimer');
    trashIcon.classList.add('fa', 'fa-trash');
    deleteBtn.onclick = () => {
        row.remove();
        tasks.splice(tasks.indexOf(ex), 1)
    }
    deleteBtn.append(trashIcon);
    tdAction.append(deleteBtn);
    row.append(tdName,tdDev,tdDate,tdAction);

return row
}

