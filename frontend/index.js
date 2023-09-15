/***
 * Airgateway extension for bootstrapping collection of tables
 * definitions automatically via @airtable/blocks package
 */
import React from "react";
import { FieldType } from "@airtable/blocks/models";
import { Box, Text, Button, initializeBlock, useBase, useSession } from "@airtable/blocks/ui";
import { default as Orders } from "./tables/orders";
import { default as Tickets } from "./tables/tickets";

const UNAUTHORIZED_MSG =
  "You must be authorized to run this extension in this base";

const definitions = [Orders, Tickets];
const ORDER_ID = "Order ID";

/**
 * authorize a current user before attempting to allowing them to run extension
 * on current airtable base instance
 * @returns {bool} - true if allowed
 * @throws {Error} - if not allowed
 */
function authorize(session, base) {
  if (!session.currentUser) {
    throw new Error(UNAUTHORIZED_MSG);
  }
  const allowedEmails = base.activeCollaborators.map(
    (collaborator) => collaborator.email
  );
  const currentUserEmail = session.currentUser.email;
  if (!allowedEmails.includes(currentUserEmail)) {
    throw new Error(UNAUTHORIZED_MSG);
  }
}

/**
 * linkTableDefinition create a link between two table
 * @param {*} base - airtable base
 * @param {string} columnFromTableTwo -  link field name
 * @param {Object} defintionOne - primary table definition to associate with
 * @param {Object} defintionTwo - table definition to link with  definitionOne
 */
async function linkDefinitions(
  base,
  columnFromTableOne,
  columnFromTableTwo,
  definitionOne,
  definitionTwo,
) {
  const tableOneName = definitionOne.Table;
  const tableTwoName = definitionTwo.Table;
  const tableOne = base.getTableIfExists(tableOneName);
  const tableTwo = base.getTableIfExists(tableTwoName);

  if (!tableOne) {
    throw new Error(`A table  with  name ${tableOneName} does not exist`);
  }

  if (!tableTwo) {
    throw new Error(`A table  with  name ${tableTwoName} does not exist`);
  }

  const fieldOne = tableOne.getFieldByNameIfExists(columnFromTableOne);

  if (fieldOne == null) {
    await tableOne.createFieldAsync(
      columnFromTableOne,
      FieldType.SINGLE_LINE_TEXT
    );
  }

  const fieldTwo = tableTwo.getFieldByNameIfExists(columnFromTableTwo);

  if (fieldTwo == null) {
      await tableTwo.createFieldAsync(
        columnFromTableTwo,
        FieldType.MULTIPLE_RECORD_LINKS,
        {
          linkedTableId: tableOne.id,
        }
      );
  }
}

async function bootstrap() {
 
  const session = useSession();
  const base = useBase();

  authorize(session, base);

  for (const definition of definitions) {
    const { Table, Fields } = definition;
    const fields = Object.keys(Fields).map((k) => {
      let f = { name: k, type: Fields[k].type };
      if (Fields[k].options) {
        f["options"] = Fields[k].options;
      }
      return f;
    });
    if (base.hasPermissionToCreateTable(Table, fields)) {
      if (base.getTableByNameIfExists(Table) == null) {
        await base.createTableAsync(Table, fields);
      }
    }
  }

  await linkDefinitions(base, ORDER_ID, ORDER_ID, Orders, Tickets, {
    prefersSingleRecordLink: false,
    isReversed: true,
  });
}

function Main() {
  // bootstrap()
  //   .then((result) => console.log(result))
  //   .catch((error) => console.log(error));

  return <Box
    display="flex"
    alignItems="center"
    flexDirection="column"
    justifyContent="center"
    width="100%"
    height="100vh"
    overflow="hidden"
  >
    <Text fontWeight="500">You must be authorized to run this extension in this base</Text>
    <Button onClick={bootstrap} size="large" marginTop="25px" variant="primary">
      Setup Tables
    </Button>
  </Box>;
}

initializeBlock(() => <Main />);
