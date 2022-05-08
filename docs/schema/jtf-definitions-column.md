# Untitled object in JSON Transliteration Format Schema

```txt
Column#/definitions/column
```

Column.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [JTF.schema.json\*](../../out/JTF.schema.json "open original schema") |

## column Type

`object` ([Details](jtf-definitions-column.md))

# column Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                    |
| :-------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| [\_class](#_class)    | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-column-properties-_class.md "Column#/definitions/column/properties/_class")     |
| [type](#type)         | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-column-properties-type.md "Column#/definitions/column/properties/type")         |
| [name](#name)         | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-column-properties-name.md "Column#/definitions/column/properties/name")         |
| [children](#children) | `array`  | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-column-properties-children.md "Column#/definitions/column/properties/children") |

## \_class



`_class`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-column-properties-_class.md "Column#/definitions/column/properties/_class")

### \_class Type

`string`

### \_class Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^Column$
```

[try pattern](https://regexr.com/?expression=%5EColumn%24 "try regular expression with regexr.com")

## type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-column-properties-type.md "Column#/definitions/column/properties/type")

### type Type

`string`

## name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-column-properties-name.md "Column#/definitions/column/properties/name")

### name Type

`string`

## children



`children`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-column-properties-children.md "Column#/definitions/column/properties/children")

### children Type

unknown\[]
