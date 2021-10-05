$(document).ready(function(){ 
    
   $("#btn1").click(function(){
     VanillaToasts.create({
        title:'Para más info:',
        text: 'Si deseas más información sobre la carrera, Ingresa a la p[agina de la UTP.',
        type: 'info',
        icon: 'img/info.png',
        timeout: 6000,
     });
   });
    
  $("#btn2").click(function(){ 
  VanillaToasts.create({ 
      title: 'Welcome to my site',  
      text: 'This toast will hide after 5000ms or when you click it', 
      type: 'warning',   
      icon: 'img/warning.png',  
      timeout: 5000   
  });         
 });   
   
$("#btn3").click(function(){
        VanillaToasts.create({
            title: 'Message Title',
            text: 'Notification text',
            type: 'error',
            icon: 'img/error.png'
        });
    });	    
    
    $("#btn4").click(function(){
        VanillaToasts.create({
            title: 'Message Title',
            text: 'Notification text',
            type: 'success',
            icon: 'img/success.png'
        });
    });	 
});	    