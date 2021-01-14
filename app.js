console.log("WWWWW")
const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

function addGoal()
{
    
    const enteredValue=inputEl.value;
    const listItemEl=document.createElement('li');
    listItemEl.textContent= enteredValue;
    console.log("enteredValue = ",enteredValue.length)
    if(enteredValue.length>0)
    {
        listEl.appendChild(listItemEl)
        inputEl.value="";
    }
    
    
}

buttonEl.addEventListener('click',addGoal)