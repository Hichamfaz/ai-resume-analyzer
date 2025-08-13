# Format Size Function Implementation Plan

## Overview
This document outlines the plan for implementing a `formatSize` function that converts bytes to a human-readable string format (KB, MB, GB).

## Implementation Details

### Function Signature
```typescript
/**
 * Converts bytes to a human-readable string with appropriate units (KB, MB, GB)
 * @param bytes - The number of bytes to format
 * @returns A human-readable string representation of the file size
 */
export function formatSize(bytes: number): string
```

### Logic
1. If bytes < 1024, return bytes with "B" suffix
2. If bytes < 1024^2, convert to KB (bytes / 1024) with "KB" suffix
3. If bytes < 1024^3, convert to MB (bytes / 1024^2) with "MB" suffix
4. Otherwise, convert to GB (bytes / 1024^3) with "GB" suffix
5. Round to 2 decimal places for KB, MB, GB
6. For bytes, show the exact number without decimal places

### Examples
- formatSize(512) → "512 B"
- formatSize(1024) → "1.00 KB"
- formatSize(1536) → "1.50 KB"
- formatSize(1048576) → "1.00 MB"
- formatSize(1073741824) → "1.00 GB"

## File Location
The function should be placed in `app/utils/utils.ts` for easy import and use throughout the application.

## Usage
The function can be imported and used as follows:
```typescript
import { formatSize } from '~/utils/utils';

// Example usage
const fileSize = formatSize(1536); // Returns "1.50 KB"