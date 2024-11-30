import React from 'react'
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { ShootingStars } from '../ui/shooting-stars';
import { StarsBackground } from '../ui/stars-background';

export default function Features() {
  return (
    <section>
        <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
            <h2 className="text-2xl md:text-7xl font-bold dark:text-white">Explore the features</h2>
        </div>
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
    </section>
  );
}

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
  );
  const items = [
    {
      title: "Seamless Navigation",
      description: "Ascord’s sleek, auto-hiding sidebar gives you quick access to key sections – private messages, project spaces, and account settings – without cluttering your workspace. Icons keep everything simple and intuitive, letting you focus on your tasks and conversations without distraction.",
      header: <Skeleton />,
      className: "md:col-span-2",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Centralized Task Management",
      description: "At the core of Ascord is the central task hub. This dynamic, blank workspace adapts to your current selection, displaying projects, tasks, or messages based on what you choose. With the whole screen at your disposal, you can dive deep into each task with clarity and focus.",
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Streamlined Dock Access",
      description: "Forget the complexity of traditional channel lists. Ascord’s dock at the bottom of your screen replaces customizable channels with predefined spaces tailored to your needs. Quickly switch between projects, messages, and resources – all organized to keep you moving forward without the need to customize or configure.",
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Unified Communication & Collaboration",
      description:
        "Say goodbye to switching between apps. With real-time messaging and updates, Ascord lets you communicate and collaborate in one place. Work with teammates, get feedback, and make decisions without losing your train of thought.",
      header: <Skeleton />,
      className: "md:col-span-2",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
  ];
