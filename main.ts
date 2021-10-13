function touchmessages () {
    let message
if (TouchIncrament > 0 && TouchIncrament < 2) {
        message = "plz dont touch me"
    } else if (TouchIncrament > 2 && TouchIncrament < 4) {
        message = "just stop"
    } else if (TouchIncrament > 4 && TouchIncrament < 5) {
        message = "i will go to the HR"
    }
}
input.onButtonPressed(Button.A, function () {
    TouchIncrament += 1
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . # . . .
        # . . # #
        # . . . .
        # . . # #
        . # . . .
        `)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showString("POG!")
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . . # .
        # # . . #
        . . . . #
        # # . . #
        . . . # .
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        . . . . .
        . # . # .
        . # . # .
        `)
})
let TouchIncrament = 0
const set = {
    num1: 1,
    num2: 2
}
