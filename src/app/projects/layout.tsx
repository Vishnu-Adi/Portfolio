import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Vishnu Adithya",
  description: "Selected systems, experiments and case studies by Vishnu Adithya.",
};

export default function ProjectsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
