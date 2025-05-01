// USE async/await TO LOAD THE JSON DATA AND RETURN IT BACK INTO THE buildGrid() FUNCTION
export async function fetchEmployees() {
	try {
		const response = await fetch('/data/employees.json')
        const data = await response.json();
        const employees = data.employees;
        return employees;
	} catch (error) {
		console.log(error.message);
        return [];
	}
}


export async function init(buildGrid, empTable) {
    const employees = await fetchEmployees();
    await buildGrid(empTable, employees);
}