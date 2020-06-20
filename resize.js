$('.file-input').on('change',function(){
    //ファイルの取得
    let file = $(this).prop('files')[0];

    // ファイルの読み込み
    fileReader(file).then(function(dataUri) {
        console.log(dataUri);
    })
    .catch(function(error) {
        alert(error);
    });
})

function fileReader(file) {
    return new Promise(function(resolve, reject) {
        let fileReader = new FileReader();

        fileReader.onload = function(event) {
            let dataUri = event.target.result;
            resolve(dataUri);
        };

        fileReader.onerror = function(error) {
            reject(error);
        };

        fileReader.readAsDataURL(file);
    });
}

function resizeImage(dataUri) {}