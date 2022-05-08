# Untitled object in JSON Transliteration Format Schema

```txt
TLTChar#/definitions/TLTChar
```

Transliteration character

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [JTF.schema.json\*](../../out/JTF.schema.json "open original schema") |

## TLTChar Type

`object` ([Details](jtf-definitions-tltchar.md))

# TLTChar Properties

| Property                    | Type      | Required | Nullable       | Defined by                                                                                                                             |
| :-------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| [\_class](#_class)          | `string`  | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-tltchar-properties-_class.md "TLTChar#/definitions/TLTChar/properties/_class")           |
| [type](#type)               | `string`  | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-tltchar-properties-type.md "TLTChar#/definitions/TLTChar/properties/type")               |
| [value](#value)             | `string`  | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-tltchar-properties-value.md "TLTChar#/definitions/TLTChar/properties/value")             |
| [index](#index)             | `number`  | Optional | cannot be null | [JSON Transliteration Format](jtf-definitions-tltchar-properties-index.md "TLTChar#/definitions/TLTChar/properties/index")             |
| [separator](#separator)     | `string`  | Optional | cannot be null | [JSON Transliteration Format](jtf-definitions-tltchar-properties-separator.md "TLTChar#/definitions/TLTChar/properties/separator")     |
| [unit](#unit)               | `string`  | Optional | cannot be null | [JSON Transliteration Format](jtf-definitions-tltchar-properties-unit.md "TLTChar#/definitions/TLTChar/properties/unit")               |
| [emendation](#emendation)   | `string`  | Optional | cannot be null | [JSON Transliteration Format](jtf-definitions-tltchar-properties-emendation.md "TLTChar#/definitions/TLTChar/properties/emendation")   |
| [gloss](#gloss)             | `string`  | Optional | cannot be null | [JSON Transliteration Format](jtf-definitions-tltchar-properties-gloss.md "TLTChar#/definitions/TLTChar/properties/gloss")             |
| [exclamation](#exclamation) | `boolean` | Optional | cannot be null | [JSON Transliteration Format](jtf-definitions-tltchar-properties-exclamation.md "TLTChar#/definitions/TLTChar/properties/exclamation") |
| [question](#question)       | `boolean` | Optional | cannot be null | [JSON Transliteration Format](jtf-definitions-tltchar-properties-question.md "TLTChar#/definitions/TLTChar/properties/question")       |
| [damage](#damage)           | `boolean` | Optional | cannot be null | [JSON Transliteration Format](jtf-definitions-tltchar-properties-damage.md "TLTChar#/definitions/TLTChar/properties/damage")           |
| [collation](#collation)     | `boolean` | Optional | cannot be null | [JSON Transliteration Format](jtf-definitions-tltchar-properties-collation.md "TLTChar#/definitions/TLTChar/properties/collation")     |
| [note](#note)               | `string`  | Optional | cannot be null | [JSON Transliteration Format](jtf-definitions-tltchar-properties-note.md "TLTChar#/definitions/TLTChar/properties/note")               |
| [graphics](#graphics)       | `object`  | Optional | cannot be null | [JSON Transliteration Format](jtf-definitions-tltchar-properties-graphics.md "TLTChar#/definitions/TLTChar/properties/graphics")       |
| [mode](#mode)               | `string`  | Optional | cannot be null | [JSON Transliteration Format](jtf-definitions-tltchar-properties-mode.md "TLTChar#/definitions/TLTChar/properties/mode")               |
| [inputValue](#inputvalue)   | `string`  | Optional | cannot be null | [JSON Transliteration Format](jtf-definitions-tltchar-properties-inputvalue.md "TLTChar#/definitions/TLTChar/properties/inputValue")   |
| [order](#order)             | `string`  | Optional | cannot be null | [JSON Transliteration Format](jtf-definitions-tltchar-properties-order.md "TLTChar#/definitions/TLTChar/properties/order")             |

## \_class



`_class`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-tltchar-properties-_class.md "TLTChar#/definitions/TLTChar/properties/_class")

### \_class Type

`string`

### \_class Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^TLTChar$
```

[try pattern](https://regexr.com/?expression=%5ETLTChar%24 "try regular expression with regexr.com")

## type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-tltchar-properties-type.md "TLTChar#/definitions/TLTChar/properties/type")

### type Type

`string`

## value



`value`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-tltchar-properties-value.md "TLTChar#/definitions/TLTChar/properties/value")

### value Type

`string`

## index



`index`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-tltchar-properties-index.md "TLTChar#/definitions/TLTChar/properties/index")

### index Type

`number`

## separator



`separator`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-tltchar-properties-separator.md "TLTChar#/definitions/TLTChar/properties/separator")

### separator Type

`string`

## unit



`unit`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-tltchar-properties-unit.md "TLTChar#/definitions/TLTChar/properties/unit")

### unit Type

`string`

## emendation



`emendation`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-tltchar-properties-emendation.md "TLTChar#/definitions/TLTChar/properties/emendation")

### emendation Type

`string`

## gloss



`gloss`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-tltchar-properties-gloss.md "TLTChar#/definitions/TLTChar/properties/gloss")

### gloss Type

`string`

## exclamation



`exclamation`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-tltchar-properties-exclamation.md "TLTChar#/definitions/TLTChar/properties/exclamation")

### exclamation Type

`boolean`

## question



`question`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-tltchar-properties-question.md "TLTChar#/definitions/TLTChar/properties/question")

### question Type

`boolean`

## damage



`damage`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-tltchar-properties-damage.md "TLTChar#/definitions/TLTChar/properties/damage")

### damage Type

`boolean`

## collation



`collation`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-tltchar-properties-collation.md "TLTChar#/definitions/TLTChar/properties/collation")

### collation Type

`boolean`

## note



`note`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-tltchar-properties-note.md "TLTChar#/definitions/TLTChar/properties/note")

### note Type

`string`

## graphics



`graphics`

*   is optional

*   Type: `object` ([Details](jtf-definitions-tltchar-properties-graphics.md))

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-tltchar-properties-graphics.md "TLTChar#/definitions/TLTChar/properties/graphics")

### graphics Type

`object` ([Details](jtf-definitions-tltchar-properties-graphics.md))

## mode



`mode`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-tltchar-properties-mode.md "TLTChar#/definitions/TLTChar/properties/mode")

### mode Type

`string`

## inputValue



`inputValue`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-tltchar-properties-inputvalue.md "TLTChar#/definitions/TLTChar/properties/inputValue")

### inputValue Type

`string`

## order



`order`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-tltchar-properties-order.md "TLTChar#/definitions/TLTChar/properties/order")

### order Type

`string`
