# URL Shortener - Requirements

## Functional Requirements

- Automatically generate a unique short URL for any given long URL.
- Allow users to optionally specify a custom alias for the short URL.
- Allow users to define optional expiration dates for short URLs.
- Redirect users to the original long URL when the short URL is accessed.
- Handle URL conflicts gracefully (e.g., when a custom alias is already taken).
- Track and store the number of times a short URL has been visited.

## Non-Functional Requirements

- **Uniqueness:** Each short URL (including custom aliases) must be unique across the system.
- **Extensibility:** The design should be flexible enough to support future enhancements.
- **Maintainability:** Code should follow object-oriented principles, with clean abstractions and clear separation of concerns.
