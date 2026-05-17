/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Замени 'futuristic-website-design' на точное название твоего репозитория на GitHub
  basePath: '/RuaSide',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
