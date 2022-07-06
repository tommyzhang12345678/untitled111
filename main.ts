basic.forever(function () {
    if (input.acceleration(Dimension.Y) <= 800) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        music.playTone(262, music.beat(BeatFraction.Quarter))
    } else if (input.acceleration(Dimension.Y) > 800) {
        basic.showIcon(IconNames.Yes)
    }
})
