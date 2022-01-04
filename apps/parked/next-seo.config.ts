const SEOConfig = ({ hostName }: { hostName?: string | null }) => ({
  title: hostName ? `Retired - ${hostName}` : "Retired Page",
  description: hostName
    ? `Retired page for ${hostName}. View the original source on github, or contact Thomas Knickman, the original author.`
    : `Retired website. View the original source on github, or contact Thomas Knickman, the original author.`,
});

export default SEOConfig;
