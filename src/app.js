require.config({
  baseUrl: "src/app",
  paths: {
    jquery: "//unpkg.com/jquery@4/dist/jquery.min",
  },
});

define(function (require) {
  $(function () {
    const $ = require("jquery");
    const calc = require("calc");

    const result = $("<div>", {
      class: "result",
      text: "0",
    });
    calc.setShowCallback((e) => result.text(e))

    $("main").append(
      result,

      $("<div>", {
        class: "modifier strong",
        text: "AC",
        click: () => calc.allClear(),
      }),
      $("<div>", {
        class: "modifier",
        text: "C",
        click: () => calc.clear(),
      }),
      $("<div>", {
        class: "modifier",
        text: "+/-",
        click: () => calc.negate(),
      }),
      $("<div>", {
        class: "modifier strong",
        html: "&divide;",
        click: () => calc.op("/"),
      }),

      $("<div>", {
        text: "7",
        click: () => calc.digit(7),
      }),
      $("<div>", {
        text: "8",
        click: () => calc.digit(8),
      }),
      $("<div>", {
        text: "9",
        click: () => calc.digit(9),
      }),
      $("<div>", {
        class: "modifier strong",
        html: "&times;",
        click: () => calc.op("*"),
      }),

      $("<div>", {
        text: "4",
        click: () => calc.digit(4),
      }),
      $("<div>", {
        text: "5",
        click: () => calc.digit(5),
      }),
      $("<div>", {
        text: "6",
        click: () => calc.digit(6),
      }),
      $("<div>", {
        class: "modifier strong",
        html: "&minus;",
        click: () => calc.op("-"),
      }),

      $("<div>", {
        text: "1",
        click: () => calc.digit(1),
      }),
      $("<div>", {
        text: "2",
        click: () => calc.digit(2),
      }),
      $("<div>", {
        text: "3",
        click: () => calc.digit(3),
      }),
      $("<div>", {
        class: "modifier strong",
        html: "&plus;",
        click: () => calc.op("+"),
      }),

      $("<div>", {
        text: "0",
        click: () => calc.digit(0),
      }),
      $("<div>", {
        html: "&period;",
        click: () => calc.digit("."),
      }),
      $("<div>", {
        html: "&#x232B;",
        click: () => calc.backspace(),
      }),
      $("<div>", {
        class: "modifier strong",
        html: "&equals;",
        click: () => calc.equals(),
      }),
    );
  });
});
