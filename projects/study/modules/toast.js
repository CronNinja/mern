function toast(msg){
  document.getElementById("toast-body").innerHTML = msg;
  let tId = document.getElementById('toastMe');
  let t = new bootstrap.Toast(tId);
  t.show();
}

export { toast }