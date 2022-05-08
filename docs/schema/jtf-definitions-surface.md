# Untitled object in JSON Transliteration Format Schema

```txt
Surface#/definitions/surface
```

Surface.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [JTF.schema.json\*](../../out/JTF.schema.json "open original schema") |

## surface Type

`object` ([Details](jtf-definitions-surface.md))

# surface Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                       |
| :-------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| [\_class](#_class)    | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-surface-properties-_class.md "Surface#/definitions/surface/properties/_class")     |
| [type](#type)         | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-surface-properties-type.md "Surface#/definitions/surface/properties/type")         |
| [name](#name)         | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-surface-properties-name.md "Surface#/definitions/surface/properties/name")         |
| [children](#children) | `array`  | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-surface-properties-children.md "Surface#/definitions/surface/properties/children") |

## \_class



`_class`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-surface-properties-_class.md "Surface#/definitions/surface/properties/_class")

### \_class Type

`string`

### \_class Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^Surface$
```

[try pattern](https://regexr.com/?expression=%5ESurface%24 "try regular expression with regexr.com")

## type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-surface-properties-type.md "Surface#/definitions/surface/properties/type")

### type Type

`string`

## name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-surface-properties-name.md "Surface#/definitions/surface/properties/name")

### name Type

`string`

## children



`children`

*   is required

*   Type: an array of merged types ([Details](jtf-definitions-surface-properties-children-items.md))

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-surface-properties-children.md "Surface#/definitions/surface/properties/children")

### children Type

an array of merged types ([Details](jtf-definitions-surface-properties-children-items.md))
