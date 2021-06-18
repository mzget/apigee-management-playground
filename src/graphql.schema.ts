
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum MeteringType {
    UNIT = "UNIT",
    VOLUME = "VOLUME",
    STAIR_STEP = "STAIR_STEP",
    DEV_SPECIFIC = "DEV_SPECIFIC"
}

export enum RatePlanType {
    REVSHARE = "REVSHARE",
    RATECARD = "RATECARD",
    REVSHARE_RATECARD = "REVSHARE_RATECARD",
    USAGE_TARGET = "USAGE_TARGET"
}

export enum AudienceType {
    STANDARD = "STANDARD",
    DEVELOPER_CATEGORY = "DEVELOPER_CATEGORY",
    DEVELOPER = "DEVELOPER"
}

export enum DurationType {
    DAY = "DAY",
    WEEK = "WEEK",
    MONTH = "MONTH",
    QUARTER = "QUARTER",
    YEAR = "YEAR"
}

export class APIPackageInput {
    description: string;
    displayName: string;
    name: string;
    product?: ProductInput[];
    status: string;
}

export class ProductInput {
    id: number;
}

export class RatePlanInput {
    description: string;
    name: string;
    type: AudienceType;
    displayName: string;
    isPrivate: boolean;
    published: boolean;
    currency: ObjectInput;
    monetizationPackage?: ObjectInput;
    organization: ObjectInput;
    ratePlanDetails?: RatePlanDetailInput[];
    startDate: string;
    endDate?: string;
    earlyTerminationFee?: number;
    recurringFee?: number;
    setUpFee?: number;
    paymentDueDays?: number;
    prorate?: boolean;
    frequencyDuration?: number;
    frequencyDurationType?: DurationType;
}

export class ObjectInput {
    id?: string;
}

export class RatePlanDetailInput {
    currency: ObjectInput;
    ratePlanRates?: RatePlanRatesInput[];
    type: RatePlanType;
    meteringType: MeteringType;
    ratingParameter: string;
    ratingParameterUnit?: string;
    paymentDueDays: number;
    organization: ObjectInput;
    duration?: number;
    durationType?: DurationType;
    freemiumUnit?: number;
    freemiumDuration?: number;
    freemiumDurationType?: DurationType;
}

export class RatePlanRatesInput {
    endUnit?: number;
    id?: string;
    rate?: number;
    revshare?: number;
    startUnit: number;
    type: string;
}

export class APIPackage {
    description?: string;
    displayName?: string;
    id?: string;
    name?: string;
    status?: string;
    organization?: Organization;
    product?: Product[];
}

export class Product {
    description?: string;
    displayName?: string;
    id?: string;
    name?: string;
    organization?: Organization;
    status?: string;
    transactionSuccessCriteria?: string;
    refundSuccessCriteria?: string;
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

export class Organization {
    address?: Address[];
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
    regNo?: string;
    taxEngineExternalId?: string;
    taxModel?: string;
    taxRegNo?: string;
    timezone?: string;
}

export class Address {
    address1?: string;
    address2?: string;
    city?: string;
    country?: string;
    id?: string;
    isPrimary?: boolean;
    state?: string;
    zip?: string;
}

export class RatePlan {
    advance?: boolean;
    contractDuration?: number;
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
    monetizationPackage?: APIPackage;
    name?: string;
    organization?: Organization;
    paymentDueDays?: string;
    prorate?: string;
    published?: boolean;
    ratePlanDetails?: RatePlanDetail[];
    recurringFee?: number;
    recurringStartUnit?: number;
    recurringType?: string;
    setUpFee?: number;
    startDate?: string;
    type?: string;
}

export class RatePlanDetail {
    aggregateFreemiumCounters?: boolean;
    aggregateStandardCounters?: boolean;
    aggregateTransactions?: boolean;
    currency?: Currency;
    customPaymentTerm?: boolean;
    duration?: number;
    durationType?: string;
    freemiumDuration?: number;
    freemiumDurationType?: string;
    freemiumUnit?: number;
    id?: string;
    meteringType?: string;
    organization?: Organization;
    paymentDueDays?: string;
    ratePlanRates?: RatePlanRates[];
    ratingParameter?: string;
    revenueType?: string;
    type?: string;
}

export class RatePlanRates {
    endUnit?: number;
    id?: string;
    rate?: number;
    revshare?: number;
    startUnit?: number;
    type?: string;
}

export class Currency {
    id?: string;
    description?: string;
    displayName?: string;
    name?: string;
    organization?: Organization;
    status?: string;
    virtualCurrency?: boolean;
}

export abstract class IQuery {
    abstract findOneRatePlan(package_id: string, plan_id: string): RatePlan | Promise<RatePlan>;

    abstract ratePlans(): RatePlan[] | Promise<RatePlan[]>;

    abstract activeRatePlansForDev(developer_id?: string): RatePlan[] | Promise<RatePlan[]>;

    abstract developerAcceptedRatePlans(developer_id?: string): JSON | Promise<JSON>;

    abstract organization(): Organization | Promise<Organization>;

    abstract companies(): Company[] | Promise<Company[]>;

    abstract company(company_name?: string): Company | Promise<Company>;

    abstract companyAcceptedPackage(company_id?: string, current?: boolean): APIPackage[] | Promise<APIPackage[]>;

    abstract companyEligibleProduct(company_id?: string): Product[] | Promise<Product[]>;

    abstract developers(): Developer[] | Promise<Developer[]>;

    abstract apiPackages(): APIPackage[] | Promise<APIPackage[]>;

    abstract apiPackage(package_id: string): APIPackage | Promise<APIPackage>;
}

export abstract class IMutation {
    abstract purchaseRatePlan(developer_or_company_id?: string, rate_plan_id?: string, start_date?: string): JSON | Promise<JSON>;

    abstract addProductToPackage(package_id?: string, product_id?: string): JSON | Promise<JSON>;

    abstract deleteProductFormPackage(package_id?: string, product_id?: string): JSON | Promise<JSON>;

    abstract createPackage(packageInput?: APIPackageInput): APIPackage | Promise<APIPackage>;

    abstract deletePackage(package_id?: string): JSON | Promise<JSON>;

    abstract createRatePlan(package_id?: string, params?: RatePlanInput): JSON | Promise<JSON>;

    abstract updateDraftRatePlan(package_id?: string, plan_id?: string, params?: RatePlanInput): JSON | Promise<JSON>;

    abstract deleteDraftRatePlan(package_id?: string, plan_id?: string): JSON | Promise<JSON>;
}

export type BigInt = unknown;
export type JSON = unknown;
