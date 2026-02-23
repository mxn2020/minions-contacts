/**
 * @module @minions-contacts/sdk/schemas
 * Custom MinionType schemas for Minions Contacts.
 */

import type { MinionType } from 'minions-sdk';

export const personType: MinionType = {
  id: 'contacts-person',
  name: 'Person',
  slug: 'person',
  description: 'A human contact — client, collaborator, recruiter, or any individual.',
  icon: '👤',
  schema: [
    { name: 'firstName', type: 'string', label: 'firstName' },
    { name: 'lastName', type: 'string', label: 'lastName' },
    { name: 'displayName', type: 'string', label: 'displayName' },
    { name: 'role', type: 'string', label: 'role' },
    { name: 'organizationId', type: 'string', label: 'organizationId' },
    { name: 'tags', type: 'string', label: 'tags' },
    { name: 'notes', type: 'string', label: 'notes' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
  ],
};

export const organizationType: MinionType = {
  id: 'contacts-organization',
  name: 'Organization',
  slug: 'organization',
  description: 'A company, agency, or team associated with one or more contacts.',
  icon: '🏢',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'industry', type: 'string', label: 'industry' },
    { name: 'website', type: 'string', label: 'website' },
    { name: 'country', type: 'string', label: 'country' },
    { name: 'size', type: 'select', label: 'size' },
    { name: 'tags', type: 'string', label: 'tags' },
    { name: 'notes', type: 'string', label: 'notes' },
  ],
};

export const contactchannelType: MinionType = {
  id: 'contacts-contact-channel',
  name: 'Contact channel',
  slug: 'contact-channel',
  description: 'A specific communication channel owned by a person or organization.',
  icon: '📡',
  schema: [
    { name: 'ownerId', type: 'string', label: 'ownerId' },
    { name: 'ownerType', type: 'select', label: 'ownerType' },
    { name: 'type', type: 'select', label: 'type' },
    { name: 'value', type: 'string', label: 'value' },
    { name: 'isPrimary', type: 'boolean', label: 'isPrimary' },
    { name: 'isVerified', type: 'boolean', label: 'isVerified' },
    { name: 'allowedForAutomation', type: 'boolean', label: 'allowedForAutomation' },
  ],
};

export const contactnoteType: MinionType = {
  id: 'contacts-contact-note',
  name: 'Contact note',
  slug: 'contact-note',
  description: 'A timestamped interaction or observation about a contact.',
  icon: '🗒️',
  schema: [
    { name: 'contactId', type: 'string', label: 'contactId' },
    { name: 'contactType', type: 'select', label: 'contactType' },
    { name: 'body', type: 'string', label: 'body' },
    { name: 'authorId', type: 'string', label: 'authorId' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
  ],
};

export const customTypes: MinionType[] = [
  personType,
  organizationType,
  contactchannelType,
  contactnoteType,
];

