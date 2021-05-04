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
function compress() {
    // 压缩到图片原始宽高的一半
    let w = img_original.naturalWidth / 2;
    let h = img_original.naturalHeight / 2;

    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    let anw = document.createAttribute("width");
    anw.nodeValue = w;
    let anh = document.createAttribute("height");
    anh.nodeValue = h;
    canvas.setAttributeNode(anw);
    canvas.setAttributeNode(anh);

    ctx.fillRect(0, 0, w, h);
    ctx.drawImage(img_original, 0, 0, w, h);

    const base64 = canvas.toDataURL('image/jpeg', 0.75);// 压缩后质量
    const bytes = window.atob(base64.split(',')[1]);
    const ab = new ArrayBuffer(bytes.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
    }
    blob = new Blob([ab], {type: 'image/jpeg'});

    console.log('压缩后的图片大小', blob.size);
    // 预览压缩后的图片
    img_output.src = base64
}
    
