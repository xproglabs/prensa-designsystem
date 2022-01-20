/**
 * @description set the image dimension (i.e. 2x1, 1x1, 3x2)
 */
declare type DerivativeType = string;
/**
 * @description set the domain for the image path prefix
 */
declare type DomainType = string;
/**
 * @description set the policy id value aka contentid
 */
declare type PolicyType = string;
/**
 * @description set the image width (via path param)
 */
declare type WidthType = number;
/**
 * Prensa | Image path generator for Polopoly CMS
 * @param derivative set the image dimension (i.e. 2x1, 1x1, 3x2)
 * @param domain set the domain for the image path prefix
 * @param policy set the policy id value aka contentid
 * @param width set the image width (via path param)
 * @returns parsed image url as a string
 */
export declare function parseImagePath(derivative: DerivativeType, domain: DomainType, policy: PolicyType, width: WidthType): string;
export {};
