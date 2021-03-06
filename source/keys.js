function key (name, x, y, ckbName, xsize, ysize) {
  var key = Object.create(null);

  key.name    = name;
  key.ckbname = ckbName;
  key.x       = x;
  key.y       = y;
  key.xsize   = xsize || 1;
  key.ysize   = ysize || 1;
  key.color   = "green";

  return key;
}

module.exports = [
  key("esc", 0,   0, "esc"),
  key("F1",  2,   0, "f1"),
  key("F2",  3,   0, "f2"),
  key("F3",  4,   0, "f3"),
  key("F4",  5,   0, "f4"),
  key("F5",  6.5, 0, "f5"),
  key("F6",  7.5, 0, "f6"),
  key("F7",  8.5, 0, "f7"),
  key("F8",  9.5, 0, "f8"),
  key("F9",  11,  0, "f9"),
  key("F10", 12,  0, "f10"),
  key("F11", 13,  0, "f11"),
  key("F12", 14,  0, "f12"),

  key("prs",   15.5, 0, "prtscn"),
  key("scrl",  16.5, 0, "scroll"),
  key("pause", 17.5, 0, "pause"),

  key("~",    0,  1.2, "grave"),
  key("1",    1,  1.2, "1"),
  key("2",    2,  1.2, "2"),
  key("3",    3,  1.2, "3"),
  key("4",    4,  1.2, "4"),
  key("5",    5,  1.2, "5"),
  key("6",    6,  1.2, "6"),
  key("7",    7,  1.2, "7"),
  key("8",    8,  1.2, "8"),
  key("9",    9,  1.2, "9"),
  key("0",    10, 1.2, "0"),
  key("_",    11, 1.2, "minus"),
  key("=",    12, 1.2, "equal"),
  key("back", 13, 1.2, "bspace", 2),

  key("ins",  15.5, 1.2, "ins"),
  key("home", 16.5, 1.2, "home"),
  key("p-up", 17.5, 1.2, "pgup"),

  key("nlock", 19, 1.2, "numlock"),
  key("/",     20, 1.2, "numslash"),
  key("*",     21, 1.2, "numstar"),
  key("-",     22, 1.2, "numminus"),

  key("tab", 0,    2.2, "tab", 1.5),
  key("q",   1.5,  2.2, "q"),
  key("w",   2.5,  2.2, "w"),
  key("e",   3.5,  2.2, "e"),
  key("r",   4.5,  2.2, "r"),
  key("t",   5.5,  2.2, "t"),
  key("y",   6.5,  2.2, "y"),
  key("u",   7.5,  2.2, "u"),
  key("i",   8.5,  2.2, "i"),
  key("o",   9.5,  2.2, "o"),
  key("p",   10.5, 2.2, "p"),
  key("[",   11.5, 2.2, "lbrace"),
  key("]",   12.5, 2.2, "rbrace"),
  key("|",   13.5, 2.2, "bslash", 1.5),

  key("delete", 15.5, 2.2, "del"),
  key("end",    16.5, 2.2, "end"),
  key("p-dwn",  17.5, 2.2, "pgdn"),

  key("n7", 19, 2.2, "num7"),
  key("n8", 20, 2.2, "num8"),
  key("n9", 21, 2.2, "num9"),
  key("n+", 22, 2.2, "numplus", 1, 2),

  key("caps",  0,  3.2, "caps", 2),
  key("a",     2,  3.2, "a"),
  key("s",     3,  3.2, "s"),
  key("d",     4,  3.2, "d"),
  key("f",     5,  3.2, "f"),
  key("g",     6,  3.2, "g"),
  key("h",     7,  3.2, "h"),
  key("j",     8,  3.2, "j"),
  key("k",     9,  3.2, "k"),
  key("l",     10, 3.2, "l"),
  key(";",     11, 3.2, "colon"),
  key("'",     12, 3.2, "quote"),
  key("enter", 13, 3.2, "enter", 2),

  key("n4", 19, 3.2, "num4"),
  key("n5", 20, 3.2, "num5"),
  key("n6", 21, 3.2, "num6"),

  key("lshift", 0,    4.2, "lshift", 2.3),
  key("z",      2.3,  4.2, "z"),
  key("x",      3.3,  4.2, "x"),
  key("c",      4.3,  4.2, "c"),
  key("v",      5.3,  4.2, "v"),
  key("b",      6.3,  4.2, "b"),
  key("n",      7.3,  4.2, "n"),
  key("m",      8.3,  4.2, "m"),
  key(",",      9.3,  4.2, "comma"),
  key(".",      10.3, 4.2, "dot"),
  key("/",      11.3, 4.2, "slash"),
  key("rshift", 12.3, 4.2, "rshift", 2.7),
  key("up",     16.5, 4.2, "up"),

  key("n1",     19, 4.2, "num1"),
  key("n2",     20, 4.2, "num2"),
  key("n3",     21, 4.2, "num3"),
  key("nenter", 22, 4.2, "numenter", 1, 2),

  key("lctrl", 0,    5.2, "lctrl", 1.5),
  key("lwin",  1.5,  5.2, "lwin",  1),
  key("lalt",  2.5,  5.2, "lalt",  1.2),
  key("space", 3.7,  5.2, "space", 6.6),
  key("ralt",  10.3, 5.2, "ralt",  1.2),
  key("rwin",  11.5, 5.2, "rwin"),
  key("ctx",   12.5, 5.2, "rmenu"),
  key("rctrl", 13.5, 5.2, "rctrl", 1.5),

  key("left",  15.5, 5.2, "left"),
  key("down",  16.5, 5.2, "down"),
  key("right", 17.5, 5.2, "right"),

  key("n0", 19, 5.2, "num0", 2),
  key("n.", 21, 5.2, "numdot") // why the hell is this key space? :o
];