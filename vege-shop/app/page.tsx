import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import shopData from "@/data/shop-data.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f7f2] text-slate-900">
      <div className="border-b border-emerald-900/10 bg-[#f1f0e9] text-xs text-slate-600">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
          <div className="flex items-center gap-4">
            <span>+1 (213) 456-7890</span>
            <span>support@vegeshop.co</span>
          </div>
          <div className="flex items-center gap-3">
            <span>USD</span>
            <span>English</span>
            <Badge variant="secondary" className="rounded-full">
              50% off
            </Badge>
          </div>
        </div>
      </div>

      <header className="bg-[#f8f7f2]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-900 text-white">
                <span className="text-lg font-[var(--font-display)]">V</span>
              </div>
              <div>
                <p className="text-lg font-semibold tracking-tight">VegeShop</p>
                <p className="text-xs text-emerald-900/60">Organic market</p>
              </div>
            </div>
            <div className="flex w-full max-w-xl items-center gap-2 rounded-full border border-emerald-900/10 bg-white px-4 py-2 sm:w-auto sm:flex-1">
              <input
                className="w-full bg-transparent text-sm outline-none"
                placeholder="Type here..."
              />
              <Button className="h-9 rounded-full bg-emerald-700 px-5 text-xs uppercase tracking-wide hover:bg-emerald-800">
                Search
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-700">
              <span>Wishlist</span>
              <span>Register / Login</span>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-between gap-4 text-sm font-medium text-slate-700">
            <div className="flex flex-wrap gap-5">
              {shopData.navLinks.map((item) => (
                <Link key={item} href="#" className="hover:text-emerald-700">
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-3 text-xs text-emerald-900/60">
              <span>Shopping cart</span>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-800">
                2 items
              </span>
            </div>
          </nav>
        </div>
      </header>

      <section className="bg-[#2e3d2e]">
        <div className="mx-auto max-w-6xl px-6 py-16 text-white">
          <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(120deg,rgba(16,40,24,0.85),rgba(16,40,24,0.55)),radial-gradient(600px_circle_at_80%_20%,rgba(16,185,129,0.35),transparent_65%)] px-10 py-14">
            <div className="absolute inset-0 opacity-30">
              <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.08),transparent_50%)]" />
            </div>
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-100/70">
                Shop
              </p>
              <h1 className="mt-4 text-4xl font-[var(--font-display)]">
                Shop
              </h1>
              <p className="mt-2 text-sm text-emerald-100/80">Home / Shop</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-700/70">
            When health is organic
          </p>
          <h2 className="mt-3 text-2xl font-[var(--font-display)] text-emerald-900">
            Shop Our Organic Products
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {shopData.categories.map((category) => (
            <div key={category.name} className="flex flex-col items-center gap-4">
              <div
                className={`h-24 w-24 rounded-full bg-gradient-to-br ${category.accent} shadow-inner`}
              />
              <span className="text-sm font-medium text-slate-700">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-slate-600">
          <span>Showing 1-12 of 85 items</span>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Button variant="outline" className="h-9 w-9 px-0">
                1
              </Button>
              <Button variant="outline" className="h-9 w-9 px-0">
                2
              </Button>
              <Button variant="outline" className="h-9 w-9 px-0">
                3
              </Button>
            </div>
            <Button variant="outline" className="h-9">
              Default sorting
            </Button>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {shopData.products.map((product) => (
            <Card
              key={product.name}
              className="border border-emerald-900/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="flex flex-col gap-4 p-5">
                <div className="flex items-center justify-between text-xs text-emerald-900/60">
                  <span>{product.unit}</span>
                  <Badge variant="secondary" className="rounded-full">
                    {product.badge}
                  </Badge>
                </div>
                <div
                  className={`h-32 w-full rounded-2xl bg-gradient-to-br ${product.accent}`}
                />
                <div>
                  <p className="text-xs uppercase tracking-wide text-emerald-900/50">
                    {product.category}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    {product.name}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-emerald-700">
                    {product.price}
                  </span>
                  <Button variant="outline" className="h-9 px-4 text-xs">
                    Select
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 text-sm text-slate-600">
          <Button variant="ghost" className="h-9 w-9 px-0">
            1
          </Button>
          <Button variant="ghost" className="h-9 w-9 px-0">
            2
          </Button>
          <Button variant="ghost" className="h-9 w-9 px-0">
            3
          </Button>
          <span className="px-2">...</span>
          <Button variant="ghost" className="h-9 w-9 px-0">
            25
          </Button>
        </div>
      </section>

      <footer className="bg-[#1f2f22] text-[#d3e4d2]">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-200 text-emerald-900">
                  <span className="text-lg font-[var(--font-display)]">V</span>
                </div>
                <div>
                  <p className="text-lg font-semibold">VegeShop</p>
                  <p className="text-xs text-emerald-200/70">Organic market</p>
                </div>
              </div>
              <p className="text-sm text-emerald-100/70">
                We connect organic growers and buyers with seasonal produce and
                transparent supply.
              </p>
            </div>
            {shopData.footerLinks.map((column) => (
              <div key={column.title} className="space-y-3">
                <p className="text-sm font-semibold text-white">
                  {column.title}
                </p>
                <div className="space-y-2 text-xs text-emerald-100/70">
                  {column.links.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-emerald-100/10 pt-6 text-xs text-emerald-100/60">
            <p>© 2026 VegeShop. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
