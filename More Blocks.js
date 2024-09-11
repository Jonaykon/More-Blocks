(function (Scratch) {
  "use strict";

  class jonaykonmoreblocks {
    getInfo() {
      return {
        id: "jonaykonmoreblocks",
        name: "More Blocks",

        blocks: [
          {
            opcode: "isExactly",

            blockType: Scratch.BlockType.BOOLEAN,

            text: "[A] === [B]",
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "apple",
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "APPLE",
              },
            },
          },
          {
            opcode: "isLessOrEqual",

            blockType: Scratch.BlockType.BOOLEAN,

            text: "[A] ≤ [B]",
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "",
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 50,
              },
            },
          },
          {
            opcode: "isMoreOrEqual",

            blockType: Scratch.BlockType.BOOLEAN,

            text: "[A] ≥ [B]",
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "",
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 50,
              },
            },
          },
          {
            opcode: "trueBlock",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "true",
            disableMonitor: true,
          },
          {
            opcode: "falseBlock",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "false",
            disableMonitor: true,
          },
          {
            opcode: "string",
            blockType: Scratch.BlockType.REPORTER,
            text: "[VALUE]",
            arguments: {
              VALUE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "",
              },
            },
          },
          {
            opcode: "exponent",

            blockType: Scratch.BlockType.REPORTER,

            text: "[A] ^ [B]",
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
              },
            },
          },
          {
            opcode: "ternaryOperator",

            blockType: Scratch.BlockType.REPORTER,

            text: "if [A] return [B] else [C]",
            arguments: {
              A: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "banana",
              },
              C: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "apple",
              },
            },
            allowDropAnywhere: true,
          },
          {
            opcode: "letters",

            blockType: Scratch.BlockType.REPORTER,

            text: "letters [START] to [END] of [STRING]",
            arguments: {
              START: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 5,
              },
              END: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 7,
              },
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "red apple",
              },
            },
          },
          {
            opcode: "clamp",

            blockType: Scratch.BlockType.REPORTER,

            text: "clamp [INPUT] between [MIN] and [MAX]",
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 30,
              },
              MIN: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 25,
              },
              MAX: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 40,
              },
            },
          },
          {
            opcode: "currentMillisecond",
            blockType: Scratch.BlockType.REPORTER,
            text: "current millisecond",
          },
          {
            opcode: "fetchFrom",

            blockType: Scratch.BlockType.REPORTER,

            text: "content of [URL]",
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
              },
            },
          },
          {
            opcode: "regexReplace",

            blockType: Scratch.BlockType.REPORTER,

            text: "replace [REGEX] with [NEWSTRING] in [STRING]",
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "i like bananas!",
              },
              REGEX: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "banana",
              },
              NEWSTRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "apple",
              },
            },
          },
          {
            opcode: "comment",
            blockType: Scratch.BlockType.CONDITIONAL,
            text: "[COMMENT]",
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
            },
          },
        ],
      };
    }

    isExactly({ A, B }) {
      return A === B;
    }

    isLessOrEqual({ A, B }) {
      return Scratch.Cast.compare(A, B) <= 0;
    }

    isMoreOrEqual({ A, B }) {
      return Scratch.Cast.compare(A, B) >= 0;
    }

    trueBlock() {
      return true;
    }

    falseBlock() {
      return false;
    }

    string({ VALUE }) {
        return VALUE;
    }

    exponent({ A, B }) {
      A = Scratch.Cast.toNumber(A);
      B = Scratch.Cast.toNumber(B);
      return Math.pow(A, B);
    }

    ternaryOperator({ A, B, C }) {
      return A ? B : C;
    }

    letters({ STRING, START, END }) {
      return STRING.slice(Math.max(1, START) - 1, Math.min(STRING.length, END));
    }

    clamp({ INPUT, MIN, MAX }) {
      INPUT = Scratch.Cast.toNumber(INPUT);
      MIN = Scratch.Cast.toNumber(MIN);
      MAX = Scratch.Cast.toNumber(MAX);
      if (MIN > MAX) {
        return Math.min(Math.max(INPUT, MAX), MIN);
      } else {
        return Math.min(Math.max(INPUT, MIN), MAX);
      }
    }

    currentMillisecond() {
      return Date.now() % 1000;
    }

    fetchFrom({ URL }) {
      return Scratch.fetch(URL)
        .then((res) => res.text())
        .catch((err) => "");
    }

    regexReplace({ STRING, REGEX, NEWSTRING }) {
      return STRING.toString().replace(new RegExp(REGEX, "gi"), NEWSTRING);
    }

    comment() {
        return true;
    }
  }

  Scratch.extensions.register(new jonaykonmoreblocks());
})(Scratch);
