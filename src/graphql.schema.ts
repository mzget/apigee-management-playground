
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class APIPackage {
    description?: string;
    displayName?: string;
    id?: string;
    name?: string;
    status?: string;
    organization?: Organization;
    product?: Product[];
}

export class Organization {
    address?: string[];
    approveTrusted?: boolean;
    approveUntrusted?: boolean;
    billingCycle?: string;
    country?: string;
    currency?: string;
    description?: string;
    hasBillingAdjustment?: boolean;
    hasBroker?: boolean;
    hasSelfBilling?: boolean;
    hasSeparateInvoiceForProduct?: boolean;
    id?: string;
    issueNettingStmt?: boolean;
    name?: string;
    nettingStmtPerCurrency?: boolean;
    selfBillingAsExchOrg?: boolean;
    selfBillingForAllDev?: boolean;
    separateInvoiceForFees?: boolean;
    status?: string;
    supportedBillingType?: string;
    taxEngineExternalId?: string;
    taxModel?: string;
    timezone?: string;
}

export class Product {
    displayName?: string;
    id?: string;
    name?: string;
    organization?: Organization;
    status?: string;
    transactionSuccessCriteria?: string;
}

export class Company {
    apps?: string[];
    description?: string;
    displayName?: string;
    name?: string;
    organization?: string;
    status?: string;
    attributes?: Attribute[];
    createdAt?: BigInt;
    createdBy?: string;
    lastModifiedAt?: BigInt;
    lastModifiedBy?: string;
}

export class Developer {
    apps?: string[];
    companies?: Company[];
    email?: string;
    developerId?: string;
    firstName?: string;
    lastName?: string;
    userName?: string;
    organizationName?: string;
    status?: string;
    attributes?: Attribute[];
    createdAt?: BigInt;
    createdBy?: string;
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    id?: string;
}

export class Attribute {
    name?: string;
    value?: string;
}

export class RatePlan {
    contractDuration?: number;
    advance?: boolean;
    contractDurationType?: string;
    currency?: Currency;
    customPaymentTerm?: boolean;
    description?: string;
    displayName?: string;
    earlyTerminationFee?: number;
    frequencyDuration?: number;
    frequencyDurationType?: string;
    id?: string;
    isPrivate?: boolean;
    keepOriginalStartDate?: boolean;
    monetizationPackage?: MonetizationPackage;
    name?: string;
    paymentDueDays?: string;
    prorate?: string;
    published?: boolean;
    recurringFee?: number;
    recurringStartUnit?: number;
    recurringType?: string;
    setUpFee?: number;
    startDate?: string;
    type?: string;
}

export class Currency {
    id?: string;
    description?: string;
    displayName?: string;
    name?: string;
}

export class MonetizationPackage {
    description?: string;
    displayName?: string;
    id?: string;
    name?: string;
}

export abstract class IQuery {
    abstract ratePlans(): RatePlan[] | Promise<RatePlan[]>;

    abstract activeRatePlansForDev(developer_id?: string): RatePlan[] | Promise<RatePlan[]>;

    abstract developerAcceptedRatePlans(developer_id?: string): RatePlan[] | Promise<RatePlan[]>;

    abstract companies(): Company[] | Promise<Company[]>;

    abstract company(company_name?: string): Company | Promise<Company>;

    abstract developers(): Developer[] | Promise<Developer[]>;

    abstract apiPackages(): APIPackage[] | Promise<APIPackage[]>;
}

export abstract class IMutation {
    abstract purchaseRatePlan(developer_or_company_id?: string, rate_plan_id?: string, start_date?: string): JSON | Promise<JSON>;
}

export type BigInt = unknown;
export type JSON = unknown;
