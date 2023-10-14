export default function initDropdownMenu(){

}


const dropdownMenus = document.querySelectorAll('[data-dropdown]');


dropdownMenus.forEach(menu =>{
  ['touchstart','click'].forEach(userEvent => {
    menu.addEventListener(userEvent, handleClick);
  });
})

function handleClick(event){
  event.preventDefault();
  if (this.classList.contains('active')) {
    this.classList.remove('active');
  } else {
    this.classList.add('active');
  }
  console.log(event)
}