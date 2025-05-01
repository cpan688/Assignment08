import { init } from './modules/init.js'

// GET DOM ELEMENTS
let empTable    = document.querySelector('#employees')
let empCount    = document.querySelector('#empCount')

// BUILD THE EMPLOYEE GRID
async function buildGrid(table, data) {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    table.lastElementChild.remove()
    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody')
    // LOOP THROUGH THE ARRAY OF EMPLOYEES, REBUILDING THE ROW STRUCTURE
    console.log("Inside buildGrid - data received: ", data)
    for (let employee of data) {
        tbody.innerHTML += `
            <tr>
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.extension}</td>
                <td>${employee.email}</td>
                <td>${employee.department}</td>
                <td><button class="btn btn-sm btn-danger delete">X</button></td>
            </tr>`;
    }
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    table.appendChild(tbody)
    // UPDATE EMPLOYEE COUNT
    document.querySelector('#empCount').value = `(${data.length})`
}

/* Fetching the data from the module will return a Promise object.
    You will need to either use another async/await within the buildGrid() function 
    OR, you will need to use .then() to process the return JSON object */
    init(buildGrid, empTable);