# Untitled object in JSON Transliteration Format Schema

```txt
Object#/properties/children/items
```

Object.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [JTF.schema.json\*](../../out/JTF.schema.json "open original schema") |

## items Type

`object` ([Details](jtf-definitions-object.md))

# items Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                    |
| :-------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| [\_class](#_class)    | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-object-properties-_class.md "Object#/definitions/object/properties/_class")     |
| [type](#type)         | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-object-properties-type.md "Object#/definitions/object/properties/type")         |
| [name](#name)         | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-object-properties-name.md "Object#/definitions/object/properties/name")         |
| [children](#children) | `array`  | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-object-properties-children.md "Object#/definitions/object/properties/children") |

## \_class



`_class`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-object-properties-_class.md "Object#/definitions/object/properties/_class")

### \_class Type

`string`

### \_class Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^Object$
```

[try pattern](https://regexr.com/?expression=%5EObject%24 "try regular expression with regexr.com")

## type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-object-properties-type.md "Object#/definitions/object/properties/type")

### type Type

`string`

## name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-object-properties-name.md "Object#/definitions/object/properties/name")

### name Type

`string`

## children



`children`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-object-properties-children.md "Object#/definitions/object/properties/children")

### children Type

unknown\[]
