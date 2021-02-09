function toast(msg){
  if(msg === 1){
    msg = compliments[Math.round(Math.random() * --compliments.length)];
  } else if (msg === -1){
    msg = mistakes[Math.round(Math.random() * --mistakes.length)];
  }
  document.getElementById("toast-body").innerHTML = msg;
  let tId = document.getElementById('toastMe');
  let t = new bootstrap.Toast(tId);
  t.show();
}

let compliments = ["Nice Work", "Great Job", "Keep It Up", "Way To Go"];
let mistakes = ["Try Agains", "Oh No", "Oopsies", "Error Error"];

export { toast }