export function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <div className="container-content py-12">
        <p className="font-display text-sm font-medium text-foreground">Dhaval Kakkad</p>
        <p className="mt-1 text-[13px] text-muted-dim">
          Mechanical Engineer · Researcher · CFD Engineer
        </p>
      </div>
      <div className="container-content border-t border-border-subtle py-5">
        <p className="text-xs text-muted-dim">
          © {new Date().getFullYear()} Dhaval Kakkad. Rajkot, Gujarat, India.
        </p>
      </div>
    </footer>
  );
}
