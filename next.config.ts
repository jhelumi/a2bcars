import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  experimental: {
    authInterrupts: true,
  },
  images: {
    remotePatterns: [
      new URL(
        'https://www.tripadvisor.co.uk/img/cdsi/img2/badges/ollie-11424-2.gif'
      ),
      new URL(
        'https://static.tacdn.com/img2/travelers_choice/widgets/tchotel_2025_LL.png'
      ),
      new URL(
        'https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg'
      ),
    ],
  },
};

export default nextConfig;
