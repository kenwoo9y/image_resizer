$('.file-input').on('change',function(){
    //ファイルの取得
    let file = $(this).prop('files')[0];

    // ファイルの読み込み
    fileReader(file).then(function(dataUri) {
        // 画像のsrc要素にDataURIを設定
        $('#image').attr({src: dataUri});
    })
    .catch(function(error) {
        alert(error);
    });
})

$('#button').on('click', function(){
    let dataUri = $('#image').attr('src');
    console.log(dataUri);
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