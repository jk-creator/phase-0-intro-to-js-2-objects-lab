// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employee2 = { ...employee };
    employee2[key] = value;
    return employee;
};
updateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway')
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};
destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '13 Broad')
function deleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
};
deleteFromEmployeeByKey(employee, 'streetAddress')
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const employeeDel = { ...employee };
    delete employeeDel[key];
    return employeeDel;
};
destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress')