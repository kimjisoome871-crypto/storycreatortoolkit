import { Card, CardContent } from "@/components/ui/card";

const frameworkSteps = [
  {
    number: 1,
    title: "Once upon a time...",
    subtitle: "(your starting point/context)",
    description: "Set the scene. Who were you? Where were you? What was your situation?",
    gradient: "gradient-coral",
    emoji: "🌅"
  },
  {
    number: 2,
    title: "Every day...",
    subtitle: "(your routine or normal world)",
    description: "What was life like before the change? What was your normal routine, behavior, or mindset?",
    gradient: "gradient-peach",
    emoji: "🔄"
  },
  {
    number: 3,
    title: "Until one day...",
    subtitle: "(your challenge or turning point)",
    description: "This is the moment everything changed. What problem did you face? What disrupted your normal?",
    gradient: "gradient-mint",
    emoji: "⚡"
  },
  {
    number: 4,
    title: "Because of that...",
    subtitle: "(your first action)",
    description: "What did you do in response? What was the first decision or action you took?",
    gradient: "gradient-ocean",
    emoji: "🎯"
  },
  {
    number: 5,
    title: "Because of that...",
    subtitle: "(what happened next)",
    description: "What happened as a result of your first action? What unfolded next?",
    gradient: "gradient-lavender",
    emoji: "🔗"
  },
  {
    number: 6,
    title: "Until finally...",
    subtitle: "(the result or breakthrough)",
    description: "What was the outcome? How did it all turn out?",
    gradient: "gradient-sunshine",
    emoji: "🏆"
  },
  {
    number: 7,
    title: "And ever since then...",
    subtitle: "(your takeaway or lasting impact)",
    description: "What did you learn? How did this change you? What do you want your audience to remember?",
    gradient: "gradient-midnight",
    emoji: "✨"
  }
];

const ScriptWritingTab = () => {
  return (
    <div className="space-y-16">
      {/* Intro */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="title-section text-foreground mb-4">
          Structure Your Story with the
          <span className="block text-coral">Pixar Story Framework</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          The same 7-part structure used by Pixar to create unforgettable stories. 
          Follow these steps to organize your narrative.
        </p>
      </div>

      {/* 7-Point Framework - Creative Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {frameworkSteps.map((step, index) => (
          <div 
            key={step.number}
            className={`
              ${step.gradient} card-creative text-white
              opacity-0 animate-slide-up
            `}
            style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center font-display font-bold text-lg">
                  {step.number}
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg leading-tight">{step.title}</h4>
                  <p className="text-white/70 text-sm font-medium">{step.subtitle}</p>
                </div>
              </div>
              <span className="text-3xl opacity-80">{step.emoji}</span>
            </div>
            <p className="text-white/90 text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Pro Tip */}
      <Card className="bg-gradient-to-br from-coral-light to-sunshine-light border-none">
        <CardContent className="p-8">
          <div className="flex items-start gap-4">
            <span className="text-4xl">💡</span>
            <div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Pro Tip</h3>
              <p className="text-muted-foreground">
                You can start your story with any of these elements — a quote, the challenge, or the result. 
                The framework is your structure, not your script. Feel free to reorder for maximum impact!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Examples Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="title-section text-foreground mb-2">See It In Action</h3>
          <p className="text-muted-foreground italic">
            Two examples showing different openings with the same framework
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Example 1 */}
          <Card className="overflow-hidden border-2 border-mint/30 hover:border-mint/60 transition-colors duration-300">
            <div className="gradient-mint p-6 text-white">
              <span className="text-3xl mb-2 block">🎓</span>
              <h4 className="font-display font-bold text-xl">Grad School Application</h4>
              <p className="text-white/80 text-sm italic">Traditional opening approach</p>
            </div>
            <CardContent className="p-6 space-y-4 text-sm max-h-[400px] overflow-y-auto">
              {[
                { step: "1. Once upon a time...", text: '"I was working as a software engineer at a mid-sized IT company — decent package, stable job, everything my family wanted for me."' },
                { step: "2. Every day...", text: '"I\'d write code, attend meetings, fix bugs. The work was fine, but I kept thinking: is this all there is?"' },
                { step: "3. Until one day...", text: '"During the pandemic, my younger cousin couldn\'t attend online classes because their school had no digital infrastructure. That\'s when it hit me."' },
                { step: "4. Because of that...", text: '"I started teaching coding to underprivileged students on weekends. Then I built an app that worked on low-bandwidth networks."' },
                { step: "5. Because of that...", text: '"Three local schools adopted the app. Teachers started sharing content, students could learn offline."' },
                { step: "6. Until finally...", text: '"Over 2,000 students across 15 schools are now using the platform."' },
                { step: "7. And ever since then...", text: '"I\'ve known that my purpose is using technology to make quality education accessible to every child."' },
              ].map((item, i) => (
                <div key={i}>
                  <p className="font-display font-semibold text-foreground">{item.step}</p>
                  <p className="text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Example 2 */}
          <Card className="overflow-hidden border-2 border-lavender/30 hover:border-lavender/60 transition-colors duration-300">
            <div className="gradient-lavender p-6 text-white">
              <span className="text-3xl mb-2 block">💼</span>
              <h4 className="font-display font-bold text-xl">Marketing Pitch Video</h4>
              <p className="text-white/80 text-sm italic">Bold opening with a question</p>
            </div>
            <CardContent className="p-6 space-y-4 text-sm max-h-[400px] overflow-y-auto">
              {[
                { step: "Opening:", text: '"What if I told you that 60% of small businesses lose customers not because of bad products, but because of terrible follow-up?"' },
                { step: "1. Once upon a time...", text: '"I was freelancing as a graphic designer, working with local businesses — restaurants, salons, boutiques."' },
                { step: "2. Every day...", text: '"I\'d create beautiful logos and brand identity. But I kept noticing the same pattern — customers never came back."' },
                { step: "3. Until one day...", text: '"A café owner told me she spent ₹50,000 on ads but barely got repeat customers. They had no retention strategy."' },
                { step: "4. Because of that...", text: '"I started offering automated follow-up systems. Birthday messages, feedback requests, loyalty rewards."' },
                { step: "5. Because of that...", text: '"That café owner saw a 35% increase in repeat customers within three months."' },
                { step: "6. Until finally...", text: '"I pivoted my entire business. I\'ve worked with over 40 businesses, averaging 40% boost in retention."' },
                { step: "7. And ever since then...", text: '"I\'ve built my work around one belief: every business deserves a second chance with their customers."' },
              ].map((item, i) => (
                <div key={i}>
                  <p className="font-display font-semibold text-foreground">{item.step}</p>
                  <p className="text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ScriptWritingTab;