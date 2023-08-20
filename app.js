function initTabNav(){
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  
  if(tabMenu.length && tabContent.length){
    tabContent[0].classList.add('ativo')
  
    function activeTab(index){
      tabContent.forEach((section)=>{
    section.classList.remove('ativo');
      })
      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add('ativo', direcao);
      
    }
    
    tabMenu.forEach((itemMenu, index)=>{
    itemMenu.addEventListener('click', function(){
      activeTab(index);
    })
    })
  
  }
  
}
initTabNav();

function initAccordion(){
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';
  if(accordionList.length){
    accordionList[0].classList.add(activeClass)
    accordionList[0].nextElementSibling.classList.add(activeClass)
    
    
    function activeAccordion(){
      this.nextElementSibling.classList.toggle(activeClass);
      this.classList.toggle(activeClass);
    }
    
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
  
  initAccordion();

  console.log(initNav())
