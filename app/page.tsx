export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Startup Finance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Calculate Your Runway with{' '}
          <span className="text-[#58a6ff]">Hiring Projections</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Model planned hires, revenue growth, and dynamic burn rates to know exactly how long your cash lasts — and what it takes to survive.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
        >
          Start Calculating — $49/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No lock-in.</p>

        {/* Feature grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '📊', title: 'Hiring Plan Modeling', desc: 'Add future hires by role and date. See the exact burn impact of every headcount decision.' },
            { icon: '📈', title: 'Revenue Projections', desc: 'Layer in MRR growth curves and one-time revenue events to offset burn dynamically.' },
            { icon: '🔀', title: 'Scenario Planning', desc: 'Compare best, base, and worst-case scenarios side by side with visual runway charts.' },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <div className="text-5xl font-bold text-white mb-1">$49</div>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited runway scenarios',
              'Hiring plan with role-level costs',
              'Revenue growth modeling',
              'Visual burn & runway charts',
              'CSV export for investors',
              'Priority email support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Who is this for?',
              a: 'Startup founders and CFOs at early-stage companies who need to model cash runway beyond a simple spreadsheet — especially when hiring plans change frequently.',
            },
            {
              q: 'How does the hiring projection work?',
              a: 'You add planned hires with a start date, role, and fully-loaded cost. The calculator automatically adjusts monthly burn from that date forward across all your scenarios.',
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Yes. Cancel from your billing portal at any time. You keep access until the end of your billing period with no questions asked.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#6e7681] text-sm">
        © {new Date().getFullYear()} Startup Runway Calculator. All rights reserved.
      </footer>
    </main>
  )
}
