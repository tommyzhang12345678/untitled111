input.onButtonPressed(Button.A, function () {
    voilume += 50
})
let voilume = 100
led.setBrightness(1)
basic.forever(function () {
    music.setVolume(voilume)
    if (input.acceleration(Dimension.Y) <= 900) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        music.playTone(262, music.beat(BeatFraction.Quarter))
    } else if (input.acceleration(Dimension.Y) > 900) {
        basic.showIcon(IconNames.Yes)
    }
    if (voilume >= 300) {
        voilume = 50
    }
})
