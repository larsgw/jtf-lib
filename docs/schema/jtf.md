# JSON Transliteration Format Schema

```txt
https://example.com/schemas/abstract
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | Yes        | Unknown status | No           | Forbidden         | Allowed               | none                | [JTF.schema.json](../../out/JTF.schema.json "open original schema") |

## JSON Transliteration Format Type

unknown ([JSON Transliteration Format](jtf.md))

# JSON Transliteration Format Properties

| Property              | Type    | Required | Nullable       | Defined by                                                                                                            |
| :-------------------- | :------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------- |
| [children](#children) | `array` | Optional | cannot be null | [JSON Transliteration Format](jtf-properties-children.md "https://example.com/schemas/abstract#/properties/children") |

## children



`children`

*   is optional

*   Type: `object[]` ([Details](jtf-definitions-object.md))

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-properties-children.md "https://example.com/schemas/abstract#/properties/children")

### children Type

`object[]` ([Details](jtf-definitions-object.md))

# JSON Transliteration Format Definitions

## Definitions group TLTChar

Reference this group by using

```json
{"$ref":"TLTChar#/definitions/TLTChar"}
```

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

### \_class



`_class`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-tltchar-properties-_class.md "TLTChar#/definitions/TLTChar/properties/_class")

#### \_class Type

`string`

#### \_class Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^TLTChar$
```

[try pattern](https://regexr.com/?expression=%5ETLTChar%24 "try regular expression with regexr.com")

### type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-tltchar-properties-type.md "TLTChar#/definitions/TLTChar/properties/type")

#### type Type

`string`

### value



`value`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-tltchar-properties-value.md "TLTChar#/definitions/TLTChar/properties/value")

#### value Type

`string`

### index



`index`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-tltchar-properties-index.md "TLTChar#/definitions/TLTChar/properties/index")

#### index Type

`number`

### separator



`separator`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-tltchar-properties-separator.md "TLTChar#/definitions/TLTChar/properties/separator")

#### separator Type

`string`

### unit



`unit`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-tltchar-properties-unit.md "TLTChar#/definitions/TLTChar/properties/unit")

#### unit Type

`string`

### emendation



`emendation`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-tltchar-properties-emendation.md "TLTChar#/definitions/TLTChar/properties/emendation")

#### emendation Type

`string`

### gloss



`gloss`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-tltchar-properties-gloss.md "TLTChar#/definitions/TLTChar/properties/gloss")

#### gloss Type

`string`

### exclamation



`exclamation`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-tltchar-properties-exclamation.md "TLTChar#/definitions/TLTChar/properties/exclamation")

#### exclamation Type

`boolean`

### question



`question`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-tltchar-properties-question.md "TLTChar#/definitions/TLTChar/properties/question")

#### question Type

`boolean`

### damage



`damage`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-tltchar-properties-damage.md "TLTChar#/definitions/TLTChar/properties/damage")

#### damage Type

`boolean`

### collation



`collation`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-tltchar-properties-collation.md "TLTChar#/definitions/TLTChar/properties/collation")

#### collation Type

`boolean`

### note



`note`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-tltchar-properties-note.md "TLTChar#/definitions/TLTChar/properties/note")

#### note Type

`string`

### graphics



`graphics`

*   is optional

*   Type: `object` ([Details](jtf-definitions-tltchar-properties-graphics.md))

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-tltchar-properties-graphics.md "TLTChar#/definitions/TLTChar/properties/graphics")

#### graphics Type

`object` ([Details](jtf-definitions-tltchar-properties-graphics.md))

### mode



`mode`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-tltchar-properties-mode.md "TLTChar#/definitions/TLTChar/properties/mode")

#### mode Type

`string`

### inputValue



`inputValue`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-tltchar-properties-inputvalue.md "TLTChar#/definitions/TLTChar/properties/inputValue")

#### inputValue Type

`string`

### order



`order`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-tltchar-properties-order.md "TLTChar#/definitions/TLTChar/properties/order")

#### order Type

`string`

## Definitions group inline

Reference this group by using

```json
{"$ref":"inline#/definitions/inline"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group sequence

Reference this group by using

```json
{"$ref":"Sequence#/definitions/sequence"}
```

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                          |
| :---------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| [\_class](#_class-1)    | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-sequence-properties-_class.md "Sequence#/definitions/sequence/properties/_class")     |
| [type](#type-1)         | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-sequence-properties-type.md "Sequence#/definitions/sequence/properties/type")         |
| [name](#name)           | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-sequence-properties-name.md "Sequence#/definitions/sequence/properties/name")         |
| [children](#children-1) | `array`  | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-sequence-properties-children.md "Sequence#/definitions/sequence/properties/children") |

### \_class



`_class`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-sequence-properties-_class.md "Sequence#/definitions/sequence/properties/_class")

#### \_class Type

`string`

#### \_class Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^Sequence$
```

[try pattern](https://regexr.com/?expression=%5ESequence%24 "try regular expression with regexr.com")

### type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-sequence-properties-type.md "Sequence#/definitions/sequence/properties/type")

#### type Type

`string`

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-sequence-properties-name.md "Sequence#/definitions/sequence/properties/name")

#### name Type

`string`

### children



`children`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-sequence-properties-children.md "Sequence#/definitions/sequence/properties/children")

#### children Type

unknown\[]

## Definitions group field

Reference this group by using

```json
{"$ref":"Field#/definitions/field"}
```

| Property             | Type     | Required | Nullable       | Defined by                                                                                                             |
| :------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------- |
| [\_class](#_class-2) | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-field-properties-_class.md "Field#/definitions/field/properties/_class") |
| [type](#type-2)      | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-field-properties-type.md "Field#/definitions/field/properties/type")     |

### \_class



`_class`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-field-properties-_class.md "Field#/definitions/field/properties/_class")

#### \_class Type

`string`

#### \_class Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^Field$
```

[try pattern](https://regexr.com/?expression=%5EField%24 "try regular expression with regexr.com")

### type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-field-properties-type.md "Field#/definitions/field/properties/type")

#### type Type

`string`

## Definitions group comment

Reference this group by using

```json
{"$ref":"Comment#/definitions/comment"}
```

| Property             | Type     | Required | Nullable       | Defined by                                                                                                                   |
| :------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| [\_class](#_class-3) | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-comment-properties-_class.md "Comment#/definitions/comment/properties/_class") |
| [type](#type-3)      | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-comment-properties-type.md "Comment#/definitions/comment/properties/type")     |
| [value](#value-1)    | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-comment-properties-value.md "Comment#/definitions/comment/properties/value")   |

### \_class



`_class`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-comment-properties-_class.md "Comment#/definitions/comment/properties/_class")

#### \_class Type

`string`

#### \_class Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^Comment$
```

[try pattern](https://regexr.com/?expression=%5EComment%24 "try regular expression with regexr.com")

### type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-comment-properties-type.md "Comment#/definitions/comment/properties/type")

#### type Type

`string`

### value



`value`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-comment-properties-value.md "Comment#/definitions/comment/properties/value")

#### value Type

`string`

## Definitions group line

Reference this group by using

```json
{"$ref":"Line#/definitions/line"}
```

| Property                | Type     | Required | Nullable       | Defined by                                                                                                              |
| :---------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------- |
| [\_class](#_class-4)    | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-line-properties-_class.md "Line#/definitions/line/properties/_class")     |
| [type](#type-4)         | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-line-properties-type.md "Line#/definitions/line/properties/type")         |
| [name](#name-1)         | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-line-properties-name.md "Line#/definitions/line/properties/name")         |
| [children](#children-2) | `array`  | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-line-properties-children.md "Line#/definitions/line/properties/children") |

### \_class



`_class`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-line-properties-_class.md "Line#/definitions/line/properties/_class")

#### \_class Type

`string`

#### \_class Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^Line$
```

[try pattern](https://regexr.com/?expression=%5ELine%24 "try regular expression with regexr.com")

### type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-line-properties-type.md "Line#/definitions/line/properties/type")

#### type Type

`string`

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-line-properties-name.md "Line#/definitions/line/properties/name")

#### name Type

`string`

### children



`children`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-line-properties-children.md "Line#/definitions/line/properties/children")

#### children Type

unknown\[]

## Definitions group ruling

Reference this group by using

```json
{"$ref":"Ruling#/definitions/ruling"}
```

| Property             | Type     | Required | Nullable       | Defined by                                                                                                                |
| :------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------ |
| [\_class](#_class-5) | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-ruling-properties-_class.md "Ruling#/definitions/ruling/properties/_class") |
| [repeat](#repeat)    | `number` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-ruling-properties-repeat.md "Ruling#/definitions/ruling/properties/repeat") |

### \_class



`_class`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-ruling-properties-_class.md "Ruling#/definitions/ruling/properties/_class")

#### \_class Type

`string`

#### \_class Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^Ruling$
```

[try pattern](https://regexr.com/?expression=%5ERuling%24 "try regular expression with regexr.com")

### repeat



`repeat`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-ruling-properties-repeat.md "Ruling#/definitions/ruling/properties/repeat")

#### repeat Type

`number`

## Definitions group state

Reference this group by using

```json
{"$ref":"State#/definitions/state"}
```

| Property                        | Type     | Required | Nullable       | Defined by                                                                                                                           |
| :------------------------------ | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| [\_class](#_class-6)            | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-state-properties-_class.md "State#/definitions/state/properties/_class")               |
| [extent](#extent)               | `string` | Optional | cannot be null | [JSON Transliteration Format](jtf-definitions-state-properties-extent.md "State#/definitions/state/properties/extent")               |
| [qualification](#qualification) | `string` | Optional | cannot be null | [JSON Transliteration Format](jtf-definitions-state-properties-qualification.md "State#/definitions/state/properties/qualification") |
| [state](#state)                 | `string` | Optional | cannot be null | [JSON Transliteration Format](jtf-definitions-state-properties-state.md "State#/definitions/state/properties/state")                 |
| [lacuna](#lacuna)               | `string` | Optional | cannot be null | [JSON Transliteration Format](jtf-definitions-state-properties-lacuna.md "State#/definitions/state/properties/lacuna")               |

### \_class



`_class`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-state-properties-_class.md "State#/definitions/state/properties/_class")

#### \_class Type

`string`

#### \_class Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^State$
```

[try pattern](https://regexr.com/?expression=%5EState%24 "try regular expression with regexr.com")

### extent



`extent`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-state-properties-extent.md "State#/definitions/state/properties/extent")

#### extent Type

`string`

### qualification



`qualification`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-state-properties-qualification.md "State#/definitions/state/properties/qualification")

#### qualification Type

`string`

### state



`state`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-state-properties-state.md "State#/definitions/state/properties/state")

#### state Type

`string`

### lacuna



`lacuna`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-state-properties-lacuna.md "State#/definitions/state/properties/lacuna")

#### lacuna Type

`string`

## Definitions group seal

Reference this group by using

```json
{"$ref":"Seal#/definitions/seal"}
```

| Property             | Type     | Required | Nullable       | Defined by                                                                                                          |
| :------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------ |
| [\_class](#_class-7) | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-seal-properties-_class.md "Seal#/definitions/seal/properties/_class") |
| [type](#type-5)      | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-seal-properties-type.md "Seal#/definitions/seal/properties/type")     |
| [name](#name-2)      | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-seal-properties-name.md "Seal#/definitions/seal/properties/name")     |

### \_class



`_class`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-seal-properties-_class.md "Seal#/definitions/seal/properties/_class")

#### \_class Type

`string`

#### \_class Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^Seal$
```

[try pattern](https://regexr.com/?expression=%5ESeal%24 "try regular expression with regexr.com")

### type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-seal-properties-type.md "Seal#/definitions/seal/properties/type")

#### type Type

`string`

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-seal-properties-name.md "Seal#/definitions/seal/properties/name")

#### name Type

`string`

## Definitions group content

Reference this group by using

```json
{"$ref":"content#/definitions/content"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group column

Reference this group by using

```json
{"$ref":"Column#/definitions/column"}
```

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                    |
| :---------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| [\_class](#_class-8)    | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-column-properties-_class.md "Column#/definitions/column/properties/_class")     |
| [type](#type-6)         | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-column-properties-type.md "Column#/definitions/column/properties/type")         |
| [name](#name-3)         | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-column-properties-name.md "Column#/definitions/column/properties/name")         |
| [children](#children-3) | `array`  | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-column-properties-children.md "Column#/definitions/column/properties/children") |

### \_class



`_class`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-column-properties-_class.md "Column#/definitions/column/properties/_class")

#### \_class Type

`string`

#### \_class Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^Column$
```

[try pattern](https://regexr.com/?expression=%5EColumn%24 "try regular expression with regexr.com")

### type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-column-properties-type.md "Column#/definitions/column/properties/type")

#### type Type

`string`

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-column-properties-name.md "Column#/definitions/column/properties/name")

#### name Type

`string`

### children



`children`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-column-properties-children.md "Column#/definitions/column/properties/children")

#### children Type

unknown\[]

## Definitions group surface

Reference this group by using

```json
{"$ref":"Surface#/definitions/surface"}
```

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                       |
| :---------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| [\_class](#_class-9)    | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-surface-properties-_class.md "Surface#/definitions/surface/properties/_class")     |
| [type](#type-7)         | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-surface-properties-type.md "Surface#/definitions/surface/properties/type")         |
| [name](#name-4)         | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-surface-properties-name.md "Surface#/definitions/surface/properties/name")         |
| [children](#children-4) | `array`  | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-surface-properties-children.md "Surface#/definitions/surface/properties/children") |

### \_class



`_class`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-surface-properties-_class.md "Surface#/definitions/surface/properties/_class")

#### \_class Type

`string`

#### \_class Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^Surface$
```

[try pattern](https://regexr.com/?expression=%5ESurface%24 "try regular expression with regexr.com")

### type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-surface-properties-type.md "Surface#/definitions/surface/properties/type")

#### type Type

`string`

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-surface-properties-name.md "Surface#/definitions/surface/properties/name")

#### name Type

`string`

### children



`children`

*   is required

*   Type: an array of merged types ([Details](jtf-definitions-surface-properties-children-items.md))

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-surface-properties-children.md "Surface#/definitions/surface/properties/children")

#### children Type

an array of merged types ([Details](jtf-definitions-surface-properties-children-items.md))

## Definitions group object

Reference this group by using

```json
{"$ref":"Object#/definitions/object"}
```

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                    |
| :---------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| [\_class](#_class-10)   | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-object-properties-_class.md "Object#/definitions/object/properties/_class")     |
| [type](#type-8)         | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-object-properties-type.md "Object#/definitions/object/properties/type")         |
| [name](#name-5)         | `string` | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-object-properties-name.md "Object#/definitions/object/properties/name")         |
| [children](#children-5) | `array`  | Required | cannot be null | [JSON Transliteration Format](jtf-definitions-object-properties-children.md "Object#/definitions/object/properties/children") |

### \_class



`_class`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-object-properties-_class.md "Object#/definitions/object/properties/_class")

#### \_class Type

`string`

#### \_class Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^Object$
```

[try pattern](https://regexr.com/?expression=%5EObject%24 "try regular expression with regexr.com")

### type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-object-properties-type.md "Object#/definitions/object/properties/type")

#### type Type

`string`

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-object-properties-name.md "Object#/definitions/object/properties/name")

#### name Type

`string`

### children



`children`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [JSON Transliteration Format](jtf-definitions-object-properties-children.md "Object#/definitions/object/properties/children")

#### children Type

unknown\[]
