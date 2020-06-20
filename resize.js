function fileReader() {
    let file = document.querySelector('input[type=file]').files[0];
    let fileReader = new FileReader();
    fileReader.onload = function() {
        let dataUri = this.result;
        console.log(dataUri);
    };
    fileReader.readAsDataURL(file);
}

function resizeImage(dataUri) {}