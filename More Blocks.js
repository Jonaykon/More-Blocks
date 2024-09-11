(function (Scratch) {
  "use strict";
  class jonaykonmoreblocks {
    getInfo() {
      return {
        id: "jonaykonmoreblocks",
        name: "More Blocks",


        blocks: [
          {
            opcode: "ifReturn",
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
          "---",
          {
            opcode: "currentMillisecond",
            blockType: Scratch.BlockType.REPORTER,
            text: "current millisecond",
          },
          "---",
          {
            opcode: "invertNumber",
            blockType: Scratch.BlockType.REPORTER,
            text: "- [VALUE]",
            disableMonitor: true,
            arguments: {
              VALUE: {
                type: Scratch.ArgumentType.NUMBER,
              },
            },
          },
          {
            opcode: "contentOf",
            blockType: Scratch.BlockType.REPORTER,
            text: "content of [URL]",
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "URL"
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
            opcode: "true",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "true",
            disableMonitor: true,
          },
          {
            opcode: "false",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "false",
            disableMonitor: true,
          },
          {
            opcode: "stringToBoolean",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[STRING]",
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "true",
              },
            },
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
            opcode: "lettersFromTo",
            blockType: Scratch.BlockType.REPORTER,
            text: "letters [A] to [B] of [STRING]",
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 5,
              },
              B: {
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
            opcode: "replaceWithIn",
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
            opcode: "clamp",
            blockType: Scratch.BlockType.REPORTER,
            text: "clamp [A] between [B] and [C]",
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100,
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
              C: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 50,
              },
            },
          },
          {
            opcode: "toThePowerOf",
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
          "---",
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
          "---",
          {
            blockType: Scratch.BlockType.XML,
            xml: '<block id="for_each" type="control_for_each"><value name="VALUE"><shadow type="math_whole_number"><field name="NUM">10</field></shadow></value></block>',
          },
          {
            blockType: Scratch.BlockType.XML,
            xml: '<block id="while" type="control_while"/>',
          },
          {
            blockType: Scratch.BlockType.XML,
            xml: '<block type="control_get_counter"/>',
          },
          {
            blockType: Scratch.BlockType.XML,
            xml: '<block type="control_incr_counter"/>',
          },
          {
            blockType: Scratch.BlockType.XML,
            xml: '<block type="control_clear_counter"/>',
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

    true() {
      return true;
    }

    false() {
      return false;
    }

    string({ VALUE }) {
        return VALUE;
    }

    toThePowerOf({ A, B }) {
      A = Scratch.Cast.toNumber(A);
      B = Scratch.Cast.toNumber(B);
      return Math.pow(A, B);
    }

    ifReturn({ A, B, C }) {
      return A ? B : C;
    }

    lettersFromTo({ A, B, STRING }) {
      return STRING.slice(Math.max(1, A) - 1, Math.min(STRING.length, B));
    }

    clamp({ A, B, C }) {
      A = Scratch.Cast.toNumber(A);
      B = Scratch.Cast.toNumber(B);
      C = Scratch.Cast.toNumber(C);
      if (B > C) {
        return Math.min(Math.max(A, C), B);
      } else {
        return Math.min(Math.max(A, B), C);
      }
    }

    currentMillisecond() {
      return Date.now() % 1000;
    }

    contentOf({ URL }) {
      return Scratch.fetch(URL)
        .then((res) => res.text())
        .catch((err) => "");
    }

    stringToBoolean({ STRING }) {
      return STRING;
    }

    replaceWithIn({ STRING, REGEX, NEWSTRING }) {
      return STRING.toString().replace(new RegExp(REGEX, "gi"), NEWSTRING);
    }

    invertNumber({ VALUE }) {
      return VALUE * -1;
    }

    comment() {
        return true;
    }
  }


  Scratch.extensions.register(new jonaykonmoreblocks());
})(Scratch);
