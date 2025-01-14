//const escapeRegExp = require('lodash').escapeRegExp;

const vow_plain = [
  'a', 'u', 'i', 'e'
]  
const vow_2 = [
  'á', 'ú', 'í', 'é'
]
const vow_3 = [
  'à', 'ù', 'ì', 'è'
]
const vowels = [].concat(vow_plain, vow_2, vow_3)

const aleph = [
  "ʾ", "’", "ʔ", "'"
]
const shin = [
  'š', 's<', 'c', 'sz'
]
const sin = [
  'ś', "s'"
]
const tsade = [
  'ṣ', 's,', 'ts'
]
const teth = [
  'ṭ', 't,'
]  
const kheth = [
  'ḫ', 'h'
]  
const jod = [
  'y',// 'j' //note ambiguity, s. ng below.
]
const quf = [
  'q', 'k,'
]
const ng = [
  'ŋ', 'ĝ', 'j'
]

const aliases = [aleph, shin, tsade, teth, kheth, jod, quf]
const aliases_flat = [
  ...aleph, ...shin, ...tsade, ...teth, ...kheth, ...jod, ...quf
  ]
const consonants = [
   'ʾ',
   'b', 'p', 
   'd', 't', 'ṭ', 
   'g', 'k', 'q', 
   'n', 'm', 
   'r', 'l',
   's', 'š', 'ṣ', 'z',
   'w', 'y'
  ].concat(aliases_flat);
const tech = [
  ',', ' ', '<', '(', ')', 
  '@', '#', '+', '&', '|', '[', ']'
  ];
const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const index_x = ["ₓ", "x", "X"]
const index = [].concat(num, index_x)

const separators = ['.', '-'];
const types = [
  ['syl', []],
  ['log', ['sumerogram', 'akkadogram', 'abbreviation']],
  ['det', []],
  ['num', []],
  ['pnc', []],
  ['raw', ['unclear', 'instance']],
  ]

// logogram types:
// - (pseudo)sumerogram
// - (pseudo)akkadogram
// - abbreviation

const states = ['text', 'gloss', 'structure']

/*
function reORJoin(array){
  //return array.join("|").replace('\|', '|'); 
  return escapeRegExp(array.join("|")).replace('\|', '|');
};

const atf = ['{', '}', '(', ')', '#', '!', '?'];
//const r_atf = escapeRegExp(vowels.join("|")).replace('\|', '|');

const r_v = reORJoin(vowels); 
const r_c = reORJoin(consonants);
const r_syl = "["+r_c+"]?["+r_v+"]["+r_c+"]?";
const r_value = "(?<value>("+r_syl+")+)";
const r_index = "(?<index>([1-9][0-9]*)*)";
const r_brc = "(?<brc>\(.+\))";
const r_curly = "(?<curly>\{.+\})";
const r_vert = "(?<vert>\|.+\|)";
const re_sign = new RegExp('^'+r_value+r_index+'$', "i");
const re_sep = new RegExp('['+reORJoin(separators)+']');
const re_brc = new RegExp(r_brc);
const re_curly = new RegExp(r_curly);
const re_vert = new RegExp(r_vert);
*/

const TLTChar = {
  //'modes': ['edit', 'hint', 'ready', 'incorrect'],
  'mode': 'ready', //'ready',
   'type': 'log',
  'value': '',
  'index': null,
  'content': null,
  'unit': null,
  'separator': null,
  'exclamation': false,
  'question': false,
  'emendation': false,
  'gloss': false,
  'damage': [(0, 0, 0),(0, 0, 0),(0, 0, 0)],
  'note': null,
  'inputValue': '',
  };

function copy(src) {
  return Object.assign({}, src);
}

/*
function parseATFChar(inputValue){
  
  // Parse inputValue string to fields.
  // Update component's state variables.
  // Params:
  //   value: V VC CV CVC+ & exceptions
  //   index: number or none
  
  var dict = copy(TLTChar);
  dict['inputValue'] = inputValue;
  if (re_sign.test(inputValue)) {
    var matches = re_sign.exec(inputValue);
    var value = matches.groups.value.toLowerCase();
    var index = matches.groups.index;
    if (index=='1') {
      index = '';
    };
    console.log(value, index)
  } else {
    console.log('invalid sign syntax');
    console.log(value, index);
    var lst = [re_brc, re_curly, re_vert]; 
    lst.forEach(function(r) {
      console.log(
        inputValue, 
        r, 
        r.test(inputValue), 
        r.exec(inputValue));
    });
    return dict;
  };
  dict['value'] = value; 
  dict['index'] = index;
  return dict;
};
*/

/* Replace aliases (see lists above) */
function replace_aliases(inputValue) {
  // replace aliases in inputValue.
  // Return new string.
  var i = 0;
  var len = inputValue.length
  if (index_x.includes(inputValue[len-1])){ //handle x values
    if (len > 1 && inputValue.replace(/X|x|ₓ/, '').length > 0) {
      inputValue = inputValue.replace(/X|x/, 'ₓ')
    } else {
      return 'X'
    };
  };
  while (i < aliases.length) { 
    var lst = aliases[i];
    var n = 1;
    while (n < lst.length) {
      var reg = new RegExp(lst[n], "gi");
      inputValue = inputValue.replace(reg, lst[0]);
      n++;
    };
    i++;
  }
  return inputValue
};

/* Update by type */
function update_by_type(inputValue, type){
  
  inputValue = inputValue.replace(/[/{|/}]/g, '');
  inputValue = inputValue.toLowerCase();
  if (['log', 'raw'].indexOf(type) > -1){
    return inputValue.toUpperCase();
  } /* else if (type==='det') {
    return '{'+inputValue+'}';
  } */ else {
    return inputValue;
  };
};


const typesList = ['syl', 'log', 'det', 'pnc', 'num', 'raw'];
//types.flatMap((t, i) => [t[0]]);

function type_children(type) {
  // Get a list of children in type
  var i = typesList.indexOf(type);
  return types[i][1];
};

/* Type scrolling */
function next_type(type) {
  var i = typesList.indexOf(type);
  if (i+1 < typesList.length) {
    return typesList[i+1];
  } else {
    return typesList[0];
  };
};

function prev_type(type) {
  var i = typesList.indexOf(type);
  if (i-1 >= 0){
    return typesList[i-1];
  } else {
    return typesList[typesList.length-1];
  };
};

exports.replace_aliases = replace_aliases;