import { employees } from "./employees.js";
let tableIndex = 0;
let table = `<table class="table table-striped table-hover">
              <thead>
              <tr>
                <th scope="col">First</th>
                <th scope="col">Department</th>
                <th scope="col">Position</th>
                <th scope="col">Gross Pay</th>
              </tr>
              </thead>
              <tbody>`;
function populateTable(){
  for(let i = tableIndex; i < (tableIndex + 100); i++){
    table += `<tr id="(${ i })">
                <td>${ employees[i][0] }</td>
                <td>${ employees[i][1] }</td>
                <td>${ employees[i][2] }</td>
                <td>${ employees[i][10] }</td>
              </tr>`;
  }
}
populateTable();
table += '</table>';
export { table };