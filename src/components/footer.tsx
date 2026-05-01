export function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-muted-foreground sm:pb-0">
      <p>
        Built with{" "}
        <a
          href="https://nextjs.org/"
          className="font-medium text-muted-foreground hover:text-primary transition-colors"
          target="_blank"
          rel="noreferrer noopener"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          className="font-medium text-muted-foreground hover:text-primary transition-colors"
          target="_blank"
          rel="noreferrer noopener"
        >
          Tailwind CSS
        </a>
        , deployed on{" "}
        <a
          href="https://vercel.com/"
          className="font-medium text-muted-foreground hover:text-primary transition-colors"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vercel
        </a>
        .
      </p>
    </footer>
  );
}
