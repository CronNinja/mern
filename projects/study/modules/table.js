let tableParams = {
  tableIndex: 0,
  pageLimit: 25,
  hidden: []
}
let table = '';
function createHeader(tableID, headers){
  let tHead = `
    <table class="table table-striped table-hover" id="${ tableID + "Table" }">
      <thead id="${ tableID + "Head" }">
        <tr>
    `;
  headers.forEach(header => {
    tHead += `<th scope="col" id="${tableID + "_" + header}">${ header }</th>`
  });
  table += tHead +`</tr></thead>`;
}
  function populateTD(tableID, row, rowNum){
    let tds = '';
    for(let i = 0; i < row.length; i++ ){
      tds += `<td id="${ tableID + '_tr_' + rowNum + '_td_' + i}">${ row[i] }</td>`;
    };
    return tds;
  }
  function populateTable(tableID, rows){
    let trs = `<tbody id="${ tableID + 'Body'}">`;
    let len = tableParams.tableIndex + tableParams.pageLimit;
    if(len > rows.length) len = rows.length;
    for(let i = tableParams.tableIndex; i < len; i++){
      trs += `<tr id="${ tableID + '_tr_' + i }">`;
      trs += populateTD(tableID, rows[i], i) + '</tr>';
    }
   table += trs + '</tbody></table>';
   document.getElementById("table").innerHTML = table;
  }
  function createTable(data){
    document.getElementById("table").innerText = table = "";
    let tableID = data.tableID;
    createHeader(tableID, data.headers);
    populateTable(tableID,data.rows);
    addHiddenHeaders(data);
  }
  function addHiddenHeaders(data){
    let tableID = data.tableID;
    data.headers.forEach(header => {
      let t = tableID +  "_" + header;
      document.getElementById(t).innerHTML = header + ` <i class="bi bi-toggle2-off" id="${ t + "_hidden" }"></i>`;
      document.getElementById(t + "_hidden").addEventListener("click", () => { hideHeaderListener(data, t + "_hidden"); }, false);
    });
  }
  function getColumns(column){
    let tds = Array.from(document.getElementById("table").querySelectorAll('td'));
    let TDX = [];
    tds.find((td) => {
     if(td.id.includes('_td_' + column)) TDX.push(td.id);
    });
    return TDX;
  }
  function hideColumn(column){
    let columns = getColumns(column);
    columns.forEach(c => {
      document.getElementById(c).innerHTML = "***";
    })
  }
  function showColumn(data, column){
    let columns = getColumns(column);
    columns.forEach(c => {
      let row = c.split("_");
      document.getElementById(c).innerHTML = data.rows[row[2]][row[4]];
    })
  }
  function hideHeaderListener(data, id){
    let hidden = tableParams.hidden.indexOf(id);
    let index = data.headers.indexOf(id.split("_", 2)[1]);
    if(hidden === -1){
      tableParams.hidden.push(id);
      document.getElementById(id).className = "bi bi-toggle2-on";
      hideColumn(index);
    }
    else {
      tableParams.hidden.splice(hidden, 1);
      document.getElementById(id).className = "bi bi-toggle2-off";
      showColumn(data, index);
    }
  }
export { createTable }; 