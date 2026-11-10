import type { LicenseEntitlements } from "./types";

/**
 * There are no paid tiers: every feature is available on every installation.
 * Callers still ask for entitlements so the feature checks stay in one place.
 */
const ENTITLEMENTS: LicenseEntitlements = {
	plan: "unlimited",
	canCustomizeBranding: true,
	canManageAccounts: true,
	canShareMailboxes: true,
	accountSeatLimit: null,
	canForwardEmail: true,
};

export async function getLicenseEntitlements(env?: CloudflareEnv): Promise<LicenseEntitlements> {
	void env;
	return ENTITLEMENTS;
}
