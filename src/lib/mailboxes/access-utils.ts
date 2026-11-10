import type { AppDatabase } from "@/db";

/** Mailbox sharing is always available; kept as a function so callers stay unchanged. */
export async function isTeamMailboxSharingEnabled(db?: AppDatabase): Promise<boolean> {
	void db;
	return true;
}
