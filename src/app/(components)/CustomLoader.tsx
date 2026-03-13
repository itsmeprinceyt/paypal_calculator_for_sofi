import { Loader2 } from "lucide-react";

export default function CustomLoader() {
  return (
    <div className="absolute inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center gap-2">
      <Loader2 className="w-6 h-6 text-white animate-spin" />
      <p className="text-white font-medium text-lg">Loading ...</p>
    </div>
  );
}
