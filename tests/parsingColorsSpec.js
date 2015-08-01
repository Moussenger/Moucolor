describe ("Parsing colors", function () {

    it("#ffffff is a valid color", function () {
        expect(Moucolor.parse("#ffffff")).not.toThrow();
    });

    it("#fff is a valid color", function () {
        expect(Moucolor.parse("#ffffff")).not.toThrow();
    });

    it("#fgfgfg is an incorrect color", function () {
        expect(Moucolor.parse("#fgfgfg")).toThrow();
    });

    it("#ffff is an incorrect format color", function () {
        expect(Moucolor.parse("#ffff")).toThrow();
    });

    it("#fffffff is an incorrect format color", function () {
        expect(Moucolor.parse("#ffffff")).toThrow();
    });

    it("fffffff is an incorrect format color", function () {
        expect(Moucolor.parse("ffffff")).toThrow();
    });

    it("#123456 is correctly parsed", function () {
        expect(Moucolor.parse("#123456").hex()).toBe("#123456");
    });

    it("#abcdef has 171 like decimal red value", function () {
        expect(Moucolor.parse("#abcdef").red().dec()).toBe(171);
    });

    it("#abcdef has 205 like decimal green value", function () {
        expect(Moucolor.parse("#abcdef").green().dec()).toBe(205);
    });

    it("#abcdef has 239 like decimal blue value", function () {
        expect(Moucolor.parse("#abcdef").red().dec()).toBe(239);
    });

});