
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
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

export class Company {
    id?: string;
    description?: string;
    displayName?: string;
    name?: string;
}

export class Attribute {
    name?: string;
    value?: string;
}

export abstract class IQuery {
    abstract ratePlans(): RatePlan[] | Promise<RatePlan[]>;

    abstract activeRatePlansForDev(developer_id?: string): RatePlan[] | Promise<RatePlan[]>;

    abstract developerAcceptedRatePlans(developer_id?: string): RatePlan[] | Promise<RatePlan[]>;

    abstract developers(): Developer[] | Promise<Developer[]>;
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

export type BigInt = unknown;
