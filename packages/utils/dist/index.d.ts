declare const useFathom: ({ includedDomains, }: {
    includedDomains: Array<string>;
}) => void;

declare const useHostName: () => string | null;

declare const getHostFromHostName: ({ hostName, }: {
    hostName?: string | null | undefined;
}) => string | null;

declare const getDomains: ({ hostnames }: {
    hostnames: string;
}) => Array<string>;

export { getDomains, getHostFromHostName, useFathom, useHostName };
