/**
 * Open Banking
 * OpenAPI specification for Finicity APIs.  Open Banking solutions in the US are provided by Finicity, a Mastercard company.
 *
 * The version of the OpenAPI document: 1.13.9
 * Contact: apisupport@mastercard.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Details for investment account holdings
 * @export
 * @interface CustomerAccountPosition
 */
export interface CustomerAccountPosition {
    /**
     * The ID of the investment position
     * @type {number}
     * @memberof CustomerAccountPosition
     */
    id?: number;
    /**
     * The description of the holding
     * @type {string}
     * @memberof CustomerAccountPosition
     */
    description?: string;
    /**
     * The investment position's market ticker symbol
     * @type {string}
     * @memberof CustomerAccountPosition
     */
    symbol?: string;
    /**
     * The number of units of the holding
     * @type {number}
     * @memberof CustomerAccountPosition
     */
    units?: number;
    /**
     * The current price of the investment holding
     * @type {number}
     * @memberof CustomerAccountPosition
     */
    currentPrice?: number;
    /**
     * The security name for the investment holding
     * @type {string}
     * @memberof CustomerAccountPosition
     */
    securityName?: string;
    /**
     * The transaction type of the holding, such as cash, margin, and more
     * @type {string}
     * @memberof CustomerAccountPosition
     */
    transactionType?: string;
    /**
     * Market value of an investment position at the time of retrieval
     * @type {number}
     * @memberof CustomerAccountPosition
     */
    marketValue?: number;
    /**
     * The percent change in value since the previous day
     * @type {number}
     * @memberof CustomerAccountPosition
     */
    changePercent?: number;
    /**
     * The value amount change since the previous day
     * @type {number}
     * @memberof CustomerAccountPosition
     */
    dailyChange?: number;
    /**
     * The total cost of acquiring the security
     * @type {number}
     * @memberof CustomerAccountPosition
     */
    costBasis?: number;
    /**
     * The type of the holding
     * @type {string}
     * @memberof CustomerAccountPosition
     */
    holdType?: string;
    /**
     * The security type for the investment holding
     * @type {string}
     * @memberof CustomerAccountPosition
     */
    invSecurityType?: string;
    /**
     * The status of the holding
     * @type {string}
     * @memberof CustomerAccountPosition
     */
    status?: string;
    /**
     * A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof CustomerAccountPosition
     */
    currentPriceDate?: number;
    /**
     * Type of security for the investment position
     * @type {string}
     * @memberof CustomerAccountPosition
     */
    securityType?: string;
    /**
     * Type of mutual fund, such as open ended
     * @type {string}
     * @memberof CustomerAccountPosition
     */
    mfType?: string;
    /**
     * Fund type assigned by the FI (long or short)
     * @type {string}
     * @memberof CustomerAccountPosition
     */
    posType?: string;
    /**
     * Total gain and loss of the position at the time of aggregation in dollars
     * @type {number}
     * @memberof CustomerAccountPosition
     */
    totalGLDollar?: number;
    /**
     * Total gain and loss of the position at the time of aggregation in percentage
     * @type {number}
     * @memberof CustomerAccountPosition
     */
    totalGLPercent?: number;
    /**
     * The strike price of the option contract
     * @type {number}
     * @memberof CustomerAccountPosition
     */
    optionStrikePrice?: number;
    /**
     * The type of option contract (PUT or CALL)
     * @type {string}
     * @memberof CustomerAccountPosition
     */
    optionType?: string;
    /**
     * The number of shares per option contract
     * @type {number}
     * @memberof CustomerAccountPosition
     */
    optionSharesPerContract?: number;
    /**
     * Expiration date of option
     * @type {Date}
     * @memberof CustomerAccountPosition
     */
    optionExpireDate?: Date;
    /**
     * Financial Institution (FI) defined asset class (COMMON STOCK, COMNEQTY, EQUITY/STOCK, CMA-ISA, CONVERTIBLE PREFERREDS, CORPORATE BONDS, OTHER MONEY FUNDS, ALLOCATION FUNDS, CMA-TAXABLE, FOREIGNEQUITYADRS, COMMONSTOCK, PREFERRED STOCKS, STABLE VALUE, FOREIGN EQUITY ADRS)
     * @type {string}
     * @memberof CustomerAccountPosition
     */
    fiAssetClass?: string;
    /**
     * An asset class is a grouping of comparable financial securities. These include equities (stocks), fixed income (bonds), and cash equivalent or money market instruments. (DOMESTICBOND, LARGESTOCK, INTLSTOCK, MONEYMRKT, OTHER)
     * @type {string}
     * @memberof CustomerAccountPosition
     */
    assetClass?: string;
    /**
     * Currency rate, ratio of currency to original currency
     * @type {number}
     * @memberof CustomerAccountPosition
     */
    currencyRate?: number;
    /**
     * The security ID of the transaction
     * @type {string}
     * @memberof CustomerAccountPosition
     */
    securityId?: string;
    /**
     * The security type. This field is related to the `securityId` field. Possible values:
     * * "CUSIP"
     *
     * * "ISIN"
     *
     * * "SEDOL"
     *
     * * "SICC"
     *
     * * "VALOR"
     *
     * * "WKN"
     * @type {string}
     * @memberof CustomerAccountPosition
     */
    securityIdType?: string;
    /**
     * The per share cost of acquiring the security
     * @type {number}
     * @memberof CustomerAccountPosition
     */
    costBasisPerShare?: number;
    /**
     * The subaccount's type, such as cash
     * @type {string}
     * @memberof CustomerAccountPosition
     */
    subAccountType?: string;
    /**
     * Symbol for the currency that the account is being converted into
     * @type {string}
     * @memberof CustomerAccountPosition
     */
    securityCurrency?: string;
    /**
     * The current day's gain and loss of the position at the time of aggregation in dollars
     * @type {number}
     * @memberof CustomerAccountPosition
     */
    todayGLDollar?: number;
    /**
     * The current day's gain and loss of the position at the time of aggregation in percentage
     * @type {number}
     * @memberof CustomerAccountPosition
     */
    todayGLPercent?: number;
}
/**
 * Check if a given object implements the CustomerAccountPosition interface.
 */
export declare function instanceOfCustomerAccountPosition(value: object): boolean;
export declare function CustomerAccountPositionFromJSON(json: any): CustomerAccountPosition;
export declare function CustomerAccountPositionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerAccountPosition;
export declare function CustomerAccountPositionToJSON(value?: CustomerAccountPosition | null): any;