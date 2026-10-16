import { lazy, Suspense } from "react";
import type { ComponentType } from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import CookieBanner from "./components/CookieBanner";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Process from "./components/Process";
import TopStrip from "./components/TopStrip";
import Work from "./components/Work";
import "./styles/legal.css";

interface LegalRoute {
  path: string;
  file: string;
  title: string;
}

/* Worker 3 builds these at src/pages/legal/<File>.tsx. Until they land,
   the import below rejects and the fallback renders instead, so the
   build never breaks on a missing file. */
const LEGAL_ROUTES: LegalRoute[] = [
  { path: "privacy", file: "Privacy", title: "Privacy policy" },
  { path: "terms", file: "Terms", title: "Terms of service" },
  { path: "refund", file: "Refund", title: "Refund policy" },
  { path: "cookies", file: "Cookies", title: "Cookie policy" },
  { path: "data-deletion", file: "DataDeletion", title: "Data deletion" },
];

function LegalFallback({ title }: { title: string }) {
  return (
    <article className="legal-fallback">
      <p className="meta">Redstone Labs · Legal</p>
      <h1 className="legal-fallback__title">{title}</h1>
      <p>This page is being set in type. Check back soon.</p>
      <p>
        <Link to="/">Back to the studio page</Link>
      </p>
    </article>
  );
}

function legalPage(route: LegalRoute): ComponentType {
  return lazy<ComponentType>(() =>
    import(`./pages/legal/${route.file}.tsx`).then(
      (mod) => ({ default: mod.default as ComponentType }),
      () => ({ default: () => <LegalFallback title={route.title} /> }),
    ),
  );
}

const legalPages = LEGAL_ROUTES.map((route) => ({
  ...route,
  Page: legalPage(route),
}));

function SkipLink() {
  return (
    <a className="skip-link" href="#main-content">
      Skip to content
    </a>
  );
}

function StudioPage() {
  return (
    <>
      <SkipLink />
      <TopStrip />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Work />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function LegalShell({ Page }: { Page: ComponentType }) {
  return (
    <>
      <SkipLink />
      <TopStrip />
      <main id="main-content" tabIndex={-1}>
        <Suspense fallback={<p className="meta legal-loading">Loading</p>}>
          <Page />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<StudioPage />} />
        {legalPages.map(({ path, Page }) => (
          <Route key={path} path={path} element={<LegalShell Page={Page} />} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <CookieBanner />
    </BrowserRouter>
  );
}
