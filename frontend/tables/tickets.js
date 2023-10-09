import { FieldType } from "@airtable/blocks/models";

const TICKETS = "Tickets";

const TICKET_NUMBER = "TicketNumber";
const PASSENGER_REF = "PassengerRef";
const NUMBER_OF_BOOKLETS = "NumberOfBooklets";
const DATE_OF_ISSUE = "DateOfIssue";
const COUPONS = "Coupons";
const TYPE_CODE_DEFINITION = "TypeCodeDefinition";
const PRICE = "Price";
const TYPE_CODE = "TypeCode";
const TIME_OF_ISSUE = "TimeOfIssue";
const LINKED_TO = "LinkedTo";
const REMARK = "Remark";

const ticketTypes = {
  Ticket: "Ticket",
  EMDAssociated: "EMD-A (Associated)",
};

export default {
  Table: TICKETS,
  Fields: {
    [TICKET_NUMBER]: {
      type: FieldType.SINGLE_LINE_TEXT,
    },
    [LINKED_TO]: {
      type: FieldType.SINGLE_LINE_TEXT,
    },
    [PASSENGER_REF]: {
      type: FieldType.SINGLE_LINE_TEXT,
    },
    [NUMBER_OF_BOOKLETS]: {
      type: FieldType.NUMBER,
      options: {
        precision: 0,
      },
    },
    [TYPE_CODE_DEFINITION]: {
      type: FieldType.SINGLE_SELECT,
      options: {
        choices: [
            {
              name: ticketTypes.Ticket,
            },
            {
              name: ticketTypes.EMDAssociated,
            },
          ],
      },
    },
    [PRICE]: {
      type: FieldType.MULTILINE_TEXT,
    },
    [DATE_OF_ISSUE]: {
      type: FieldType.DATE_TIME,
      options: {
        dateFormat: { name: "iso", format: "YYYY-MM-DD" },
        timeFormat:{name: '24hour', format: 'HH:mm'},
        timeZone: "utc",
      },
    },
    [TYPE_CODE]: {
      type: FieldType.SINGLE_LINE_TEXT,
    },
    [TIME_OF_ISSUE]: {
      type: FieldType.SINGLE_LINE_TEXT,
    },
    [REMARK]: {
      type: FieldType.MULTILINE_TEXT,
    },
    [COUPONS]: {
      type: FieldType.MULTILINE_TEXT,
    },
  },
};
