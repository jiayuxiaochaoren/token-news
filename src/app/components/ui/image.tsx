"use client";

import React, { useState } from "react";
import NextImage, { type ImageProps as NextImageProps } from "next/image";
import { ImageOffIcon } from "lucide-react";
import { cn } from "@/_lib/utils";

interface ImageProps extends Omit<NextImageProps, "alt"> {
  fallbackText?: string;
  alt: string;
  circular?: boolean;
}

export function Image({
  fallbackText = "",
  alt,
  circular = true,
  className,
  ...props
}: ImageProps) {
  const [error, setError] = useState(false);

  const imageClasses = cn(
    "object-cover",
    circular && "rounded-full",
    className
  );

  const containerClasses = cn(
    "flex items-center justify-center bg-[#262626] text-[#ffffff]",
    circular ? "rounded-full" : "rounded-md",
    className
  );

  if (error || !props.src) {
    return (
      <div
        className={containerClasses}
        style={{ width: props.width, height: props.height }}
      >
        <div className="flex flex-col items-center">
          {!alt ? (
            <ImageOffIcon className="w-5 h-5" />
          ) : (
            <span className="text-base font-medium">
              {alt?.slice(0, 2).toUpperCase() || ""}
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <NextImage
      {...props}
      alt={alt}
      onError={() => setError(true)}
      className={imageClasses}
      style={{
        width: props.width,
        height: props.height,
        objectFit: "cover",
      }}
    />
  );
}
