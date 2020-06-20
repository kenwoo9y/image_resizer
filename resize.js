$('.file-input').on('change',function(){
    //ファイルの取得
    let file = $(this).prop('files')[0];
    fileReader(file);
})

function fileReader(file) {
    let fileReader = new FileReader();
    fileReader.onload = function() {
        let dataUri = this.result;
        console.log(dataUri);
    };
    fileReader.readAsDataURL(file);
}

function resizeImage(dataUri) {}