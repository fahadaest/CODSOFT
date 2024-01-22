const input = document.getElementById('input-box');
const listValue = document.getElementById('list-container');

// Function to add task from input to list
function addingTaskToList() {
    // if statement to show alert if user entered nothing
    if (input.value == '') {
        alert('Please write a Task before Clicking "Add Task"');
    }
    // else statement to append input to list
    else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        listValue.appendChild(li);

        // Adding cross to remove the task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = '';
    savingTasksOnLocalStorage();
}

// This eventListener will check where we have clicked, if we have clicked on list item,
// it will change its class to "completed-task" class and mark it as complete and if we 
// click on the SPAN, it will remove the listValue
listValue.addEventListener("click", function (a) {
    if (a.target.tagName === 'LI') {
        a.target.classList.toggle('completed-task');
        savingTasksOnLocalStorage();
    };
    if (a.target.tagName === 'SPAN') {
        a.target.parentElement.remove();
        savingTasksOnLocalStorage();
    };
}, false);

// Function to save data on local storage
function savingTasksOnLocalStorage(){
    localStorage.setItem("data", listValue.innerHTML);
};

// Function to dispay data from local storage
function displayingTasksOnBrowser(){
    listValue.innerHTML = localStorage.getItem('data');
};

displayingTasksOnBrowser();