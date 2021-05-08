function solveC () {
    list[2] = true
}
function checksolution (num: number) {
    solve(num)
    if (gotsolution == true) {
        music.setBuiltInSpeakerEnabled(true)
        music.playMelody("C E G C5 C5 C5 - - ", 500)
        basic.showIcon(IconNames.Yes)
        gotsolution = false
    } else {
        music.playTone(131, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.Skull)
    }
    AnzeigeSpielstand()
}
function solveE () {
    list[4] = true
}
input.onButtonPressed(Button.A, function () {
    if (solvingnow == false) {
        if (Index > 4) {
            Index = 0
            basic.showString("A")
        } else if (Index == 0) {
            Index += 1
            basic.showString("B")
        } else if (Index == 1) {
            Index += 1
            basic.showString("C")
        } else if (Index == 2) {
            Index += 1
            basic.showString("D")
        } else if (Index == 3) {
            Index += 1
            basic.showString("E")
        } else if (Index == 4) {
            Index += 1
            basic.showString("F")
        } else if (Index == 5) {
            Index += 1
            basic.showString("G")
        } else if (Index == 6) {
            Index += 1
            basic.showString("H")
        } else {
            Index += 1
        }
    }
})
function solveH () {
    list[7] = true
}
function solveD () {
    list[3] = true
}
function solveG () {
    list[6] = true
}
// ruft den überprüfungsprozess allgemein auf
function solve (num: number) {
    solvingnow = true
    if (num == 0) {
        solveA()
    }
    if (num == 1) {
        solveB()
    }
    if (num == 2) {
        solveC()
    }
    if (num == 3) {
        solveD()
    }
    if (num == 4) {
        solveE()
    }
    if (num == 5) {
        solveF()
    }
    if (num == 6) {
        solveG()
    }
    if (num == 7) {
        solveH()
    }
    solvingnow = false
    AnzeigeSpielstand()
}
function solveF () {
    list[5] = true
}
input.onButtonPressed(Button.B, function () {
    if (solvingnow == false) {
        solve(Index)
    }
})
function solveA () {
    ZahleingabeCounter = 0
    while (!(input.buttonIsPressed(Button.A))) {
        if (input.buttonIsPressed(Button.B)) {
            ZahleingabeCounter += 1
            basic.showNumber(ZahleingabeCounter)
        }
    }
    if (ZahleingabeCounter == 3) {
        basic.showIcon(IconNames.Yes)
        list[Index] = true
    } else {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.No)
            basic.pause(50)
            basic.clearScreen()
            basic.pause(50)
        }
    }
}
function AnzeigeSpielstand () {
    music.setBuiltInSpeakerEnabled(true)
    music.setVolume(255)
    basic.clearScreen()
    if (list[0] == true) {
        for (let index = 0; index < 4; index++) {
            led.unplot(0, 0)
            led.unplot(1, 0)
            basic.pause(100)
            led.plot(0, 0)
            led.plot(1, 0)
            basic.pause(100)
        }
    }
    if (list[1] == true) {
        for (let index = 0; index < 4; index++) {
            led.unplot(3, 0)
            led.unplot(4, 0)
            basic.pause(100)
            led.plot(3, 0)
            led.plot(4, 0)
            basic.pause(100)
        }
    }
    if (list[2] == true) {
        for (let index = 0; index < 4; index++) {
            led.unplot(0, 1)
            led.unplot(1, 1)
            basic.pause(100)
            led.plot(0, 1)
            led.plot(1, 1)
            basic.pause(100)
        }
    }
    if (list[3] == true) {
        for (let index = 0; index < 4; index++) {
            led.unplot(3, 1)
            led.unplot(4, 1)
            basic.pause(100)
            led.plot(3, 1)
            led.plot(4, 1)
            basic.pause(100)
        }
    }
    if (list[4] == true) {
        for (let index = 0; index < 4; index++) {
            led.unplot(0, 2)
            led.unplot(1, 2)
            basic.pause(100)
            led.plot(0, 2)
            led.plot(1, 2)
            basic.pause(100)
        }
    }
    if (list[5] == true) {
        for (let index = 0; index < 4; index++) {
            led.unplot(3, 2)
            led.unplot(4, 2)
            basic.pause(100)
            led.plot(3, 2)
            led.plot(4, 2)
            basic.pause(100)
        }
    }
    if (list[6] == true) {
        for (let index = 0; index < 4; index++) {
            led.unplot(0, 3)
            led.unplot(1, 3)
            basic.pause(100)
            led.plot(0, 3)
            led.plot(1, 3)
            basic.pause(100)
        }
    }
    if (list[7] == true) {
        for (let index = 0; index < 4; index++) {
            led.unplot(3, 3)
            led.unplot(4, 3)
            basic.pause(100)
            led.plot(3, 3)
            led.plot(4, 3)
            basic.pause(100)
        }
    }
    soundExpression.spring.playUntilDone()
    music.setBuiltInSpeakerEnabled(false)
}
function solveB () {
    list[1] = true
}
function SOS () {
    basic.clearScreen()
    music.setBuiltInSpeakerEnabled(true)
    for (let index = 0; index < 3; index++) {
        led.plot(2, 2)
        music.playTone(262, music.beat(BeatFraction.Half))
        led.unplot(2, 2)
        music.rest(music.beat(BeatFraction.Half))
    }
    music.rest(music.beat(BeatFraction.Double))
    for (let index = 0; index < 3; index++) {
        led.plot(2, 2)
        music.playTone(262, music.beat(BeatFraction.Double))
        led.unplot(2, 2)
        music.rest(music.beat(BeatFraction.Half))
    }
    music.rest(music.beat(BeatFraction.Double))
    for (let index = 0; index < 3; index++) {
        led.plot(2, 2)
        music.playTone(262, music.beat(BeatFraction.Half))
        led.unplot(2, 2)
        music.rest(music.beat(BeatFraction.Half))
    }
    music.setBuiltInSpeakerEnabled(false)
}
function HaenschenKlein () {
    music.setBuiltInSpeakerEnabled(true)
    music.setVolume(255)
    music.playMelody("G E E - F D D - ", 120)
    music.playMelody("C D E F G G G - ", 120)
    music.playMelody("G E E - F D D - ", 120)
    music.playMelody("C E G G C C C - ", 120)
    music.setBuiltInSpeakerEnabled(false)
}
let ZahleingabeCounter = 0
let gotsolution = false
let list: boolean[] = []
let solvingnow = false
let Index = 0
basic.showIcon(IconNames.Skull)
basic.showString("MASTER:BIT")
basic.showIcon(IconNames.Angry)
Index = 5
solvingnow = false
// Liste statt einzelnen Variabeln um die Lösungsvariabeln zu speichern
list = [false, false, false, false, false, false, false, false, false]
gotsolution = false
