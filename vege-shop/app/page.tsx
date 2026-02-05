import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Predictive buying",
    description:
      "Seasonality signals and sell-through forecasts keep your inventory lean without risking stockouts.",
  },
  {
    title: "Grower-direct lanes",
    description:
      "Lock in weekly volume with traceable growers and transparent pricing across regions.",
  },
  {
    title: "Quality snapshots",
    description:
      "Inspect lots remotely with harvest notes, temperature logs, and arrival photos.",
  },
  {
    title: "Mixed-load routing",
    description:
      "Consolidate deliveries and shave miles with dynamic route building and live ETAs.",
  },
  {
    title: "Waste recovery",
    description:
      "Divert near-date inventory into institutional buyers in a single tap.",
  },
  {
    title: "Instant settlement",
    description:
      "Automate payouts to growers within 24 hours using invoice-level funding.",
  },
];

const highlights = [
  {
    label: "Forecast accuracy",
    value: "92%",
    note: "Across 40+ SKUs",
  },
  {
    label: "Avg. delivery time",
    value: "4.6h",
    note: "Metro-only lanes",
  },
  {
    label: "Shrink reduction",
    value: "-31%",
    note: "Last 90 days",
  },
];

const steps = [
  {
    title: "Signal demand",
    description:
      "Sync POS data and upcoming promotions so the model flags shortages before they hit.",
  },
  {
    title: "Reserve lots",
    description:
      "Book harvest windows in one click and lock in transparent pricing by region.",
  },
  {
    title: "Deliver in hours",
    description:
      "Mix loads across carriers and track cold-chain integrity to the dock door.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_circle_at_10%_-10%,rgba(16,185,129,0.18),transparent_60%),radial-gradient(900px_circle_at_95%_10%,rgba(56,189,248,0.16),transparent_55%)] text-foreground">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-8">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-foreground text-background">
              <span className="text-lg font-[var(--font-display)]">V</span>
            </div>
            <div className="leading-tight">
              <p className="text-base font-semibold tracking-tight">VegeShop</p>
              <p className="text-xs text-muted-foreground">
                Fresh supply, smarter buys
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <Link className="transition hover:text-foreground" href="#how">
              How it works
            </Link>
            <Link className="transition hover:text-foreground" href="#features">
              Features
            </Link>
            <Link className="transition hover:text-foreground" href="#insights">
              Insights
            </Link>
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <Button variant="ghost">Log in</Button>
            <Button>Get a demo</Button>
          </div>
          <Button className="md:hidden" variant="outline">
            Menu
          </Button>
        </header>

        <main className="mt-16 grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="flex flex-col gap-8">
            <Badge className="w-fit bg-emerald-500/10 text-emerald-700">
              Demand-aware buying is live
            </Badge>
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl font-[var(--font-display)] leading-tight tracking-tight text-foreground sm:text-5xl">
                Fresh produce, orchestrated from soil to shelf.
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl">
                VegeShop connects growers, buyers, and carriers into a single
                supply cockpit. Forecast demand, reserve lots, and deliver
                greens in hours, not days.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button className="h-12 px-6 text-base">Start a pilot</Button>
              <Button variant="outline" className="h-12 px-6 text-base">
                View catalog
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <span>30+ regional growers</span>
              <span>Next-morning settlement</span>
              <span>Cold-chain verified</span>
            </div>
          </section>

          <section className="flex flex-col gap-6">
            <Card className="border border-border/60 bg-background/80 shadow-xl backdrop-blur">
              <CardHeader className="flex flex-row items-start justify-between">
                <div>
                  <CardTitle className="text-base font-semibold">
                    Availability board
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Updated 8 min ago
                  </p>
                </div>
                <Badge variant="secondary">Live</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-background px-4 py-3">
                  <div>
                    <p className="text-sm font-medium">Organic Romaine</p>
                    <p className="text-xs text-muted-foreground">
                      Salinas Valley • 24 pallets
                    </p>
                  </div>
                  <Badge className="bg-emerald-500/15 text-emerald-700">
                    $18.40
                  </Badge>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-background px-4 py-3">
                  <div>
                    <p className="text-sm font-medium">Heirloom Tomatoes</p>
                    <p className="text-xs text-muted-foreground">
                      Baja Norte • 12 pallets
                    </p>
                  </div>
                  <Badge className="bg-amber-500/15 text-amber-700">
                    $22.10
                  </Badge>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-background px-4 py-3">
                  <div>
                    <p className="text-sm font-medium">Baby Spinach</p>
                    <p className="text-xs text-muted-foreground">
                      Willamette • 16 pallets
                    </p>
                  </div>
                  <Badge className="bg-sky-500/15 text-sky-700">$15.70</Badge>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <Card key={item.label} className="border-border/60">
                  <CardHeader className="pb-2">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      {item.label}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-semibold">{item.value}</p>
                    <p className="text-xs text-muted-foreground">{item.note}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </main>

        <section id="how" className="mt-24">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-emerald-700">
              How it works
            </p>
            <h2 className="text-3xl font-[var(--font-display)]">
              A closed loop for fresh supply.
            </h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <Card key={step.title} className="border-border/60">
                <CardHeader>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    Step 0{index + 1}
                  </p>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {step.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="features" className="mt-24">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-emerald-700">
                Built for buyers and growers
              </p>
              <h2 className="mt-2 text-3xl font-[var(--font-display)]">
                Every step, tightly connected.
              </h2>
            </div>
            <Button variant="outline" className="hidden sm:inline-flex">
              Download spec
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={feature.title} className="border-border/60">
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-700">
                    <span className="text-sm font-semibold">0{index + 1}</span>
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {feature.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="insights" className="mt-24">
          <Card className="border-border/60 bg-foreground text-background">
            <CardContent className="grid gap-8 px-8 py-10 md:grid-cols-[1.4fr_0.6fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-background/70">
                  Weekly growth briefing
                </p>
                <h3 className="mt-3 text-3xl font-[var(--font-display)]">
                  See the crop outlook before the market does.
                </h3>
                <p className="mt-4 text-sm text-background/70">
                  Get early signals on weather shifts, harvest windows, and
                  demand spikes. Share tailored dashboards with every buying
                  team.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Button variant="secondary" className="w-full">
                  Request a briefing
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-background/20 text-background hover:bg-background/10"
                >
                  See sample report
                </Button>
                <p className="text-xs text-background/60">
                  No spam. One insight-packed email per week.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <footer className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>VegeShop Supply Network © 2026</p>
          <div className="flex items-center gap-6">
            <Link className="transition hover:text-foreground" href="#">
              Privacy
            </Link>
            <Link className="transition hover:text-foreground" href="#">
              Terms
            </Link>
            <Link className="transition hover:text-foreground" href="#">
              Contact
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
