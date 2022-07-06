basic.forever(function () {
    if (input.acceleration(Dimension.Y) <= 800) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (input.acceleration(Dimension.Y) > 800) {
        basic.showIcon(IconNames.Yes)
    }
})
