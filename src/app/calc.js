define({
  _entry: "0",
  _accum: null,
  _op: null,
  _fresh: false,
  _cb: () => {},

  setShowCallback(cb) {
    this._cb = cb;
  },

  _show(v) {
    this._entry = String(v);
    this._cb(this._entry);
  },

  _flush() {
    if (this._op === null || this._accum === null) return;
    const b = parseFloat(this._entry);
    const ops = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => a / b,
    };
    this._show(ops[this._op](this._accum, b));
    this._accum = null;
  },

  digit(d) {
    if (this._fresh) {
      this._entry = "0";
      this._fresh = false;
    }
    if (d === "." && this._entry.includes(".")) return;
    const next = this._entry === "0" && d !== "." ? String(d) : this._entry + d;
    this._show(next);
  },

  backspace() {
    if (this._fresh) return;
    this._show(this._entry.length > 1 ? this._entry.slice(0, -1) : "0");
  },

  op(operator) {
    this._flush();
    this._accum = parseFloat(this._entry);
    this._op = operator;
    this._fresh = true;
  },

  equals() {
    this._flush();
    this._op = null;
    this._fresh = true;
  },

  negate() {
    this._show(parseFloat(this._entry) * -1);
  },

  clear() {
    this._entry = "0";
    this._fresh = false;
    this._show("0");
  },

  allClear() {
    this._entry = "0";
    this._accum = null;
    this._op = null;
    this._fresh = false;
    this._show("0");
  },
});
