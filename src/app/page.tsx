'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to CRM/email service
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold" style={{ color: '#1F7F4C' }}>
              Basecamp
            </div>
            <a
              href="#trial"
              className="px-6 py-2 rounded-md text-white font-semibold hover:opacity-90 transition"
              style={{ backgroundColor: '#1F7F4C' }}
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Work Doesn&apos;t Have To Be Chaos
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Organize your projects, simplify your workflow, and bring your team together.
            Basecamp gives you the tools to stay calm, organized, and productive.
          </p>
          <a
            href="#trial"
            className="inline-block px-8 py-4 rounded-md text-white text-lg font-semibold hover:opacity-90 transition shadow-lg"
            style={{ backgroundColor: '#1F7F4C' }}
          >
            Try Free for 30 Days
          </a>
          <p className="text-sm text-gray-500 mt-4">No credit card required</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#1F7F4C20' }}
              >
                <svg className="w-8 h-8" style={{ color: '#1F7F4C' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Clear Tasks</h3>
              <p className="text-gray-600">
                Keep everyone on track with organized to-do lists and clear assignments.
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#1F7F4C20' }}
              >
                <svg className="w-8 h-8" style={{ color: '#1F7F4C' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Simple Communication</h3>
              <p className="text-gray-600">
                All your messages and files in one place. No more endless email threads.
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#1F7F4C20' }}
              >
                <svg className="w-8 h-8" style={{ color: '#1F7F4C' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Team Alignment</h3>
              <p className="text-gray-600">
                Everyone knows what&apos;s happening, what&apos;s next, and who&apos;s responsible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Trial Form Section */}
      <section id="trial" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Start Your 30-Day Free Trial
            </h2>
            <p className="text-lg text-gray-600">
              No credit card required. Full access to all features.
            </p>
          </div>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600">
                We&apos;ll be in touch shortly to get you started with Basecamp.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 border border-gray-200">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-opacity-50 focus:outline-none"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-opacity-50 focus:outline-none"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-opacity-50 focus:outline-none"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-opacity-50 focus:outline-none"
                    placeholder="Your Company Inc."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-md text-white text-lg font-semibold hover:opacity-90 transition shadow-lg"
                  style={{ backgroundColor: '#1F7F4C' }}
                >
                  Start My Free Trial
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to receive marketing communications from Basecamp.
                  You can unsubscribe at any time.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p className="mb-2" style={{ color: '#1F7F4C', fontWeight: 600 }}>Basecamp</p>
          <p className="text-sm">
            © 2026 Basecamp. Project management that actually works.
          </p>
        </div>
      </footer>
    </main>
  );
}
