/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/agreementsMappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClientContext } from "../billingManagementClientContext";

/** Class representing a Agreements. */
export class Agreements {
  private readonly client: BillingManagementClientContext;

  /**
   * Create a Agreements.
   * @param {BillingManagementClientContext} client Reference to the service client.
   */
  constructor(client: BillingManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists the agreements for a billing account.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param [options] The optional parameters
   * @returns Promise<Models.AgreementsListByBillingAccountResponse>
   */
  listByBillingAccount(billingAccountName: string, options?: Models.AgreementsListByBillingAccountOptionalParams): Promise<Models.AgreementsListByBillingAccountResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param callback The callback
   */
  listByBillingAccount(billingAccountName: string, callback: msRest.ServiceCallback<Models.AgreementListResult>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingAccount(billingAccountName: string, options: Models.AgreementsListByBillingAccountOptionalParams, callback: msRest.ServiceCallback<Models.AgreementListResult>): void;
  listByBillingAccount(billingAccountName: string, options?: Models.AgreementsListByBillingAccountOptionalParams | msRest.ServiceCallback<Models.AgreementListResult>, callback?: msRest.ServiceCallback<Models.AgreementListResult>): Promise<Models.AgreementsListByBillingAccountResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        options
      },
      listByBillingAccountOperationSpec,
      callback) as Promise<Models.AgreementsListByBillingAccountResponse>;
  }

  /**
   * Gets an agreement by ID.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param agreementName The ID that uniquely identifies an agreement.
   * @param [options] The optional parameters
   * @returns Promise<Models.AgreementsGetResponse>
   */
  get(billingAccountName: string, agreementName: string, options?: Models.AgreementsGetOptionalParams): Promise<Models.AgreementsGetResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param agreementName The ID that uniquely identifies an agreement.
   * @param callback The callback
   */
  get(billingAccountName: string, agreementName: string, callback: msRest.ServiceCallback<Models.Agreement>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param agreementName The ID that uniquely identifies an agreement.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(billingAccountName: string, agreementName: string, options: Models.AgreementsGetOptionalParams, callback: msRest.ServiceCallback<Models.Agreement>): void;
  get(billingAccountName: string, agreementName: string, options?: Models.AgreementsGetOptionalParams | msRest.ServiceCallback<Models.Agreement>, callback?: msRest.ServiceCallback<Models.Agreement>): Promise<Models.AgreementsGetResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        agreementName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AgreementsGetResponse>;
  }

  /**
   * Lists the agreements for a billing account.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AgreementsListByBillingAccountNextResponse>
   */
  listByBillingAccountNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AgreementsListByBillingAccountNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByBillingAccountNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AgreementListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingAccountNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AgreementListResult>): void;
  listByBillingAccountNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AgreementListResult>, callback?: msRest.ServiceCallback<Models.AgreementListResult>): Promise<Models.AgreementsListByBillingAccountNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByBillingAccountNextOperationSpec,
      callback) as Promise<Models.AgreementsListByBillingAccountNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByBillingAccountOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/agreements",
  urlParameters: [
    Parameters.billingAccountName
  ],
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AgreementListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/agreements/{agreementName}",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.agreementName
  ],
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Agreement
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByBillingAccountNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AgreementListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
