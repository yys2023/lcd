input.onButtonPressed(Button.A, function () {
    lcd1602.set_backlight(lcd1602.on_off.on)
})
input.onButtonPressed(Button.B, function () {
    lcd1602.set_backlight(lcd1602.on_off.off)
})
lcd1602.setAddress(
lcd1602.I2C_ADDR.addr3
)
lcd1602.set_backlight(lcd1602.on_off.off)
lcd1602.putString("Temp:", 0, 0)
lcd1602.putString("Humi:", 0, 1)
basic.pause(1000)
basic.forever(function () {
    basic.clearScreen()
    basic.pause(1000)
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P1,
    true,
    false,
    true
    )
    lcd1602.putNumber(dht11_dht22.readData(dataType.temperature), 5, 0)
    lcd1602.putNumber(dht11_dht22.readData(dataType.humidity), 5, 1)
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(2000)
    lcd1602.putString("hello", 11, 1)
    basic.pause(2000)
})
