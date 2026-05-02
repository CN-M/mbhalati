"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Link from "next/link";
import { clientPHCapture } from "@/lib/posthog-client";


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
        clientPHCapture({
          eventName: "podcast_episode_play_clicked", properties: {
            episode_title: title,
          }
        }
      )}
    >
      <Button className="w-full sm:w-auto bg-emerald-500 text-white hover:bg-emerald-500/75">
        <Play className="w-4 h-4 mr-2" />
        Play Episode
      </Button>
    </Link>
  );
}
