function update_info(info_path){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if (this.readyState == 4 && this.status == 200) {
            var lines = this.responseText.split('\n');
            id_info = ['title','sec_1_1','sec_1_2','sec_1_3','sec_1_4','sec_2_1','sec_2_2','sec_2_3','sec_2_4','sec_2_1_1','sec_2_2_1','sec_2_3_1','sec_2_4_1']
            for (var i = 0; i < lines.length & i< id_info.length; i++) {
                var addressContainer = document.getElementById(id_info[i]);
                addressContainer.innerHTML=lines[i];
                addressContainer.setAttribute('style','font-size: 1em; margin-top: 0.125em; font-family:KaiTi;');
                if(i>=5 && i<=8) addressContainer.setAttribute('style',"font-weight: bolder;");
        }
    }
}
    xhr.open("GET", info_path, true);
    xhr.send();
}