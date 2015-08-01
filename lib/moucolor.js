var Moucolor = (function () {

    var ColorUtils = {
        decToHex : function (dec) {
            dec = dec <= 9 ? "0"+dec : dec;
            return dec.toString(16);
        },

        hexToDec : function (hex) {
            return parseInt(hex, 16);
        },

        hexColorFromDec : function (r, g, b) {
            return "#" + this.decToHex(r) + this.decToHex(g) + this.decToHex(b);
        }
    }

    var ColorValue = function (value) {
        this.value = value;

        this.hex = function () {
            return value;
        }

        this.dec = function () {
            return ColorUtils.hexToDec(value);
        }
    }

    var Color = function (color) {
        var colorPattern  = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
        
        if (!colorPattern.test(color)) {  throw "Color has incorrect format"; }

        color = color.substr(1, color.length);

        if(color.length == 3) {
            color = color[0] + color[0] +
                    color[1] + color[1] +
                    color[2] + color[2];
        }

        this.r = new ColorValue(color.substr(0, 2));
        this.g = new ColorValue(color.substr(2, 2));
        this.b = new ColorValue(color.substr(4, 2));
    }

    Color.prototype.hex = function () {
        return ColorUtils.hexColorFromDec(
            this.red().hex(), 
            this.green().hex(), 
            this.blue().hex()
        );
    }

    Color.prototype.red   = function () { return this.r; }
    Color.prototype.green = function () { return this.g; }
    Color.prototype.blue  = function () { return this.b; }


    return {
        parse : function (color) {
            return new Color(color);
        }
    }

})();