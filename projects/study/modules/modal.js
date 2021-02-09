let modalText = `
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalTitle"></h5>
      </div>
      <div class="modal-body" id="modalBody"></div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>`;
function initModal(){
    document.getElementById("modal").innerHTML = modalText;
  }

function updateModal(data, id){
  var modal = new bootstrap.Modal(document.getElementById('modal'));
  if(data){
    document.getElementById("modalTitle").innerHTML = data.rows[id][0];
    document.getElementById("modalBody").innerHTML = createModalBody(data,id);
    modal.show();
  }
}
function createModalBody(data, id){
  let body = '<p>';
  for(let i = 1; i < data.headers.length; i++){
    body += `<strong>${data.headers[i]}: </strong>${ data.rows[id][i]}<br>`;
  }
  return body + '</p>';
}

function customModal(data){
  var modal = new bootstrap.Modal(document.getElementById('modal'));
  document.getElementById("modalTitle").innerHTML = data.title;
  document.getElementById("modalBody").innerHTML = data.body;
  modal.show()
}
export { initModal, updateModal, customModal }