let blob;
    
    function preview(file) {
        let reader = new FileReader();
        reader.onload = function () {
            img_original.src = this.result;
            img_original.onload = () => {
                console.log('图片原始宽高:', img_original.naturalWidth, img_original.naturalHeight);
                console.log('图片原始大小:', file.size)
            }
        };
        reader.readAsDataURL(file);

}
    
