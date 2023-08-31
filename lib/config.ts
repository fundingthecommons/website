export const requireEnv = (value: string | undefined, identifier: string): string => {
  return <string>value;
};

export const PLASMIC_PROJECT_API_TOKEN = requireEnv(
  process.env.PLASMIC_PROJECT_API_TOKEN,
  "PLASMIC_PROJECT_API_TOKEN",
);

export const PLASMIC_PROJECT_ID = requireEnv(
  process.env.PLASMIC_PROJECT_ID,
  "PLASMIC_PROJECT_ID",
);