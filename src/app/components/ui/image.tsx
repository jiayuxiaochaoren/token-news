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
  console.log(props.width, props.height, "dddd");

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

  if (error) {
    return (
      <div
        className={containerClasses}
        style={{ width: props.width || 48, height: props.height || 48 }}
      >
        <div className="flex flex-col items-center p-4">
          {!alt ? (
            <ImageOffIcon className="w-8 h-8 mb-2" />
          ) : (
            <span className="text-xl text-center">
              {alt?.slice(0, 2) || ""}
            </span>
          )}
        </div>
      </div>
    );
  }
  return (
    <div
      className={`rounded-full overflow-hidden w-[${props.width || 48}px] h-[${
        props.height || 48
      }px] relative`}
    >
      <NextImage
        {...props}
        style={{
          width: props.width || 48,
          height: props.height || 48,
          objectFit: "cover",
        }}
        alt={alt}
        onError={() => setError(true)}
        className={imageClasses}
      />
    </div>
  );
}
