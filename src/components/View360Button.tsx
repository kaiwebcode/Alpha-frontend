// import { Button } from "@/components/ui/button";
import { Rotate3D } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";

export const View360Button = () => {
  const [isRotating, setIsRotating] = useState(false);

  const handle360View = () => {
    setIsRotating(true);
    toast.success("360° View Activated", {
      description: "Interactive car view is now enabled",
    });
    setTimeout(() => setIsRotating(false), 2000);
  };

  return (
    <Button
      onClick={handle360View}
      size="lg"
      className={`group relative overflow-hidden bg-gradient-to-r from-purple-700 to-purple-900/90 hover:shadow-[var(--shadow-hover)] transition-all cursor-pointer duration-300 ${
        isRotating ? "animate-pulse" : ""
      }`}
    >
      <Rotate3D className={`mr-2 h-5 w-5 ${isRotating ? "animate-spin" : "group-hover:rotate-180 transition-transform duration-700"}`} />
      <span className="font-semibold">View 360°</span>
    </Button>
  );
};
