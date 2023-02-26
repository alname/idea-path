
/*********************
global
*********************/
function ID(name) { return document.getElementById(name); };
function addEVT(elm, type, fnc) { if (!elm) { return false; } try { elm.addEventListener(type, fnc, false); } catch (e) { elm.attachEvent("on" + type, fnc); } };

var arr = ["__katou_megumi_saenai_heroine_no_sodatekata_drawn_by_misaki_kurehito__5f9edb9bbcc9075fb12b746c05d6d295.jpg",
    "Cw7AqHuUAAAHeZI.jpg",
"CW7DRsZUsAAmV70.jpg",
"Cw08VLAUUAEA8i_.jpg",
"CW8MWGbUAAAw5l9.jpg",
"Cw9cy46UoAALAh9.jpg",
"Cw9NjDNVQAAJpLq.jpg",
"Cw30yv0UUAASMcp.jpg",
"CwA_6uUUkAAcLBo.jpg",
"Cw-A3pOUQAEcG3S.jpg",
"Cwajb0HUcAAjZqC.jpg",
"Cwa-JJ2VEAQXQX2.jpg",
"CWARgM6UkAAx-y3.jpg",
"CwATVGqVUAAH9AJ.jpg",
"CwawtUyUsAEmUEa.jpg",
"Cwa-XxvUcAA-BYa.jpg",
"CwB3LxeUEAAGDzr.jpg",
"CwBBMMXUsAA7cu8.jpg",
"CwBckeTVMAAjU63.jpg",
"CWbee8XU8AArnah.jpg",
"CwbOqUAUUAAJMj-.jpg",
"CvwwTCCVYAAdKZx.jpg",
"CvWx-inVMAA0fCd.jpg",
"CvxhuLUUkAAvEM0.jpg",
"CvXnfWEUsAA0Z_P.jpg",
"CvYAgi0VIAEeB_j.jpg",
"CVYiOgxUAAAxQNH.jpg",
"CvyTKd9VMAAUzmN.jpg",
"Cvyv5-QVUAA862Y.jpg",
"CVyxGdDVEAArL4W.jpg",
"CvzK8HNUkAAVFN3.jpg",
"CVzXlvcU4AAzRFH.jpg",
"Cw_1byTUQAAwRtl.jpg",
"Cw_ExtFVEAAMz8S.jpg",
"Cw_M7RGUUAAgvJM.jpg",
"CW_mZPzUQAA6gat.jpg",
"CW_tNstUAAA_E5T.jpg",
"Cw--_-TUAAEIiRK.jpg",
"Cw_xUtdUcAADKD3.jpg",
"Cw0acmAUcAEqSO1.jpg",
"Cw0CSTjUkAAXrIG.jpg",
"CW0zpeZU4AEq8Hu.jpg",
"CW1IfyzUkAE4Wnp.jpg",
"Cw1rcXCUkAALWci.jpg",
"Cw1u__5UcAAcB9p.jpg",
"Cw4o1QnVEAA3Zzv.jpg",
"CW5p-xQVAAABeEo.jpg",
"Cw5uO2XUoAEUebn.jpg",
"Cw5VmvEUAAAFm4B.jpg",
"Cw6JmPqVEAEfP8C.jpg",
"CW6ktyDVAAE95Ej.jpg",];


if ('content' in document.createElement('template')) {
    for (var i = 0; i < 0; i++) {
        var temp = ID('temp-item'),
        a = temp.content.querySelector("a");
        a.href = "/static/image/" + arr[i];
        img=temp.content.querySelector("img");
        img.src = "/static/image/" + arr[i];

        // Clone the new row and insert it into the table
        var clone = document.importNode(temp.content, true);
        document.getElementById("type-gallery").appendChild(clone);
    }
}
function clickAction() {
    document.body.innerHTML = ID("htmljson").innerHTML;

}
// addEVT(ID('link1'), 'click', clickAction);

function loadFile_changeHandler(e){
    console.log("yuio");
    var files = e.target.files;
    var fileData = "";
    handleFiles(files);
    /*for(var i = 0; i < files.length; i++){
        var fileVal = files[i];
        var reader = new FileReader();
        reader.onload = function(fileVal){
        fileData +=
            'ファイル名：' + escape(fileVal.name) + '<br>' +
            'ファイルサイズ：' + fileVal.size + ' バイト<br>' +
            'MIMEタイプ：' + fileVal.type + '<br>' +
            'image：<img style="max-height:200px;" src="' + reader.result + '"><br>' +
            '最終更新日時：' + fileVal.lastModifiedDate + '<hr>';
             //$('#info').innerHTML = fileData;
        }
        reader.readAsDataURL(fileVal);
       }
*/
}
 
function $(id) {
    return document.querySelector(id);
}


window.onload = function(){
	$("#file").addEventListener(
	'change', loadFile_changeHandler);
}

function handleFiles(files) {
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    var imageType = /image.*/;
    
    if (!file.type.match(imageType)) {
      continue;
    }
    
    var img = new Image();
    img.classList.add("obj");
    img.file = file;
    
    var reader = new FileReader();
    reader.onload = (function(aImg) { return function(e) { 
        aImg.src = e.target.result;
        console.log(aImg.naturalWidth)
        console.log(aImg.width)
        var cvs = document.createElement("canvas");
        cvs.width=512*aImg.naturalWidth/aImg.naturalHeight;
        cvs.height=512;
        var ctx = cvs.getContext('2d');
        ctx.msImageSmoothingEnabled = false;
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage( aImg,0,0,512*aImg.naturalWidth/aImg.naturalHeight,512);
        cvs.style.height="256px";
        $('#info').appendChild(cvs);
        console.log(aImg.naturalWidth)
        console.log(aImg.width)
    
 }; })(img);
    reader.readAsDataURL(file);
  }

}
