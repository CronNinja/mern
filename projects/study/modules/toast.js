function toast(msg){
  if(msg === 1){
    msg = compliments[Math.round(Math.random() * (compliments.length - 1))];
  } else if (msg === -1){
    msg = mistakes[Math.round(Math.random() * (mistakes.length -1))];
  }
  document.getElementById("toast-body").innerHTML = msg;
  let tId = document.getElementById('toastMe');
  let t = new bootstrap.Toast(tId);
  t.show();
}

let compliments = ["Nice Work", "Great Job", "Keep It Up", "Way To Go", "Crush It", "Amazing", "Another One"];
let mistakes = ["Try Again", "Oh No", "Oopsies", "Error Error", "Ummm...", "Hey Now", "This is Ackward"];

export { toast }