/**
 * ここに書いた説明がツールボックスのヒントになります
 */
//% color="#4b0082" icon="\uf028" block="音声合成"
namespace mySpeech {
    /**
     * 喋るブロック
     */
    //% block="喋る %text"
    export function say(text: string): void {
        basic.showString(text)
    }
}

