/*
*
* makecode I2C BLINKIT Package.
*/

/**
* Well known colors for ZIP LEDs
*/
enum ZipLedColors {
    //% block=随机
    Red = 0,
    //% block=环绕
    Orange = 1,
    //% block=S弯
    Yellow = 2,
    //% block=扫描
    Green = 3,
    //% block=直接
    Blue = 4
}

//% weight=20 color=#0855AA icon="B" block="Blinkit"
namespace BLINKIT {

    /**
     * show text in BLINKIT
     * @param s is the text will be show, eg: 'Hello!'
     */
    //% blockId="BLINKIT_I2C_SHOWFIGURE" block="8x8,位置 %PosNum|显示字符串 %s"
    //% weight=80 blockGap=8
    //% parts=BLINKIT_I2C trackArgs=0
    export function showFigure(PosNum: number = 1, s: string) {
        let projectInfo = "7e" + "9" + "d" + PosNum + "1" + s + "#"
        serial.writeString(projectInfo)
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
        let projectInfo = "7e" + "5" + "d" + PosNum + "0" + rgb + "#"
        serial.writeString(projectInfo)
    }

    /**
    * Gets the RGB value of a known color
    */
    //% weight=2 blockGap=8
    //% blockId="BLINKIT_I2C_SHOW_COLOR_COLORS" block="%color"
    export function colors(color: ZipLedColors): number {
        return color;
    }

    
    /**
    * Shows all the ZIP LEDs as a given color (range 0-255 for r, g, b). 
    * @param rgb RGB color of the LED
    */
    //% blockId="BLINKIT_I2C_Servo_turn" block="舵机,位置 %PosNum|,速度 %Spd|,转动%degree" 
    //% weight=97 blockGap=8
    export function servoTurn(PosNum: number = 1, Spd: number, degree: number) {
        let projectInfo = "7e" + "5" + "d" + PosNum + "0" + rgb + "#"
        serial.writeString(projectInfo)
    }
}