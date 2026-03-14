"use client";
import { useEffect, useState } from "react";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-black">
      {/* Only render background effects after mounting on client */}
      {isMounted && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* Background grid */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />

          {/* Ambient glow */}
          <div
            className="absolute"
            style={{
              width: 600,
              height: 600,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      )}

      <div className="relative z-10 pointer-events-auto">{children}</div>
    </div>
  );
}
