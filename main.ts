sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
	
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    yeet.vy = -100
})
let topImage: Image = null
let Gap = 0
let yeet: Sprite = null
yeet = sprites.create(img`
. . . f f f f f f f f f f . . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . 1 5 f 5 5 5 f 5 5 1 . . . 
. . . 1 5 5 5 5 5 5 5 5 1 . . . 
. . . . 5 5 5 3 5 5 5 5 . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . 8 8 8 8 8 8 8 8 8 8 . . . 
. . . 8 8 8 8 8 8 8 8 8 8 . . . 
. . . 8 8 8 8 8 8 8 8 8 8 . . . 
. . . 5 5 8 8 8 8 8 8 5 5 . . . 
. . . 5 5 8 8 8 8 8 8 5 5 . . . 
. . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
yeet.ay = 300
game.onUpdateInterval(1500, function () {
    info.changeScoreBy(1)
    Gap = Math.randomRange(0, 3)
    if (Gap == 0) {
        topImage = img`
. . . . . 6 f c c c c c c c c c c f 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 c c c c 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 c c 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 6 7 c c c c . . . . 
. . . . . . c c 6 c c c c c c 6 c c f . . . . . 
. . . . . . c c c c c c c c c c c c f . . . . . 
. . . . . . c c c c c c c c c c c c f . . . . . 
. . . . . . c c c c c c c c c c c c f . . . . . 
. . . . . . c c c c c c c c c c c c f . . . . . 
. . . . . . c c c c c c c c c c c f f . . . . . 
. . . . . . c c c c c c c c c c c f c . . . . . 
. . . . . 6 f c c c c c c c c c c f 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 c c c c 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 c c 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 6 7 c c . . . . . . 
. . . . . . c c 6 c c c c c c 6 c c . . . . . . 
. . . . . . c c f c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c f c . . . . . . 
. . . . . . c c c c c c c c c c f c . . . . . . 
. . . . . . c c c c c c c c c c f c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . 6 c c c c c c c c c c c c 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 6 6 6 6 c c c c 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 c c 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 6 7 c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . c c c c c c c c c c c c . . . . . . 
. . . . . . b c c c c c c c c c c b . . . . . . 
. . . . . . . b c c c c c c c c b . . . . . . . 
. . . . . . . . b c c c c c c b . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`
    } else {
    	
    }
})
game.onUpdate(function () {
    if (yeet.bottom < 120 == yeet.top < 0) {
        game.over(false)
    }
})
