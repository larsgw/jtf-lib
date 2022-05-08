# Untitled object in JSON Transliteration Format Schema

```txt
Line#/definitions/line
```

Line.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [JTF.schema.json\*](../../out/JTF.schema.json "open original schema") |

## line Type

`object` ([Details](jtf-definitions-line.md))

# line Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                              |
| :-------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------- |
| [\_class](#_class)    | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-line-properties-_class.md "Line#/definitions/line/properties/_class")     |
| [type](#type)         | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-line-properties-type.md "Line#/definitions/line/properties/type")         |
| [name](#name)         | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-line-properties-name.md "Line#/definitions/line/properties/name")         |
| [children](#children) | `array`  | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-line-properties-children.md "Line#/definitions/line/properties/children") |

## \_class



`_class`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-line-properties-_class.md "Line#/definitions/line/properties/_class")

### \_class Type

`string`

### \_class Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^Line$
```

[try pattern](https://regexr.com/?expression=%5ELine%24 "try regular expression with regexr.com")

## type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-line-properties-type.md "Line#/definitions/line/properties/type")

### type Type

`string`

## name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-line-properties-name.md "Line#/definitions/line/properties/name")

### name Type

`string`

## children



`children`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-line-properties-children.md "Line#/definitions/line/properties/children")

### children Type

unknown\[]
