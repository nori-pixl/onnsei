/**
 * テスト用の音声合成ブロック
 */
//% color="#5C2D91" icon="\uf0a1" block="SpeechTest"
namespace speechTest {
    /**
     * 文字を表示して音を鳴らすテスト
     */
    //% block="しゃべる %text"
    export function speak(text: string): void {
        basic.showString(text)
        music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
    }
}
