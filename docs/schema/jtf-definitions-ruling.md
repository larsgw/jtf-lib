# Untitled object in JSON Transliteration Format Schema

```txt
Ruling#/definitions/ruling
```

Ruling.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [JTF.schema.json\*](../../out/JTF.schema.json "open original schema") |

## ruling Type

`object` ([Details](jtf-definitions-ruling.md))

# ruling Properties

| Property           | Type     | Required | Nullable       | Defined by                                                                                                                |
| :----------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------ |
| [\_class](#_class) | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-ruling-properties-_class.md "Ruling#/definitions/ruling/properties/_class") |
| [repeat](#repeat)  | `number` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-ruling-properties-repeat.md "Ruling#/definitions/ruling/properties/repeat") |

## \_class



`_class`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-ruling-properties-_class.md "Ruling#/definitions/ruling/properties/_class")

### \_class Type

`string`

### \_class Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^Ruling$
```

[try pattern](https://regexr.com/?expression=%5ERuling%24 "try regular expression with regexr.com")

## repeat



`repeat`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-ruling-properties-repeat.md "Ruling#/definitions/ruling/properties/repeat")

### repeat Type

`number`
