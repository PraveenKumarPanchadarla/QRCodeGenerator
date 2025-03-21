function generateqrcode(){
    let site=document.getElementById("site").value;
    if(site){
        let qrcont=document.getElementById("box");
        qrcont.innerHTML="";
        new QRCode(qrcont,site);

        document.getElementById("container").style.display="block";
    }
    else{
        alert("Enter a valid one.");
    }
}


const link=document.getElementById("box")
const btn=document.getElementById('download');
const url=box.src;

btn.addEventListener('click',(event)=>{
    event.preventDefault();
    console.log("ABC");
    downloadImage(url);
})

function downloadImage(url){
    fetch(url,{
        mode: 'no-cors',
    })
    .then(response=>response.blob())
    .then(blob=>{
        let blobUrl=window.URL.createObjectURL(blob);
        let a=document.createElement('a');
        a.download=url.replace(/^.*[\\\/]/,'');
        a.href=blobUrl;
        document.body.appendChild(a);
        a.click();
        a.remove();
    })

}

