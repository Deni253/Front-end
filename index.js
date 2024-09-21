document.addEventListener('DOMContentLoaded', renderTable); 


function renderTable() {
    const people = JSON.parse(localStorage.getItem('people')) || []; 
    const PeopleTable = document.getElementById('PeopleTable'); 

    if (people.length === 0) {
        
        const existingMessage = document.getElementById("Message-text");
        if (!existingMessage) {
            const message = document.createElement('p');
            message.id = "Message-text"; 
            message.innerHTML = `There are no people in the table.`;
            document.body.appendChild(message); 
        }
    }

    PeopleTable.innerHTML = `
        <tr>
            <td>Firstname</td>
            <td>Lastname</td>
            <td>Action</td>
        </tr>
    `;

    
    people.map((person, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${person.firstname}</td>
            <td>${person.lastname}</td>
            <td>
                <button onclick="renderUpdateTable(${index})">Update</button>
                <button id="update" onclick="deletePerson(${index})">Delete</button>
            </td>
        `;
        PeopleTable.appendChild(row); 
    });
}


document.getElementById('btn').onclick = function() {
    const fname = document.getElementById('firstname').value.trim(); // Trim whitespace
    const lname = document.getElementById('lastname').value.trim(); // Trim whitespace

        const people = JSON.parse(localStorage.getItem('people')) || []; 
        const person = {
            firstname: fname,
            lastname: lname
        };
        people.push(person); 
        localStorage.setItem('people', JSON.stringify(people)); 

        renderTable();
        document.getElementById('firstname').value = ''; 
        document.getElementById('lastname').value = ''; 
    }


function deletePerson(index) {
    const people = JSON.parse(localStorage.getItem('people')) || []; 
    people.splice(index, 1); 
    localStorage.setItem('people', JSON.stringify(people)); 
    renderTable(); 
}


function renderUpdateTable(index) {
    const people = JSON.parse(localStorage.getItem('people')) || []; 
    const existingForm = document.getElementById('updateForm');
    if (existingForm) {
        existingForm.remove(); 
    }
        const form = document.createElement('form');
        form.id='updateForm';
        form.innerHTML = `       
            <h5>UPDATE TABLE</h5>
            <label>First name:<input id="updateFirstName" type="text"></label><br>
            <label>Last name:<input id="updateLastName" type="text"></label><br>
            <button type="submit">Confirm</button>
            <button onclick="cancel(form)">Cancel</button>
        `;
        document.body.appendChild(form); 

        form.onsubmit = function(event) {
            event.preventDefault(); 
            updatePerson(index); 
            form.remove(); 
        };
}
function cancel(form) {
    form.remove();
}

 function updatePerson(index) {
        const people = JSON.parse(localStorage.getItem('people')) || []; 
        const newName=document.getElementById('updateFirstName').value.trim();
        const newLastName=document.getElementById('updateLastName').value.trim();
        people[index].firstname = newName;
        people[index].lastname = newLastName; 
        localStorage.setItem('people', JSON.stringify(people)); 
        renderTable(); // Refresh the table
    }

document.getElementById('btn-del').onclick = function() {
    localStorage.removeItem('people'); 
    renderTable(); 
};