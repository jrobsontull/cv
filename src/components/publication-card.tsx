import Image from "next/image";

interface PublicationCardProps {
  title: string;
  venue: string;
  year: string;
  contribution: string;
  link: string;
  imageUrl?: string;
}

export function PublicationCard({
  title,
  venue,
  year,
  contribution,
  link,
  imageUrl,
}: PublicationCardProps) {
  const details = (
    <div className="min-w-0">
      <h3 className="text-sm font-semibold leading-5">
        <a
          className="hover:underline"
          href={link}
          referrerPolicy="no-referrer"
          target="_blank"
        >
          {title}
        </a>
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        {venue} · {year}
      </p>
      <p className="mt-1 text-sm leading-5 text-muted-foreground">
        {contribution}
      </p>
    </div>
  );

  return (
    <article
      className={
        imageUrl
          ? "overflow-hidden border border-border bg-card print:break-inside-avoid"
          : "flex flex-col gap-3 print:break-inside-avoid"
      }
    >
      {imageUrl ? (
        <>
          <div className="relative aspect-[2/1] w-full overflow-hidden border-b border-border bg-white">
            <Image
              alt="MacroDock graphical abstract"
              className="object-contain"
              fill
              src={imageUrl}
              sizes="(min-width: 768px) 672px, 100vw"
            />
          </div>
          <div className="p-4">{details}</div>
        </>
      ) : (
        details
      )}
    </article>
  );
}
