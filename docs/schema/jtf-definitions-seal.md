# Untitled object in JSON Transliteration Format Schema

```txt
Seal#/definitions/seal
```

Seal.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [JTF.schema.json\*](../../out/JTF.schema.json "open original schema") |

## seal Type

`object` ([Details](jtf-definitions-seal.md))

# seal Properties

| Property           | Type     | Required | Nullable       | Defined by                                                                                                          |
| :----------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------ |
| [\_class](#_class) | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-seal-properties-_class.md "Seal#/definitions/seal/properties/_class") |
| [type](#type)      | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-seal-properties-type.md "Seal#/definitions/seal/properties/type")     |
| [name](#name)      | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-seal-properties-name.md "Seal#/definitions/seal/properties/name")     |

## \_class



`_class`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-seal-properties-_class.md "Seal#/definitions/seal/properties/_class")

### \_class Type

`string`

### \_class Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^Seal$
```

[try pattern](https://regexr.com/?expression=%5ESeal%24 "try regular expression with regexr.com")

## type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-seal-properties-type.md "Seal#/definitions/seal/properties/type")

### type Type

`string`

## name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-seal-properties-name.md "Seal#/definitions/seal/properties/name")

### name Type

`string`
