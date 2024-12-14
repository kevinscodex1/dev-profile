import { twMerge } from "tailwind-merge";

interface BulletListProps {
  text: string;
  className?: string; // Accepts a single text string
}

export const BulletList = ({ text, className }: BulletListProps) => {
  const bulletPoints = text
    .split(".")
    .filter((sentence) => sentence.trim() !== "");

  return (
    <ul className={twMerge("list-disc", className)}>
      {bulletPoints.map((point, index) => (
        <li key={index}>{point.trim()}.</li>
      ))}
    </ul>
  );
};
