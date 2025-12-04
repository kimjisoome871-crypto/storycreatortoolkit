import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const frameworkSteps = [
  {
    number: 1,
    title: "Once upon a time...",
    subtitle: "(your starting point/context)",
    description: "Set the scene. Who were you? Where were you? What was your situation?",
    gradient: "from-pink-500 to-rose-500",
    emoji: "🌅"
  },
  {
    number: 2,
    title: "Every day...",
    subtitle: "(your routine or normal world)",
    description: "What was life like before the change? What was your normal routine, behavior, or mindset?",
    gradient: "from-orange-400 to-amber-500",
    emoji: "🔄"
  },
  {
    number: 3,
    title: "Until one day...",
    subtitle: "(your challenge or turning point)",
    description: "This is the moment everything changed. What problem did you face? What disrupted your normal?",
    gradient: "from-emerald-400 to-teal-500",
    emoji: "⚡"
  },
  {
    number: 4,
    title: "Because of that...",
    subtitle: "(your first action)",
    description: "What did you do in response? What was the first decision or action you took?",
    gradient: "from-blue-400 to-cyan-500",
    emoji: "🎯"
  },
  {
    number: 5,
    title: "Because of that...",
    subtitle: "(what happened next)",
    description: "What happened as a result of your first action? What unfolded next?",
    gradient: "from-violet-500 to-purple-500",
    emoji: "🔗"
  },
  {
    number: 6,
    title: "Until finally...",
    subtitle: "(the result or breakthrough)",
    description: "What was the outcome? How did it all turn out?",
    gradient: "from-fuchsia-500 to-pink-500",
    emoji: "🏆"
  },
  {
    number: 7,
    title: "And ever since then...",
    subtitle: "(your takeaway or lasting impact)",
    description: "What did you learn? How did this change you? What do you want your audience to remember?",
    gradient: "from-indigo-500 to-blue-600",
    emoji: "✨"
  }
];

const ScriptWritingTab = () => {
  return (
    <div className="space-y-12">
      {/* Intro */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-2">📝 Structure Your Story with the Pixar Story Framework</h2>
        <p className="text-muted-foreground">
          Here's the 7-part framework to organize your story:
        </p>
      </div>

      {/* 7-Point Framework - Colorful Gradient Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {frameworkSteps.map((step) => (
          <div 
            key={step.number} 
            className={`relative bg-gradient-to-br ${step.gradient} rounded-xl p-6 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default`}
          >
            <div className="absolute top-4 right-4 text-3xl opacity-80">{step.emoji}</div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center font-bold text-lg">
                {step.number}
              </div>
              <h4 className="font-bold text-lg">{step.title}</h4>
            </div>
            <p className="text-white/80 text-sm font-medium mb-2">{step.subtitle}</p>
            <p className="text-white/90 text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Tip */}
      <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
        <CardContent className="p-6">
          <p className="text-foreground">
            💡 <strong>Remember:</strong> You can start your story with any of these elements — a quote, the challenge, or the result. The framework is your structure, not your script.
          </p>
        </CardContent>
      </Card>

      {/* Examples Section */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-primary mb-2">📖 See It In Action: Two Examples</h3>
          <p className="text-muted-foreground italic">
            Notice how they start differently but both follow the same framework
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Example 1 */}
          <Card className="border-l-4 border-l-emerald-500 border-border/50 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-t-lg">
              <CardTitle className="text-emerald-700 text-lg flex items-center gap-2">
                <span className="text-2xl">🎓</span> Example 1: Grad School Application Video
              </CardTitle>
              <CardDescription className="italic text-emerald-600">Traditional opening</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-4 text-sm">
              <div>
                <p className="font-semibold text-foreground">1. Once upon a time...</p>
                <p className="text-muted-foreground">"I was working as a software engineer at a mid-sized IT company — decent package, stable job, everything my family wanted for me."</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">2. Every day...</p>
                <p className="text-muted-foreground">"I'd write code, attend meetings, fix bugs. The work was fine, but I kept thinking: is this all there is? Am I actually making a difference to anyone?"</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">3. Until one day...</p>
                <p className="text-muted-foreground">"During the pandemic, my younger cousin in our village couldn't attend online classes because their school had no digital infrastructure. She was falling behind, and there was nothing her parents could do. That's when it hit me — I'm building apps for people who already have everything, while kids like her are being left behind."</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">4. Because of that...</p>
                <p className="text-muted-foreground">"I started teaching coding to underprivileged students on weekends through an NGO. Then I built a simple app that worked on low-bandwidth networks to help students in rural areas access study materials offline."</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">5. Because of that...</p>
                <p className="text-muted-foreground">"Three local schools adopted the app. Teachers started sharing content, students could learn even without stable internet, and I saw scores improve in those communities."</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">6. Until finally...</p>
                <p className="text-muted-foreground">"Over 2,000 students across 15 schools are now using the platform. But I realized something — tech alone isn't enough. To truly bridge the education gap, I need to understand policy, curriculum design, and how education systems actually work."</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">7. And ever since then...</p>
                <p className="text-muted-foreground">"I've known that my purpose is using technology to make quality education accessible to every child, regardless of where they're born. That's why I'm applying to [Program Name] — because I want to build solutions that scale across India, not just one app at a time."</p>
              </div>
            </CardContent>
          </Card>

          {/* Example 2 */}
          <Card className="border-l-4 border-l-violet-500 border-border/50 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-t-lg">
              <CardTitle className="text-violet-700 text-lg flex items-center gap-2">
                <span className="text-2xl">💼</span> Example 2: Marketing/Pitch Video
              </CardTitle>
              <CardDescription className="italic text-violet-600">Bold opening with a question</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-4 text-sm">
              <div>
                <p className="font-semibold text-foreground">Opening:</p>
                <p className="text-muted-foreground">"What if I told you that 60% of small businesses lose customers not because of bad products, but because of terrible follow-up?"</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">1. Once upon a time...</p>
                <p className="text-muted-foreground">"I was freelancing as a graphic designer, working with local businesses — restaurants, salons, boutiques."</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">2. Every day...</p>
                <p className="text-muted-foreground">"I'd create beautiful logos, design menus, build their brand identity. But I kept noticing the same pattern — they'd get customers once, but those customers never came back."</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">3. Until one day...</p>
                <p className="text-muted-foreground">"A café owner I worked with told me she spent ₹50,000 on Instagram ads but barely got repeat customers. She had no system to stay in touch with people after their first visit. That's when I realized — businesses weren't failing because of bad marketing, they were failing because they had no retention strategy."</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">4. Because of that...</p>
                <p className="text-muted-foreground">"I started offering a simple add-on service: automated follow-up systems. Birthday messages, feedback requests, loyalty rewards — all personalized, all automated."</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">5. Because of that...</p>
                <p className="text-muted-foreground">"That café owner saw a 35% increase in repeat customers within three months. Other clients started asking for the same thing. Word spread."</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">6. Until finally...</p>
                <p className="text-muted-foreground">"I pivoted my entire business. Now I don't just design brands — I help small businesses turn one-time customers into loyal communities. I've worked with over 40 businesses, and on average, they see a 40% boost in customer retention."</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">7. And ever since then...</p>
                <p className="text-muted-foreground">"I've built my work around one belief: every business deserves a second chance with their customers. And that's exactly what I help them create."</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ScriptWritingTab;
