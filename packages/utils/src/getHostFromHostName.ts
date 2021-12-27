const getHostFromHostName = ({
  hostName,
}: {
  hostName?: string | null;
}): string | null => {
  if (hostName) {
    const host = hostName.startsWith("www.") ? hostName.slice(4) : hostName;
    return host.split(".")[0];
  }

  return null;
};

export default getHostFromHostName;
