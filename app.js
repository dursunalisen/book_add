
  
const titleInput=document.getElementById("title");
const writerInput=document.getElementById("writer");
const homeInput=document.getElementById("publishing_house");
const pageInput=document.getElementById("page");


//--------------------------------------------------------------------------------

/*const titledeg=titleInput.value.trim();
const writerdeg=writerInput.value.trim();
const homedeg=homeInput.value.trim();
const pagedeg=pageInput.value.trim();
*/


class Request{

    constructor(){
        this.xhr=new XMLHttpRequest();


    }
    
    get(url,callback){

        this.xhr.open("GET",url);
        this.xhr.onload=()=>{
           
            if(this.xhr.status==200){
                        
                
               callback(null,this.xhr.responseText);
            }
            else{
                callback("bir hata oluştu!!!", null);

            }
        }
        
        
        this.xhr.send();
    }
    post(url,data,callback){
        this.xhr.open("POST",url);
        this.xhr.setRequestHeader("Content-type","application/json"); 
        this.xhr.onload =()=>{
            if(this.xhr.status==201){
                callback(null,this.xhr.responseText);
            }
            else{
                callback("Gönderme hatası oluştu ",null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }




}
const request=new Request();
request.get("http://5bfea60b362b930013f65267.mockapi.io/api/book2/bookdata",function(err,response){
  
    if(err==null){
      console.log(response);

    }  
    else{

    console.log(err);
    }

});

request.post("http://5bfea60b362b930013f65267.mockapi.io/api/book2/bookdata",{name:"Uçurtma Avcısı",writer:"Khaled Hosseini",publishing_house:"Everest Yayınları",page:375},function(err,response){
 
if(err==null){
        console.log(response);
    }

    else{
        console.log(err);
    }
});



