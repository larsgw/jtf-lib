# Untitled object in JSON Transliteration Format Schema

```txt
Sequence#/definitions/sequence
```

Sequence of transliteration characters.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [JTF.schema.json\*](../../out/JTF.schema.json "open original schema") |

## sequence Type

`object` ([Details](jtf-definitions-sequence.md))

# sequence Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                          |
| :-------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| [\_class](#_class)    | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-sequence-properties-_class.md "Sequence#/definitions/sequence/properties/_class")     |
| [type](#type)         | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-sequence-properties-type.md "Sequence#/definitions/sequence/properties/type")         |
| [name](#name)         | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-sequence-properties-name.md "Sequence#/definitions/sequence/properties/name")         |
| [children](#children) | `array`  | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-sequence-properties-children.md "Sequence#/definitions/sequence/properties/children") |

## \_class



`_class`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-sequence-properties-_class.md "Sequence#/definitions/sequence/properties/_class")

### \_class Type

`string`

### \_class Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^Sequence$
```

[try pattern](https://regexr.com/?expression=%5ESequence%24 "try regular expression with regexr.com")

## type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-sequence-properties-type.md "Sequence#/definitions/sequence/properties/type")

### type Type

`string`

## name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-sequence-properties-name.md "Sequence#/definitions/sequence/properties/name")

### name Type

`string`

## children



`children`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-sequence-properties-children.md "Sequence#/definitions/sequence/properties/children")

### children Type

unknown\[]
