let navbar = `
<nav class="navbar fixed-top navbar-light bg-light">
  <a class="navbar-brand" href="/mern/">Dick Pruitt</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link" href="/mern/projects/" id="mern">MERN Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/mern/projects/practice/" id="practice">Sample Projects</a>
      </li>
    </ul>
  </div>
</nav>
`;
function updateNavBar(){
  document.getElementById("navHeader").innerHTML = navbar;
}
export { updateNavBar }