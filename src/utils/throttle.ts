/**
 * Throttle utility to limit function execution frequency
 * @param callback - Function to throttle
 * @param limit - Time limit in milliseconds between calls
 * @returns Throttled function
 */
export const throttle = <T extends (...args: any[]) => any>(
    callback: T,
    limit: number
): T => {
    let inThrottle: boolean;

    return ((...args: any[]) => {
        if (!inThrottle) {
            callback(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    }) as T;
};
