/*
*
* makecode I2C BLINKIT Package.
*/

//% weight=20 color=#0855AA icon="B" block="Blinkit"
namespace BLINKIT {

    /**
     * show text in BLINKIT
     * @param s is the text will be show, eg: 'Hello!'
     */
    //% blockId="BLINKIT_I2C_SHOWFIGURE" block="显示图案 字符 %s"
    //% weight=80 blockGap=8
    //% parts=BLINKIT_I2C trackArgs=0
    export function showFigure(s: string) {
        serial.writeString(s)
    }

    /**
     * BLINKIT initialize
     */
    //% blockId="BLINKIT_I2C_init" block="初始化BLINKIT"
    //% weight=100 blockGap=8
    //% parts=BLINKIT_I2C trackArgs=0
    export function init() {
        serial.redirect(
            SerialPin.P8,
            SerialPin.P12,
            BaudRate.BaudRate9600
            )
    }
}