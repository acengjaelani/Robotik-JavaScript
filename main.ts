led.enable(true);

basic.forever(function () {
    // Tampilkan teks "Saya"
    basic.showString("SAYA");
    basic.pause(500);
    basic.clearScreen();
    basic.pause(500);

    // Tampilkan ikon hati
    basic.showIcon(IconNames.Heart);
    basic.pause(500);
    basic.clearScreen();
    basic.pause(500);

    // Tampilkan teks "Dia"
    basic.showString("DIA");
    basic.pause(500);
    basic.clearScreen();
    basic.pause(500);
});
