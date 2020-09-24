function teste (){
    var d = new Date();
    d.setTime(d.getTime() + (24*60*60*1000));
   var expires = "expires="+ d.toUTCString();
   document.cookie = 'visit' + "=" + 'cvalue' + ";" + expires + ";path=/";

  // fetch('http://localhost:3005').then((res)=>res.json())
    return  document.cookie;  
}  