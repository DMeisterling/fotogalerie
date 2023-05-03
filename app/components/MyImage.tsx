"use client";

import Image from "next/image";
import { useState } from "react";
import CustomImage from "../types/Image";

function MyImage({ resImage }: { resImage: CustomImage }) {
  const [isLoading, setLoading] = useState(true);
  return (
    <a href={resImage.href} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt=""
          src={resImage.imageSrc}
          className={`object-cover group-hover:opacity-75
          ${
            isLoading
              ? "object-cover grayscale blur-2xl scale-110"
              : "object-cover grayscale-0 blur-0 scale-100"
          }`}
          fill
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{resImage.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">
        {resImage.username}
      </p>
    </a>
  );
}

export default MyImage;
