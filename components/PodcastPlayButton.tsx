"use client";

import posthog from "posthog-js";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Link from "next/link";

export function PodcastPlayButton({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  return (
    <Link
      href={url}
      target="_blank"
      className="w-full sm:w-auto"
      onClick={() =>
        posthog.capture("podcast_episode_play_clicked", {
          episode_title: title,
        })
      }
    >
      <Button className="w-full sm:w-auto bg-emerald-500 text-white hover:bg-emerald-500/75">
        <Play className="w-4 h-4 mr-2" />
        Play Episode
      </Button>
    </Link>
  );
}
