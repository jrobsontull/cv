import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { ExternalLinkIcon, GlobeIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PublicationCard } from "@/components/publication-card";
import { RESUME_DATA } from "@/data/resume-data";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-12">
      <section className="mx-auto w-full max-w-2xl space-y-6 bg-white print:space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-3xl font-semibold tracking-tight">
              {RESUME_DATA.name}
            </h1>
            <p className="max-w-md text-pretty text-base leading-5 text-muted-foreground">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty text-sm text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a
                    href={social.url}
                    target="_blank"
                    referrerPolicy="no-referrer"
                  >
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 text-sm text-muted-foreground print:flex">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
            </div>
          </div>

          <Avatar className="size-20 sm:size-24 md:size-28">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="text-lg font-semibold tracking-tight">About</h2>
          <p className="text-pretty font-sans text-sm leading-6 text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
        </Section>
        <Section>
          <h2 className="text-lg font-semibold tracking-tight">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">{education.degree}</CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-lg font-semibold tracking-tight">
            Work Experience
          </h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={work.link}>
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-sm"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                  </div>
                </CardHeader>
                <CardContent className="mt-1.5 flex flex-col">
                  {work.roles.map((role, index) => {
                    return (
                      // <div className="flex flex-col" key={index}>
                      //   <div className="flex w-full justify-between">
                      //     <h4 className="text-sm text-gray-950">
                      //       {role.title}
                      //     </h4>
                      //     <div className="text-sm tabular-nums text-gray-500">
                      //       {role.start} - {role.end ?? "Present"}
                      //     </div>
                      //   </div>
                      //   <div className="mt-2 text-xs">{role.description}</div>
                      // </div>
                      <div
                        key={index}
                        className="flex w-full justify-between space-x-3"
                      >
                        {work.roles.length > 1 && (
                          <div className="mt-1.5 flex flex-col items-center">
                            <div className="h-2 min-h-2 w-2 min-w-2 rounded-full bg-gray-300" />
                            {/* if index is not the last element, create a line */}
                            {index !== work.roles.length - 1 && (
                              <div className="mt-1.5 h-full w-0.5 bg-gray-300" />
                            )}
                          </div>
                        )}
                        <div className="flex w-full flex-col">
                          <div className="flex w-full justify-between">
                            <h4 className="text-sm font-medium text-gray-950">
                              {role.title}
                            </h4>
                            <div className="whitespace-nowrap text-sm tabular-nums text-gray-500">
                              {role.start} - {role.end ?? "Present"}
                            </div>
                          </div>
                          <div className="mt-2 pb-3 text-sm leading-6">
                            {role.description}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
            <h2 className="text-lg font-semibold tracking-tight">
              Selected Publications
            </h2>
            <Button
              asChild
              className="h-auto max-w-full whitespace-normal px-0 text-left text-sm font-normal leading-5 sm:text-right"
              size="sm"
              variant="link"
            >
              <a
                href={RESUME_DATA.scholarUrl}
                referrerPolicy="no-referrer"
                target="_blank"
              >
                See all on Google Scholar
                <ExternalLinkIcon
                  aria-hidden="true"
                  className="ml-1 inline-block size-3.5 align-[-0.15em]"
                />
              </a>
            </Button>
          </div>
          <div className="flex flex-col gap-y-5">
            {RESUME_DATA.publications.map((publication) => (
              <PublicationCard
                contribution={publication.contribution}
                imageUrl={
                  "imageUrl" in publication ? publication.imageUrl : undefined
                }
                key={publication.title}
                link={publication.link}
                title={publication.title}
                venue={publication.venue}
                year={publication.year}
              />
            ))}
          </div>
        </Section>
        <Section>
          <h2 className="text-lg font-semibold tracking-tight">Conferences</h2>
          {RESUME_DATA.conferences.map((conference, index) => {
            return (
              <Card key={`${conference.event}-${conference.date}-${index}`}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 text-sm font-semibold leading-5">
                      {conference.event}
                    </h3>
                    <div className="whitespace-nowrap text-sm tabular-nums text-gray-500">
                      {conference.date}
                    </div>
                  </div>

                  <h4 className="text-sm leading-none text-muted-foreground">
                    {conference.location}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-sm leading-6">
                  {conference.title}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-lg font-semibold tracking-tight">Awards</h2>
          {RESUME_DATA.awards.map((award) => {
            return (
              <Card key={award.issuer}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 text-sm font-semibold leading-5">
                      {award.event}
                    </h3>
                    <div className="whitespace-nowrap text-sm tabular-nums text-gray-500">
                      {award.date}
                    </div>
                  </div>

                  <h4 className="text-sm leading-none text-muted-foreground">
                    {award.issuer}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-sm leading-6">
                  {award.title}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-lg font-semibold tracking-tight">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => {
              return <Badge key={skill}>{skill}</Badge>;
            })}
          </div>
        </Section>
        <Section>
          <h2 className="text-lg font-semibold tracking-tight">Tech Stack</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.techStack.map((skill) => {
              return <Badge key={skill}>{skill}</Badge>;
            })}
          </div>
        </Section>

        {/* <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section> */}
      </section>

      <CommandMenu
        links={[
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
