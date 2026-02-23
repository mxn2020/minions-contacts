/**
 * Minions Contacts SDK
 *
 * People, organizations, and contact channels
 *
 * @module @minions-contacts/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Contacts.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
