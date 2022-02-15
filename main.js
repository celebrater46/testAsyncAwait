"use strict";

const waitForLoading = (img) => {
    return new Promise(resolve => {
        if(img.complete){
            resolve()
        } else {
            img.addEventListener('load', () => resolve())
        }
    })
}

const main = async() => {
    //ここで画像の追加
    await Promise.all(Array.from(document.querySelectorAll('追加したimg要素')).map(waitForLoading))
    // ロード完了後に行う処理
}