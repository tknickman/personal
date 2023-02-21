/*
Given a comma seperated string of hostnames in the format 
"domain1.tld,domain2.tld", returns array of all domains with 
their www. prefixes. (used for fathom analytics hook)
*/

const getDomains = ({ hostnames }: { hostnames?: string }): Array<string> => {
  if (hostnames) {
    return hostnames.split(",").flatMap((host) => [host, `www.${host}`]);
  }

  return [];
};

export default getDomains;
