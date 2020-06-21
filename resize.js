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
    
    //画像のリサイズ
    resizeImage(dataUri).then(function(resizedDataUri) {
        console.log(resizedDataUri);
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

function resizeImage(dataUri) {
    return new Promise(function(resolve, reject) {
        let image = new Image();

        image.onload = function(event) {
            let ratio = 0.5;

            let canvas = $('#canvas').attr('width', image.width * ratio).attr('height', image.height * ratio);
            let ctx = canvas[0].getContext('2d');

            //canvasに描画されている画像を削除
            ctx.clearRect(0, 0, canvas[0].width, canvas[0].height);

            //画像を描画する
            ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, image.width * ratio, image.height * ratio);

            //DataURIを取得
            let resizedDataUri = canvas[0].toDataURL('image/jpeg');

            resolve(resizedDataUri);
        };

        image.onerror = function(error) {
            reject(error);
        };
        
        image.src = dataUri;
    });
}