function teste (){
    var d = new Date();
    d.setTime(d.getTime() + (24*60*60*1000));
   var expires = "expires="+ d.toUTCString();
   document.cookie = 'visit1dddd' + "=" + 'cvalue' + ";" + expires + ";path=/";

 





    return  document.cookie;  
}  