import { prisma } from "@/lib/server/db";
import { Announcement } from "@prisma/client";

const defaultAnnouncement: Announcement = {
  id: 0,
  displayAnnouncement: false,
  announcement: "",
  displayButton: false,
  buttonText: "",
  buttonLink: "",
  createdAt: new Date(),
  updatedAt: new Date(),
  authorId: 69420,
};

export const getAnnouncement = async () => {
  const announcements = await prisma.announcement.findMany();
  if (announcements.length == 0) {
    return defaultAnnouncement;
  } else {
    const idx = announcements.length - 1;
    return announcements[idx];
  }
};

export const getEvents = async () => {
  return await prisma.event.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });
};
