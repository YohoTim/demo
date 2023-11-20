/*
*
* makecode I2C BLINKIT Package.
*/

/**
* Well known colors for ZIP LEDs
*/
enum ZipLedColors {
    //% block=red
    Red = 0xFF0000,
    //% block=orange
    Orange = 0xFFA500,
    //% block=yellow
    Yellow = 0xFFFF00,
    //% block=green
    Green = 0x00FF00,
    //% block=blue
    Blue = 0x0000FF,
    //% block=indigo
    Indigo = 0x4b0082,
    //% block=violet
    Violet = 0x8a2be2,
    //% block=purple
    Purple = 0xFF00FF,
    //% block=white
    White = 0xFFFFFF,
    //% block=black
    Black = 0x000000
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
    //% blockId="BLINKIT_I2C_SHOW_COLOR" block="show color %rgb=BLINKIT_I2C_SHOW_COLOR_COLORS" 
    //% weight=97 blockGap=8
    export function showColor(rgb: number) {
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