// About
// Suppose you are working on a project that involves uploading user profile pictures.

// Your current requirement is simple:

// Accept an image
// Resize it
// Store it
// But you start thinking ahead.What if:

// Tomorrow we need support for video uploads?
// We may want to switch from local file storage to cloud storage?
// We could support 3D avatars?
// So you build a flexible, pluggable, extensible media-processing engine. You introduce interfaces, dependency injection, multiple handler classes, and a storage abstraction layer.

// All of this before your first user even uploads a profile photo.

// What’s the result?

// A bloated, overly complex system
// Slower delivery of the core functionality
// More code to test, maintain, and debug
// Features no one asked for
// This is a classic case of violating the YAGNI principle.


// When to Bend the Rule
// Like all principles, YAGNI has exceptions. Sometimes, planning ahead is justified.

// Here are cases where it’s acceptable to go beyond current needs:

// Security and compliance requirements: You may need to prepare for data protection, auditing, or regulatory constraints up front.
// Architecture with known long-term constraints: For example, if you are writing code for a high-availability system, some abstractions or patterns may be required from day one.
// Reusable libraries or frameworks: If you are building tools for other developers, some flexibility may be expected