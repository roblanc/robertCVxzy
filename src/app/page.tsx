
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { YoutubeEmbed } from "@/components/youtube-embed";
import { Highlighter } from "@/components/ui/highlighter";
import { CoolMode } from "@/components/ui/cool-mode";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { VIDEOS } from "@/data/videos";
import Link from "next/link";
import Markdown from "react-markdown";

interface HackathonProject {
  title: string;
  dates: string;
  location: string;
  description: string;
  image: string;
  mlh?: string;
  links: any[];
}

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h4 className="text-xl font-bold">Work Experience</h4>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h4 className="text-xl font-bold">Education</h4>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <BlurFadeText
        className="max-w-[600px] md:text-xl mx-auto text-center"
        delay={BLUR_FADE_DELAY + 0.05}
        text={
          <>
            You can check my writing on{" "}
            <Highlighter action="highlight" color="#ADD8E6">
              <Link href="https://robertus.xyz" target="_blank">
                robertus.xyz
              </Link>
            </Highlighter>
          </>
        }
      />
      <BlurFadeText
        className="max-w-[600px] md:text-xl mx-auto text-center"
        delay={BLUR_FADE_DELAY + 0.10}
        text={
          <>
            I write a newsletter called{" "}
            <Highlighter action="highlight" color="#ADD8E6">
              <Link href="https://linkincubator.substack.com/" target="_blank">
                Link Incubator
              </Link>
            </Highlighter>
          </>
        }
      />
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h4 className="text-xl font-bold">Skills</h4>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
<h4 className="text-3xl font-bold tracking-tighter sm:text-5xl">Check out my latest work</h4>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>


      <section id="book-reviews">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
<h4 className="text-3xl font-bold tracking-tighter sm:text-5xl">Book reviews</h4>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I enjoy reading books and sharing my thoughts on them. Here are some of my book reviews.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.bookReviews.map((video, id) => (
              <BlurFade
                key={video.id}
                delay={BLUR_FADE_DELAY * 14 + id * 0.05}
              >
                <YoutubeEmbed id={video.id} />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="youtube-videos">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
<h4 className="text-3xl font-bold tracking-tighter sm:text-5xl">I make video essays</h4>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I create videos about technology, philosophy, and culture. Here are some of my favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {VIDEOS.map((video, id) => (
              <BlurFade
                key={video.id}
                delay={BLUR_FADE_DELAY * 18 + id * 0.05}
              >
                <YoutubeEmbed id={video.id} />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
