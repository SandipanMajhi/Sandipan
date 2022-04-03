window.onload = function(){
    document.getElementById('pubs').style.display = 'none';
    document.getElementById('edu').style.display = 'none';
    document.getElementById('prize').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
};

function toggle_space(idsrc,idshow){
    var txt_space = document.getElementById(idsrc);
    var oChild;

    for(var i = 0; i< txt_space.children.length; i++){
        if(txt_space.children[i].id == idshow){
            var docs = document.getElementById(idshow);
            docs.style.animation="smooth 1s ease";
            docs.style.display = "block";
            docs.style.padding = "2%";
            docs.style.margin = "2%";
        }else
            txt_space.children[i].style.display = 'none';
    }
}