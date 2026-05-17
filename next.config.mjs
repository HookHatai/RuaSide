/** @type {import('next').NextConfig} */

// Замени 'futuristic-website-design' на точное название твоего репозитория
const repoName = 'RuaSide'

const nextConfig = {
  output: 'export',
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
