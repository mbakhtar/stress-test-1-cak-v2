modules.soilMoisture1.onMoistureChangedBy(5, function () {
    modules.led1.setPixelColor(2, 0xff0000)
})
modules.lightLevel2.onLightLevelChangedBy(5, function () {
    modules.led1.setPixelColor(3, 0xff0000)
})
modules.distance1.onDistanceChangedBy(1, function () {
    modules.led1.setPixelColor(1, 0xff0000)
})
modules.button2.onEvent(jacdac.ButtonEvent.Hold, function () {
    modules.led1.setPixelColor(4, 0x00ff00)
})
modules.rotaryEncoder1.onPositionChanged(function (delta) {
    modules.led1.setPixelColor(0, 0xff0000)
})
modules.button2.onEvent(jacdac.ButtonEvent.Up, function () {
    modules.relay1.setActive(false)
    modules.led1.setPixelColor(4, 0x000000)
})
modules.button2.onEvent(jacdac.ButtonEvent.Down, function () {
    modules.relay1.setActive(true)
    modules.led1.setPixelColor(4, 0xff0000)
})
basic.showIcon(IconNames.Heart)
modules.servo1.setEnabled(true)
modules.led1.setAll(0xff0000)
basic.pause(2000)
modules.led1.setAll(0x000000)
basic.forever(function () {
    modules.servo1.setAngle(90)
    basic.pause(1000)
    modules.servo1.setAngle(-90)
    basic.pause(1000)
})
