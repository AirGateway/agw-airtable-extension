const TYPE_CODE_DEFINITION = "TypeCodeDefinition";

async function addChoiceToSelectField(selectField, nameForNewOption,...choices ) {
    const updatedOptions = {
        choices: [
            ...selectField.options.choices,
            ...choices,
            {name: nameForNewOption},
        ]
    };

    if (selectField.hasPermissionToUpdateOptions(updatedOptions)) {
        await selectField.updateOptionsAsync(updatedOptions);
    }
}

export default {
    up: async function (base,tableName){
        const table = base.getTableIfExists(tableName)
        const selectField = table.getFieldByIdIfExists(TYPE_CODE_DEFINITION)
        if (!selectField) {
            throw new Error("Couldn't find field " + TYPE_CODE_DEFINITION)
        }
        const choices = []
        await addChoiceToSelectField(selectField,TYPE_CODE_DEFINITION,...choices)
    },
}