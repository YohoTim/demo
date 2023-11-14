/*
*
* makecode I2C BLINKIT 128x64 Package.
*/

//% weight=20 color=#0855AA icon="B" block="Blinkit"
namespace BLINKIT {
    let font: number[] = [];
    
    let _I2CAddr = 0;
    let _screen = pins.createBuffer(1025);
    let _buf2 = pins.createBuffer(2);
    let _buf3 = pins.createBuffer(3);
    let _buf4 = pins.createBuffer(4);
    let _ZOOM = 1;

    /**
     * show text in BLINKIT
     * @param x is X alis, eg: 0
     * @param y is Y alis, eg: 0
     * @param s is the text will be show, eg: 'Hello!'
     * @param color is string color, eg: 1
     */
    //% blockId="BLINKIT_I2C_SHOWFIGURE" block="显示图案 字符 %s"
    //% weight=80 blockGap=8
    //% parts=BLINKIT_I2C trackArgs=0
    export function showFigure(s: string) {
        serial.writeString(s)
    }

    /**
     * show a number in BLINKIT
     * @param x is X alis, eg: 0
     * @param y is Y alis, eg: 0
     * @param num is the number will be show, eg: 12
     * @param color is number color, eg: 1
     */
    //% blockId="BLINKIT_I2C_NUMBER" block="显示数字在 x %x|y %y|数字 %num|颜色 %color"
    //% weight=80 blockGap=8
    //% parts=BLINKIT_I2C trackArgs=0
    export function showNumber(x: number, y: number, num: number, color: number = 1) {
        showString(x, y, num.toString(), color)
    }

    /**
     * BLINKIT initialize
     * @param addr is i2c addr, eg: 60
     */
    //% blockId="BLINKIT_I2C_init" block="初始化BLINKIT 地址为: %addr"
    //% weight=100 blockGap=8
    //% parts=BLINKIT_I2C trackArgs=0
    export function init(addr: number) {
        serial.redirect(
            SerialPin.P8,
            SerialPin.P12,
            BaudRate.BaudRate9600
            )
    }
}