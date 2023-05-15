input.onButtonPressed(Button.A, function () {
    radio.sendString("a")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("b")
})
radio.setGroup(83)
