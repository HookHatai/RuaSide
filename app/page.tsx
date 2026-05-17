import React from 'react';
import { FeatureCard } from '@/components/FeatureCard';
import { GlassButton } from '@/components/GlassButton';
import { DiscordIcon } from '@/components/DiscordIcon';
import { DatabaseIcon } from '@/components/DatabaseIcon';
import { UnlimitedIcon } from '@/components/UnlimitedIcon';
import { SecurityIcon } from '@/components/SecurityIcon';

export default function Home() {
  const features = [
    {
      icon: <DiscordIcon />,
      title: 'Discord Bot That Can Whitelist You',
      description: 'Seamless integration with Discord. Get whitelisted instantly with our powerful bot that handles all verification processes automatically.'
    },
    {
      icon: <DatabaseIcon />,
      title: 'Open Source Database',
      description: 'Transparent and secure. Our database is completely open source, allowing you to verify the integrity and security of your data.'
    },
    {
      icon: <UnlimitedIcon />,
      title: 'Free Unlimited Whitelists',
      description: 'No hidden fees or limits. Whitelist as many times as you need without any restrictions or subscription requirements.'
    },
    {
      icon: <SecurityIcon />,
      title: 'No Blacklisted Scripts',
      description: 'Safe and clean environment. We don\'t block any scripts, giving you complete freedom and flexibility in our ecosystem.'
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-gray-800 sticky top-0 z-50 bg-black/90 backdrop-blur">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <img 
                src="/RuaSide/logo.png" 
                alt="RuaSide Logo" 
                className="h-8 sm:h-10 w-8 sm:w-10 object-contain"
              />
              <span className="gradient-text text-lg sm:text-2xl font-bold">
                RuaSide
              </span>
            </div>
            <GlassButton href="https://discord.gg/mu4NZgj4H" variant="primary">
              Join Discord
            </GlassButton>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'var(--font-orbitron)' }}>
            <span className="gradient-text">The Future of</span>
            <br />
            <span className="gradient-text">Gaming Communities</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
            Join RuaSide ServerSide - Experience the ultimate gaming server community with cutting-edge technology and zero restrictions.
          </p>

          <div className="flex flex-col gap-4">
            <GlassButton href="https://discord.gg/mu4NZgj4H" variant="primary">
              Join Our Community
            </GlassButton>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 gradient-text" style={{ fontFamily: 'var(--font-orbitron)' }}>
            What We Have?
          </h2>
          <p className="text-gray-400 mb-8 sm:mb-12 text-base sm:text-lg">
            Everything you need for the ultimate gaming experience
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
          <div className="bg-gradient-to-r from-white via-blue-600 to-red-600 rounded-xl sm:rounded-2xl p-1">
            <div className="bg-black rounded-lg sm:rounded-xl p-6 sm:p-8 md:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 gradient-text" style={{ fontFamily: 'var(--font-orbitron)' }}>
                Ready to Join the Revolution?
              </h2>
              <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
                Connect with thousands of gamers and experience gaming like never before
              </p>
              <GlassButton href="https://discord.gg/mu4NZgj4H" variant="primary">
                Join Discord Server
              </GlassButton>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800 mt-12 sm:mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 text-center sm:text-left">
              <div className="flex items-center gap-2 sm:gap-3">
                <img 
                  src="/RuaSide/logo.png" 
                  alt="RuaSide" 
                  className="h-6 sm:h-8 w-6 sm:w-8 object-contain"
                />
                <span className="gradient-text font-bold text-sm sm:text-base">RuaSide ServerSide</span>
              </div>
              <p className="text-gray-500 text-xs sm:text-sm">
                © 2026 RuaSide ServerSide. All rights reserved. | Powered by the community
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
