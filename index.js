
const employee = {
    name: {
        chase: "Chase",
        holly: "Holly"
    }, 
    streetAddress: {
        chase: "3535 hill", 
        holly: "3535 drive"
    }
}

// function updateEmployeeWithKeyAndValue(name, street, it) {
//     const newObj = {...name}
//     newObj[street] = it
//     return newObj;
// 

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]: value,};
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const emde = {...employee}
    delete emde[key];
    return emde
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}


