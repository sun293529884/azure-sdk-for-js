/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const SendSmsOptions: coreHttp.CompositeMapper = {
  serializedName: "SendSmsOptions",
  type: {
    name: "Composite",
    className: "SendSmsOptions",
    modelProperties: {
      enableDeliveryReport: {
        serializedName: "enableDeliveryReport",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const SendMessageRequest: coreHttp.CompositeMapper = {
  serializedName: "SendMessageRequest",
  type: {
    name: "Composite",
    className: "SendMessageRequest",
    modelProperties: {
      from: {
        required: true,
        serializedName: "from",
        type: {
          name: "String"
        }
      },
      to: {
        required: true,
        serializedName: "to",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      message: {
        required: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      sendSmsOptions: {
        serializedName: "sendSmsOptions",
        type: {
          name: "Composite",
          className: "SendSmsOptions"
        }
      }
    }
  }
};

export const SendSmsResponse: coreHttp.CompositeMapper = {
  serializedName: "SendSmsResponse",
  type: {
    name: "Composite",
    className: "SendSmsResponse",
    modelProperties: {
      messageId: {
        serializedName: "messageId",
        type: {
          name: "String"
        }
      }
    }
  }
};