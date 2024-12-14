import React from "react";
import { useContactModal } from "@/context/ContactModalProvider";

interface ContactButtonProps {
  label?: string; // Button text
  icon?: React.ReactNode; // Custom icon
  className?: string; // Custom Tailwind classes
}

export default function ContactButton({
  label,
  icon,
  className,
}: ContactButtonProps) {
  const { openModal } = useContactModal();
  const logTest = () => {
    console.log("test");
  };

  return (
    <button onClick={openModal} className={className}>
      {icon && <span>{icon}</span>}
      <span>{label}</span>
    </button>
  );
}
