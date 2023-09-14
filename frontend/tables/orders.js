import { FieldType } from "@airtable/blocks/models";

const ORDERS = "Orders";

const AGW_ID = "Agw ID";
const ORDER_ID = "Order ID";
const PNR = "PNR";
const BOOKING_TYPE = "Booking Type";
const APP_NAME = "App Name";
const DEPARTURE_DATE = "Departure Date";
const CONSUMER_IATA_CODE = "Consumer IATA Code";
const CONSUMER_COUNTRY_CODE = "Consumer Country Code";
const CONSUMER_EMAIL = "Consumer Email";
const AGENT_EMAIL = "Agent Email";
const PASSENGERS = "Passengers";
const CONSUMER = "Consumer";
const AGENCY = "Agency";
const AGENT = "Agent";
const PROVIDER = "Provider";
const UPDATED_ON = "Updated On";
const CREATED_ON = "Created On";
const TOTAL_AMOUNT = "Total Amount";
const ORDER_STATUS = "Order Status";
const RECORD_LOCATOR = "Record Locator";

export default {
  Table: ORDERS,
  Fields: {
    [AGW_ID]: {
      type: FieldType.SINGLE_LINE_TEXT,
    },
    [ORDER_ID]: {
      type: FieldType.SINGLE_LINE_TEXT,
    },
    [RECORD_LOCATOR]: {
      type: FieldType.SINGLE_LINE_TEXT,
    },
    [PNR]: {
      type: FieldType.SINGLE_LINE_TEXT,
    },
    [BOOKING_TYPE]: {
      type: FieldType.SINGLE_LINE_TEXT,
    },
    [APP_NAME]: {
      type: FieldType.SINGLE_LINE_TEXT,
    },
    [DEPARTURE_DATE]: {
      type: FieldType.SINGLE_LINE_TEXT,
    },
    [CONSUMER_COUNTRY_CODE]: {
      type: FieldType.SINGLE_LINE_TEXT,
    },
    [CONSUMER_IATA_CODE]: {
      type: FieldType.SINGLE_LINE_TEXT,
    },
    [PROVIDER]: {
      type: FieldType.SINGLE_LINE_TEXT,
    },
    [CONSUMER_EMAIL]: {
      type: FieldType.EMAIL,
    },
    [AGENT_EMAIL]: {
      type: FieldType.EMAIL,
    },
    [PASSENGERS]: {
      type: FieldType.SINGLE_LINE_TEXT,
    },
    [CONSUMER]: {
      type: FieldType.SINGLE_LINE_TEXT,
    },
    [AGENCY]: {
      type: FieldType.SINGLE_LINE_TEXT,
    },
    [AGENT]: {
      type: FieldType.SINGLE_LINE_TEXT,
    },
    [UPDATED_ON]: {
      type: FieldType.SINGLE_LINE_TEXT,
    },
    [CREATED_ON]: {
      type: FieldType.SINGLE_LINE_TEXT,
    },
    [TOTAL_AMOUNT]: {
      type: FieldType.SINGLE_LINE_TEXT,
    },
    [ORDER_STATUS]: {
      type: FieldType.SINGLE_LINE_TEXT,
    },
  },
};
