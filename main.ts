//% color="#4b0082" icon="\uf028" block="Speech"
namespace mySpeech {
    /**
     * Pythonの speech.say(text, speed, pitch) を再現
     * @param text 喋らせる英単語
     * @param speed 話す速度 (0-255)
     * @param pitch 声の高さ (0-255)
     */
    //% block="say %text | speed %speed | pitch %pitch"
    //% text.defl="hello"
    //% speed.min=0 speed.max=255 speed.defl=72
    //% pitch.min=0 pitch.max=255 pitch.defl=64
    export function say(text: string, speed: number, pitch: number): void {
        // 内部エンジンの設定を更新
        billy.configure(speed, pitch, 64, 128); 
        // 発声実行
        billy.say(text);
    }
}
