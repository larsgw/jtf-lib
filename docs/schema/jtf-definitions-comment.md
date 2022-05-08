# Untitled object in JSON Transliteration Format Schema

```txt
Comment#/definitions/comment
```

Commentary.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [JTF.schema.json\*](../../out/JTF.schema.json "open original schema") |

## comment Type

`object` ([Details](jtf-definitions-comment.md))

# comment Properties

| Property           | Type     | Required | Nullable       | Defined by                                                                                                                   |
| :----------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| [\_class](#_class) | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-comment-properties-_class.md "Comment#/definitions/comment/properties/_class") |
| [type](#type)      | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-comment-properties-type.md "Comment#/definitions/comment/properties/type")     |
| [value](#value)    | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-comment-properties-value.md "Comment#/definitions/comment/properties/value")   |

## \_class



`_class`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-comment-properties-_class.md "Comment#/definitions/comment/properties/_class")

### \_class Type

`string`

### \_class Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^Comment$
```

[try pattern](https://regexr.com/?expression=%5EComment%24 "try regular expression with regexr.com")

## type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-comment-properties-type.md "Comment#/definitions/comment/properties/type")

### type Type

`string`

## value



`value`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-comment-properties-value.md "Comment#/definitions/comment/properties/value")

### value Type

`string`
