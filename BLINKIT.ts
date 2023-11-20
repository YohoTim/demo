/*
*
* makecode I2C BLINKIT Package.
*/

/**
* Well known colors for ZIP LEDs
*/
enum ZipLedColors {
    //% block=随机
    Red = 0xFF0000,
    //% block=环绕
    Orange = 0xFFA500,
    //% block=S弯
    Yellow = 0xFFFF00,
    //% block=扫描
    Green = 0x00FF00,
    //% block=直接
    Blue = 0x0000FF
}

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

    /**
    * Shows all the ZIP LEDs as a given color (range 0-255 for r, g, b). 
    * @param rgb RGB color of the LED
    */
    //% blockId="BLINKIT_I2C_SHOW_COLOR" block="8x8,位置 %PosNum|,清屏,特效%rgb=BLINKIT_I2C_SHOW_COLOR_COLORS" 
    //% weight=97 blockGap=8
    export function showColor(PosNum: number = 1, rgb: number) {
        rgb = rgb >> 0;
    }

    /**
    * Gets the RGB value of a known color
    */
    //% weight=2 blockGap=8
    //% blockId="BLINKIT_I2C_SHOW_COLOR_COLORS" block="%color"
    export function colors(color: ZipLedColors): number {
        return color;
    }

}