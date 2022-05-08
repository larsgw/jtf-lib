# Untitled object in JSON Transliteration Format Schema

```txt
Field#/definitions/field
```

Inline field.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [JTF.schema.json\*](../../out/JTF.schema.json "open original schema") |

## field Type

`object` ([Details](jtf-definitions-field.md))

# field Properties

| Property           | Type     | Required | Nullable       | Defined by                                                                                                             |
| :----------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------- |
| [\_class](#_class) | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-field-properties-_class.md "Field#/definitions/field/properties/_class") |
| [type](#type)      | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-field-properties-type.md "Field#/definitions/field/properties/type")     |

## \_class



`_class`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-field-properties-_class.md "Field#/definitions/field/properties/_class")

### \_class Type

`string`

### \_class Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^Field$
```

[try pattern](https://regexr.com/?expression=%5EField%24 "try regular expression with regexr.com")

## type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-field-properties-type.md "Field#/definitions/field/properties/type")

### type Type

`string`
