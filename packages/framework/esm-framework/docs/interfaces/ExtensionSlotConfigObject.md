[@openmrs/esm-framework](../API.md) / ExtensionSlotConfigObject

# Interface: ExtensionSlotConfigObject

## Table of contents

### Properties

- [add](ExtensionSlotConfigObject.md#add)
- [order](ExtensionSlotConfigObject.md#order)
- [remove](ExtensionSlotConfigObject.md#remove)

## Properties

### add

• `Optional` **add**: `string`[]

Additional extension IDs to assign to this slot, in addition to those `attach`ed in code.

#### Defined in

[packages/framework/esm-config/src/types.ts:58](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-config/src/types.ts#L58)

___

### order

• `Optional` **order**: `string`[]

Overrides the default ordering of extensions.

#### Defined in

[packages/framework/esm-config/src/types.ts:62](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-config/src/types.ts#L62)

___

### remove

• `Optional` **remove**: `string`[]

Extension IDs which were `attach`ed to the slot but which should not be assigned.

#### Defined in

[packages/framework/esm-config/src/types.ts:60](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-config/src/types.ts#L60)
