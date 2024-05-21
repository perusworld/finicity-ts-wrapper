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
 * Categorization Record
 * @export
 * @interface Categorization
 */
export interface Categorization {
    /**
     * A normalized payee, derived from the transaction's description and memo fields
     * @type {string}
     * @memberof Categorization
     */
    normalizedPayeeName: string;
    /**
     * The different categories for transactions.
     * * "ATM Fee"
     *
     * * "Advertising"
     *
     * * "Air Travel"
     *
     * * "Alcohol & Bars"
     *
     * * "Allowance"
     *
     * * "Amusement"
     *
     * * "Arts"
     *
     * * "Auto & Transport"
     *
     * * "Auto Insurance"
     *
     * * "Auto Payment"
     *
     * * "Baby Supplies"
     *
     * * "Babysitter & Daycare"
     *
     * * "Bank Fee"
     *
     * * "Bills & Utilities"
     *
     * * "Bonus"
     *
     * * "Books"
     *
     * * "Books & Supplies"
     *
     * * "Business Services"
     *
     * * "Buy"
     *
     * * "Cash & ATM"
     *
     * * "Charity"
     *
     * * "Check"
     *
     * * "Child Support"
     *
     * * "Clothing"
     *
     * * "Coffee Shops"
     *
     * * "Credit Card Payment"
     *
     * * "Dentist"
     *
     * * "Deposit"
     *
     * * "Dividend & Cap Gains"
     *
     * * "Doctor"
     *
     * * "Education"
     *
     * * "Electronics & Software"
     *
     * * "Entertainment"
     *
     * * "Eyecare"
     *
     * * "Fast Food"
     *
     * * "Federal Tax"
     *
     * * "Fees & Charges"
     *
     * * "Finance Charge"
     *
     * * "Financial"
     *
     * * "Financial Advisor"
     *
     * * "Food & Dining"
     *
     * * "Furnishings"
     *
     * * "Gas & Fuel"
     *
     * * "Gift"
     *
     * * "Gifts & Donations"
     *
     * * "Groceries"
     *
     * * "Gym"
     *
     * * "Hair"
     *
     * * "Health & Fitness"
     *
     * * "Health Insurance"
     *
     * * "Hobbies"
     *
     * * "Home"
     *
     * * "Home Improvement"
     *
     * * "Home Insurance"
     *
     * * "Home Phone"
     *
     * * "Home Services"
     *
     * * "Home Supplies"
     *
     * * "Hotel"
     *
     * * "Income"
     *
     * * "Interest Income"
     *
     * * "Internet"
     *
     * * "Investments"
     *
     * * "Kids"
     *
     * * "Kids Activities"
     *
     * * "Late Fee"
     *
     * * "Laundry"
     *
     * * "Lawn & Garden"
     *
     * * "Legal"
     *
     * * "Life Insurance"
     *
     * * "Loan Fees and Charges"
     *
     * * "Loan Insurance"
     *
     * * "Loan Interest"
     *
     * * "Loan Payment"
     *
     * * "Loan Principal"
     *
     * * "Loans"
     *
     * * "Local Tax"
     *
     * * "Low Balance"
     *
     * * "Mobile Phone"
     *
     * * "Mortgage & Rent"
     *
     * * "Movies & DVDs"
     *
     * * "Music"
     *
     * * "Newspapers & Magazines"
     *
     * * "Office Supplies"
     *
     * * "Parking"
     *
     * * "Paycheck"
     *
     * * "Personal Care"
     *
     * * "Pet Food & Supplies"
     *
     * * "Pet Grooming"
     *
     * * "Pets"
     *
     * * "Pharmacy"
     *
     * * "Printing"
     *
     * * "Property Tax"
     *
     * * "Public Transportation"
     *
     * * "Reimbursement"
     *
     * * "Rental Car & Taxi"
     *
     * * "Restaurants"
     *
     * * "Sales Tax"
     *
     * * "Sell"
     *
     * * "Services & Parts"
     *
     * * "Service Fee"
     *
     * * "Shipping"
     *
     * * "Shopping"
     *
     * * "Spa & Massage"
     *
     * * "Sporting Goods"
     *
     * * "Sports"
     *
     * * "State Tax"
     *
     * * "Streaming Services"
     *
     * * "Student Loan"
     *
     * * "Taxes"
     *
     * * "Television"
     *
     * * "Toys"
     *
     * * "Trade Commissions"
     *
     * * "Transfer"
     *
     * * "Transfer for Cash Spending"
     *
     * * "Travel"
     *
     * * "Tuition"
     *
     * * "Uncategorized"
     *
     * * "Utilities"
     *
     * * "Vacation"
     *
     * * "Veterinary"
     *
     * * "Internet / Broadband Charges"
     * @type {string}
     * @memberof Categorization
     */
    category: string;
    /**
     * City
     * @type {string}
     * @memberof Categorization
     */
    city?: string;
    /**
     * State
     * @type {string}
     * @memberof Categorization
     */
    state?: string;
    /**
     * A ZIP code
     * @type {string}
     * @memberof Categorization
     */
    postalCode?: string;
    /**
     * Country code is Iso3166-1 Alpha-2 code and Alpha 3 standard (max length 3).
     * @type {string}
     * @memberof Categorization
     */
    country: string;
    /**
     * Combines the `description` and `memo` data together, removing duplicated information and numbers and special characters
     * @type {string}
     * @memberof Categorization
     */
    bestRepresentation?: string;
}
/**
 * Check if a given object implements the Categorization interface.
 */
export declare function instanceOfCategorization(value: object): boolean;
export declare function CategorizationFromJSON(json: any): Categorization;
export declare function CategorizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Categorization;
export declare function CategorizationToJSON(value?: Categorization | null): any;
