"""
Minions Contacts SDK — Type Schemas
Custom MinionType schemas for Minions Contacts.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

person_type = MinionType(
    id="contacts-person",
    name="Person",
    slug="person",
    description="A human contact — client, collaborator, recruiter, or any individual.",
    icon="👤",
    schema=[
        FieldDefinition(name="firstName", type="string", label="firstName"),
        FieldDefinition(name="lastName", type="string", label="lastName"),
        FieldDefinition(name="displayName", type="string", label="displayName"),
        FieldDefinition(name="role", type="string", label="role"),
        FieldDefinition(name="organizationId", type="string", label="organizationId"),
        FieldDefinition(name="tags", type="string", label="tags"),
        FieldDefinition(name="notes", type="string", label="notes"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
    ],
)

organization_type = MinionType(
    id="contacts-organization",
    name="Organization",
    slug="organization",
    description="A company, agency, or team associated with one or more contacts.",
    icon="🏢",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="industry", type="string", label="industry"),
        FieldDefinition(name="website", type="string", label="website"),
        FieldDefinition(name="country", type="string", label="country"),
        FieldDefinition(name="size", type="select", label="size"),
        FieldDefinition(name="tags", type="string", label="tags"),
        FieldDefinition(name="notes", type="string", label="notes"),
    ],
)

contact_channel_type = MinionType(
    id="contacts-contact-channel",
    name="Contact channel",
    slug="contact-channel",
    description="A specific communication channel owned by a person or organization.",
    icon="📡",
    schema=[
        FieldDefinition(name="ownerId", type="string", label="ownerId"),
        FieldDefinition(name="ownerType", type="select", label="ownerType"),
        FieldDefinition(name="type", type="select", label="type"),
        FieldDefinition(name="value", type="string", label="value"),
        FieldDefinition(name="isPrimary", type="boolean", label="isPrimary"),
        FieldDefinition(name="isVerified", type="boolean", label="isVerified"),
        FieldDefinition(name="allowedForAutomation", type="boolean", label="allowedForAutomation"),
    ],
)

contact_note_type = MinionType(
    id="contacts-contact-note",
    name="Contact note",
    slug="contact-note",
    description="A timestamped interaction or observation about a contact.",
    icon="🗒️",
    schema=[
        FieldDefinition(name="contactId", type="string", label="contactId"),
        FieldDefinition(name="contactType", type="select", label="contactType"),
        FieldDefinition(name="body", type="string", label="body"),
        FieldDefinition(name="authorId", type="string", label="authorId"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
    ],
)

custom_types: list[MinionType] = [
    person_type,
    organization_type,
    contact_channel_type,
    contact_note_type,
]

