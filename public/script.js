(() => { document.querySelector('#navbarSideCollapse').style.visibility = "hidden"; })()

const show = (object) => document.getElementById(`button${object.id}`).click();

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const touch = (object) => obj.addEventListener("touchstart", () => console.log(object.id), false);
