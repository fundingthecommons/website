import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  isGeofenced: boolean
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let isGeofenced = getIsGeofenced(req);

  res.status(200).json({ isGeofenced })
}

function getIsGeofenced(req: NextApiRequest): boolean {
  const ipCountryHeader = req.headers['x-vercel-ip-country'];
  if (!ipCountryHeader) {
    return false;
  }
 
  const countryCode: string = Array.isArray(ipCountryHeader) ? ipCountryHeader[0] : ipCountryHeader;

  // Blocked countries
  // Australia: AU
  // Hong Kong: HK 
  // India: IN
  // Indonesia: ID 
  // Japan: JP
  // Thailand: TH

  const blockedCountries = ['AU', 'HK', 'IN', 'ID', 'JP', 'TH'];

  return blockedCountries.includes(countryCode);
}
