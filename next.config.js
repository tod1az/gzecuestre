/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vlbchjbofhbzpvjmbwjc.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/imagenes/**'
      }
    ]
  }
}

module.exports = nextConfig
