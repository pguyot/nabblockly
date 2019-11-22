Blockly.defineBlocksWithJsonArray([
{
  "type": "blink_nose_fuchsia",
  "message0": "clignoter le nez",
  "args0": [],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "290"
},
{
  "type": "blink_middle",
  "message0": "clignoter au milieu en %1",
  "args0": [{
    "type": "field_colour",
    "name": "COLOR",
    "colour": "#FF00FF"
  }],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "290"
},
{
  "type": "blink_nose",
  "message0": "clignoter le nez en %1",
  "args0": [{
    "type": "field_colour",
    "name": "COLOR",
    "colour": "#FF00FF"
  }],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "290"
},
{
  "type": "turn_led_on",
  "message0": "allumer %1 en %2",
  "args0": [
  {
    "type": "field_dropdown",
    "name": "LED",
    "options": [
        [ "le nez", "NOSE" ],
        [ "à gauche", "LEFT" ],
        [ "au milieu", "MIDDLE" ],
        [ "à droite", "RIGHT" ],
    ]
  },
  {
    "type": "field_colour",
    "name": "COLOR",
    "colour": "#FF00FF"
  }],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "290"
},
{
  "type": "turn_led_on_simple_colors",
  "message0": "allumer %1 en %2",
  "args0": [
  {
    "type": "field_dropdown",
    "name": "LED",
    "options": [
        [ "le nez", "NOSE" ],
        [ "à gauche", "LEFT" ],
        [ "au milieu", "MIDDLE" ],
        [ "à droite", "RIGHT" ],
    ]
  },
  {
    "type": "field_dropdown",
    "name": "COLOR",
    "options": [
        [ "blanc", "white" ],
        [ "bleu", "blue" ],
        [ "jaune", "yellow" ],
        [ "orange", "orange" ],
        [ "rouge", "red" ],
        [ "vert", "lime" ],
        [ "violet", "fuchsia" ],
    ]
  }],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "290"
},
{
  "type": "turn_led_off",
  "message0": "éteindre %1",
  "args0": [
  {
    "type": "field_dropdown",
    "name": "LED",
    "options": [
        [ "le nez", "NOSE" ],
        [ "à gauche", "LEFT" ],
        [ "au milieu", "MIDDLE" ],
        [ "à droite", "RIGHT" ],
    ]
  }],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "290"
},
{
  "type": "move_left_ear_one_step",
  "message0": "tourner un peu l'oreille gauche",
  "args0": [],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "160"
},
{
  "type": "move_ear_one_step",
  "message0": "tourner un peu l'oreille %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "EAR",
      "options": [
          [ "gauche", "LEFT" ],
          [ "droite", "RIGHT" ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "160"
},
{
  "type": "move_ear",
  "message0": "tourner l'oreille %1 de %2 crans",
  "args0": [
  {
    "type": "field_dropdown",
    "name": "EAR",
    "options": [
        [ "gauche", "LEFT" ],
        [ "droite", "RIGHT" ]
    ]
  },
  {
    "type": "field_number",
    "name": "STEPS",
    "min": -17,
    "max": 17,
    "value": 1
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "160"
},
{
  "type": "play_note",
  "message0": "jouer la note %1",
  "args0": [
  {
    "type": "field_dropdown",
    "name": "SOUND",
    "options": [
        [ "La (4)", "1noteA4" ],
        [ "Si (5)", "1noteB5" ],
        [ "Si b (4)", "1noteBb4" ],
        [ "Do (5)", "1noteC5" ],
        [ "Ré (4)", "1noteE4" ],
        [ "Fa (4)", "1noteF4" ],
        [ "Fa (5)", "1noteF5" ],
        [ "Sol (5)", "1noteG5" ]
    ]
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "30"
},
{
  "type": "play_notes",
  "message0": "jouer les notes %1",
  "args0": [
  {
    "type": "field_dropdown",
    "name": "SOUND",
    "options": [
        [ "C6C4", "2notesC6C4" ],
        [ "C6F5", "2notesC6F5" ],
        [ "D4A5", "2notesD4A5" ],
        [ "D4G4", "2notesD4G4" ],
        [ "D5G4", "2notesD5G4" ],
        [ "E5A5", "2notesE5A5" ],
        [ "E5C6", "2notesE5C6" ],
        [ "E5E4", "2notesE5E4" ],
        [ "A4G5G5", "3notesA4G5G5" ],
        [ "B5A5F5", "3notesB5A5F5" ],
        [ "B5D5C6", "3notesB5D5C6" ],
        [ "D4E4G4", "3notesD4E4G4" ],
        [ "E5A5C6", "3notesE5A5C6" ],
        [ "E5C6D5", "3notesE5C6D5" ],
        [ "E5D5A5", "3notesE5D5A5" ],
        [ "F5C6G5", "3notesF5C6G5" ],
    ]
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "30"
},
{
  "type": "say_word",
  "message0": "dire %1",
  "args0": [
  {
    "type": "field_dropdown",
    "name": "SOUND",
    "options": [
        [ "oui", "yes" ],
        [ "non", "no" ],
        [ "youpi", "youpi" ],
    ]
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "30"
},
]);

/**
 * Generator for these blocks create calls to new methods.
 */
Blockly.JavaScript['blink_nose_fuchsia'] = function(block) {
  var code = 'ledBlink(0, "fuchsia");\n';
  return code;
};
Blockly.JavaScript['blink_nose'] = function(block) {
  var color = String(block.getFieldValue('COLOR'));
  var code = 'ledBlink(0, "' + color + '");\n';
  return code;
};
Blockly.JavaScript['blink_middle'] = function(block) {
  var color = String(block.getFieldValue('COLOR'));
  var code = 'ledBlink(2, "' + color + '");\n';
  return code;
};
Blockly.JavaScript['turn_led_on'] = function(block) {
  var led = String(block.getFieldValue('LED'));
  var color = String(block.getFieldValue('COLOR'));
  var ledIx = ["NOSE", "LEFT", "MIDDLE", "RIGHT"].indexOf(led);
  var code = 'led(' + ledIx + ', "' + color + '");\n';
  return code;
};
Blockly.JavaScript['turn_led_on_simple_colors'] = function(block) {
  var led = String(block.getFieldValue('LED'));
  var color = String(block.getFieldValue('COLOR'));
  var ledIx = ["NOSE", "LEFT", "MIDDLE", "RIGHT"].indexOf(led);
  var code = 'led(' + ledIx + ', "' + color + '");\n';
  return code;
};
Blockly.JavaScript['turn_led_off'] = function(block) {
  var led = String(block.getFieldValue('LED'));
  var ledIx = ["NOSE", "LEFT", "MIDDLE", "RIGHT"].indexOf(led);
  var code = 'led(' + ledIx + ', "black");\n';
  return code;
};
Blockly.JavaScript['move_left_ear_one_step'] = function(block) {
  var code = 'ear(0, 1);\n';
  return code;
};
Blockly.JavaScript['move_ear_one_step'] = function(block) {
  var ear = String(block.getFieldValue('EAR'));
  var earIx = ["LEFT", "RIGHT"].indexOf(ear);
  var code = 'ear(' + earIx + ', 1);\n';
  return code;
};
Blockly.JavaScript['move_ear'] = function(block) {
  var ear = String(block.getFieldValue('EAR'));
  var earIx = ["LEFT", "RIGHT"].indexOf(ear);
  var steps = Number(block.getFieldValue('STEPS'));
  var code = 'ear(' + earIx + ', ' + steps + ');\n';
  return code;
};
Blockly.JavaScript['play_note'] = function(block) {
  var sound = String(block.getFieldValue('SOUND'));
  var soundPath = SoundPaths[sound];
  var code = 'playSound("' + soundPath + '");\n';
  return code;
};
Blockly.JavaScript['play_notes'] = function(block) {
  var sound = String(block.getFieldValue('SOUND'));
  var soundPath = SoundPaths[sound];
  var code = 'playSound("' + soundPath + '");\n';
  return code;
};
Blockly.JavaScript['say_word'] = function(block) {
  var sound = String(block.getFieldValue('SOUND'));
  var soundPath = SoundPaths[sound];
  var code = 'playSound("' + soundPath + '");\n';
  return code;
};

const SoundPaths = {
  "1noteA4": "choreographies/1noteA4.mp3",
  "1noteB5": "choreographies/1noteB5.mp3",
  "1noteBb4": "choreographies/1noteBb4.mp3",
  "1noteC5": "choreographies/1noteC5.mp3",
  "1noteE4": "choreographies/1noteE4.mp3",
  "1noteF4": "choreographies/1noteF4.mp3",
  "1noteF5": "choreographies/1noteF5.mp3",
  "1noteG5": "choreographies/1noteG5.mp3",
  "2notesC6C4": "choreographies/2notesC6C4.mp3",
  "2notesC6F5": "choreographies/2notesC6F5.mp3",
  "2notesD4A5": "choreographies/2notesD4A5.mp3",
  "2notesD4G4": "choreographies/2notesD4G4.mp3",
  "2notesD5G4": "choreographies/2notesD5G4.mp3",
  "2notesE5A5": "choreographies/2notesE5A5.mp3",
  "2notesE5C6": "choreographies/2notesE5C6.mp3",
  "2notesE5E4": "choreographies/2notesE5E4.mp3",
  "3notesA4G5G5": "choreographies/3notesA4G5G5.mp3",
  "3notesB5A5F5": "choreographies/3notesB5A5F5.mp3",
  "3notesB5D5C6": "choreographies/3notesB5D5C6.mp3",
  "3notesD4E4G4": "choreographies/3notesD4E4G4.mp3",
  "3notesE5A5C6": "choreographies/3notesE5A5C6.mp3",
  "3notesE5C6D5": "choreographies/3notesE5C6D5.mp3",
  "3notesE5D5A5": "choreographies/3notesE5D5A5.mp3",
  "3notesF5C6G5": "choreographies/3notesF5C6G5.mp3",
  "yes": "nabblockly/words/yes.mp3",
  "no": "nabblockly/words/no.mp3",
  "youpi": "nabblockly/words/youpi.mp3",
};

function nabaztagSendChoreography(base64, callback) {
  $.ajax({
    type: "PUT",
    url: '/api/command',
    data: {"sequence":"[{\"choreography\":\"data:application/x-nabaztag-mtl-choreography;base64," + base64 + "\"}]"},
    success: function (data, status, xhr) {
      if (callback) {
        callback();
      }
    },
    error: function (jqXhr, textStatus, errorMessage) {
      console.log("AJAX error");
      if (callback) {
        callback();
      }
    },
  });
}

function nabaztagPlaySound(path, callback) {
  $.ajax({
    type: "PUT",
    url: '/api/command',
    data: {"sequence":"[{\"audio\":\"" + path + "\"}]"},
    success: function (data, status, xhr) {
      if (callback) {
        callback();
      }
    },
    error: function (jqXhr, textStatus, errorMessage) {
      console.log("AJAX error");
      if (callback) {
        callback();
      }
    },
  });
}

function colorToRGBA(color) {
    // Returns the color as an array of [r, g, b, a] -- all range from 0 - 255
    // color must be a valid canvas fillStyle. This will cover most anything
    // you'd want to use.
    // Examples:
    // colorToRGBA('red')  # [255, 0, 0, 255]
    // colorToRGBA('#f00') # [255, 0, 0, 255]
    var cvs, ctx;
    cvs = document.createElement('canvas');
    cvs.height = 1;
    cvs.width = 1;
    ctx = cvs.getContext('2d');
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 1, 1);
    return ctx.getImageData(0, 0, 1, 1).data;
}

/**
 * Register the interpreter asynchronous functions.
 */
function initInterpreterNabaztag(interpreter, scope) {
  // Ensure function name does not conflict with variable names.
  Blockly.JavaScript.addReservedWords('ledBlink');
  Blockly.JavaScript.addReservedWords('led');
  Blockly.JavaScript.addReservedWords('ear');
  Blockly.JavaScript.addReservedWords('playSound');

  var ledBlinkWrapper = interpreter.createAsyncFunction(function(led, color, callback) {
    interpreter._nabaztagActions.push({action:"ledBlink", parameters:[led.data, color.data]});
    var rgba = colorToRGBA(color);
    console.log(rgba);
    var base64ch = btoa(String.fromCharCode.apply(null, [0,1,10,0,7,led,rgba[0],rgba[1],rgba[2],0,0,15,7,led,0,0,0,0,0]));
    console.log(base64ch);
    nabaztagSendChoreography(base64ch, callback);
  });

  var ledWrapper = interpreter.createAsyncFunction(function(led, color, callback) {
    interpreter._nabaztagActions.push({action:"led", parameters:[led.data, color.data]});
    var rgba = colorToRGBA(color);
    var base64ch = btoa(String.fromCharCode.apply(null, [0,7,led,rgba[0],rgba[1],rgba[2],0,0]));
    nabaztagSendChoreography(base64ch, callback);
  });

  var earWrapper = interpreter.createAsyncFunction(function(ear, steps, callback) {
    interpreter._nabaztagActions.push({action:"ear", parameters:[ear.data, steps.data]});
    var stepsPos = steps;
    var dir = 0;
    if (steps < 0) {
        dir = 1;
        stepsPos = -steps;
    }
    var base64ch = btoa(String.fromCharCode.apply(null, [0,20,ear,dir,0,17,ear,stepsPos]));
    nabaztagSendChoreography(base64ch, callback);
  });

  var playSoundWrapper = interpreter.createAsyncFunction(function(sound, callback) {
    interpreter._nabaztagActions.push({action:"playSound", parameters:[sound.data]});
    nabaztagPlaySound(sound, callback);
  });
  interpreter.setProperty(scope, 'ledBlink', ledBlinkWrapper);
  interpreter.setProperty(scope, 'led', ledWrapper);
  interpreter.setProperty(scope, 'ear', earWrapper);
  interpreter.setProperty(scope, 'playSound', playSoundWrapper);
}

function nabaztagEnterInteractiveMode() {
    $.ajax({
      type: "PUT",
      url: '/api/mode',
      data: {"mode":"interactive"},
      success: function() {
        nabaztagSendChoreography("AAkAAAA=");
      }
    });
}

function nabaztagExitInteractiveMode(callback) {
    $.ajax({
      type: "PUT",
      url: '/api/mode',
      data: {"mode":"idle"},
      success: function() {
        if (callback) {
          callback();
        }
      },
      error: function() {
        console.log("AJAX error");
        if (callback) {
          callback();
        }
      },
    });
}
