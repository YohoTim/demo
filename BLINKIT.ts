/*
*
* makecode I2C BLINKIT Package.
*/

/**
* Well known colors for ZIP LEDs
*/
enum LedColors {
    //% block=直接
    Red = 0,
    //% block=渐变
    Orange = 1
}

/**
* Well known colors for ZIP LEDs
*/
enum ZipLedColors {
    //% block=随机
    Red = 0,
    //% block=环绕
    Orange = 1,
    //% block=折弯
    Yellow = 2,
    //% block=扫描
    Green = 3,
    //% block=直接
    Blue = 4
}

/**
* Well known colors for ZIP LEDs
*/
enum ZipLedColors {
    //% block=随机
    Red = 0,
    //% block=环绕
    Orange = 1,
    //% block=折弯
    Yellow = 2,
    //% block=扫描
    Green = 3,
    //% block=直接
    Blue = 4
}


/**
* Well known colors for ZIP LEDs
*/
enum mp3play {
    //% block=播放
    Red = 0,
    //% block=音量
    Orange = 1
}

/**
* Well known colors for ZIP LEDs
*/
enum mp3mode {
    //% block=暂停
    Red = 0,
    //% block=播放
    Orange = 1,
    //% block=下一曲
    Yellow = 2,
    //% block=上一曲
    Green = 3,
    //% block=音量+
    Blue = 4,
    //% block=音量-
    Red1 = 5,
    //% block=onestop
    Orange2 = 6,
    //% block=单曲
    Yellow3 = 7,
    //% block=全局
    Green4 = 8,
    //% block=随机
    Blue5 = 9
}

//% weight=20 color=#0855AA icon="B" block="Blinkit"
namespace BLINKIT {

    /**
     * show text in BLINKIT
     * @param s is the text will be show, eg: 'Hello!'
    */
    //% subcategory="8x8"
    //% blockId="BLINKIT_I2C_SHOWFIGURE" block="8x8,位置 %PosNum|显示字符串 %s|动画 %Type=BLINKIT_I2C_SHOW_8x8type|速度 %v"
    //% weight=80 blockGap=8
    //% parts=BLINKIT_I2C trackArgs=0
    export function showFigure(PosNum: number = 1, s: string,Type: number ,v: number ) {
        let projectInfo = "7e" + "9" + "d" + PosNum + "1" + s + "#"
        serial.writeString(projectInfo)
    }

    /**
     * BLINKIT initialize
     */
    //% blockId="BLINKIT_I2C_init" block="初始化Blinkit"
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
    //% subcategory="8x8"
    //% blockId="BLINKIT_I2C_SHOW_COLOR" block="8x8,位置 %PosNum|,清屏,动画%rgb=BLINKIT_I2C_SHOW_COLOR_COLORS" 
    //% weight=97 blockGap=8
    export function showColor(PosNum: number = 1, rgb: number) {
        let projectInfo = "7e" + "5" + "d" + PosNum + "0" + rgb + "#"
        serial.writeString(projectInfo)
    }

    /**
    * Gets the RGB value of a known color
    */
    //% subcategory="8x8"
    //% weight=2 blockGap=8
    //% blockId="BLINKIT_I2C_SHOW_8x8type" block="%type"
    export function types(type: ZipLedColors): number {
        return type;
    }


    /**
    * Gets the RGB value of a known color
    */
    //% subcategory="LED"
    //% weight=2 blockGap=8
    //% blockId="BLINKIT_I2C_SHOW_COLORS" block="%color"
    export function lcolors(color: LedColors): number {
        return color;
    }

    

    /**
    * Gets the RGB value of a known color
    */
    //% subcategory="MP3"
    //% weight=2 blockGap=8
    //% blockId="BLINKIT_I2C_MP3" block="%color"
    export function mp3m(color: mp3mode): number {
        return color;
    }

    /**
    * Gets the RGB value of a known color
    */
    //% subcategory="MP3"
    //% weight=2 blockGap=8
    //% blockId="BLINKIT_I2C_MP3Play" block="%color"
    export function mp3p(color: mp3play): number {
        return color;
    }

    /**
    * Shows all the ZIP LEDs as a given color (range 0-255 for r, g, b). 
    * @param rgb RGB color of the LED
    */
    //% subcategory="Servo"
    //% blockId="BLINKIT_I2C_Servo_turn" block="舵机,位置 %PosNum|,速度 %Spd|,目标%degree" 
    //% weight=97 blockGap=8
    export function servoTurn(PosNum: number = 1, Spd: number, degree: number) {
        let projectInfo = "7e" + "5" + "d" + PosNum + "0" + Spd + "#"
        serial.writeString(projectInfo)
    }

        
    /**
    * Shows all the ZIP LEDs as a given color (range 0-255 for r, g, b). 
    * @param rgb RGB color of the LED
    */
    //% subcategory="Motor"
    //% blockId="BLINKIT_I2C_motor_turn" block="直流电机,位置 %PosNum|,方向 %Dir|,速度 %Spd" 
    //% weight=97 blockGap=8
    export function motorTurn(PosNum: number = 1, Dir: number, Spd: number) {
        let projectInfo = "7e" + "5" + "d" + PosNum + "0" + Dir + Spd + "#"
        serial.writeString(projectInfo)
    }

    /**
    * Shows all the ZIP LEDs as a given color (range 0-255 for r, g, b). 
    * @param rgb RGB color of the LED
    */
    //% subcategory="LED"
    //% blockId="BLINKIT_I2C_Led_show" block="RGB灯,位置 %PosNum|,色彩R %r|,G %g|,B %b|,动画%rgb=BLINKIT_I2C_SHOW_COLORS" 
    //% weight=97 blockGap=8
    export function ledShow(PosNum: number = 1, r: number, g: number, b: number, rgb: number) {
        let projectInfo = "7e" + "5" + "d" + PosNum + "0" + rgb + "#"
        serial.writeString(projectInfo)
    }

    /**
    * Shows all the ZIP LEDs as a given color (range 0-255 for r, g, b). 
    * @param rgb RGB color of the LED
    */
    //% subcategory="MP3"
    //% blockId="BLINKIT_I2C_Mp3_cmd" block="MP3,位置 %PosNum|,%rgb=BLINKIT_I2C_MP3" 
    //% weight=97 blockGap=8
    export function mp3cmd(PosNum: number = 1, rgb: number) {
        let projectInfo = "7e" + "5" + "d" + PosNum + "0" + rgb + "#"
        serial.writeString(projectInfo)
    }

    
    /**
    * Shows all the ZIP LEDs as a given color (range 0-255 for r, g, b). 
    * @param rgb RGB color of the LED
    */
    //% subcategory="MP3"
    //% blockId="BLINKIT_I2C_Mp3_cmdw" block="MP3,位置 %PosNum|,指定%rgb=BLINKIT_I2C_MP3Play| %indexNum" 
    //% weight=97 blockGap=8
    export function mp3cmd2(PosNum: number = 1, rgb: number, indexNum: number) {
        let projectInfo = "7e" + "5" + "d" + PosNum + "0" + rgb + "#"
        serial.writeString(projectInfo)
    }
}