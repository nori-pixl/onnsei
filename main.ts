/**
 * 音声合成のテスト
 */
//% color="#5C2D91" icon="\uf0a1" block="Onsei"
namespace onsei {
    /**
     * しゃべるブロック
     */
    //% block="しゃべる %text"
    export function say(text: string): void {
        basic.showString(text)
    }
}
