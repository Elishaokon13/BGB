"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import { ArrowUpWideNarrow, CircleArrowUp } from "lucide-react";
import Image from "next/image";

const Claim = () => {
  const params = useParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [packageId, setPackageId] = useState("");
  const [isClaiming, setIsClaiming] = useState(false);
  const { address } = useAccount();

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        setIsLoading(true);
        const savePackageId = params.id;
        const response = await fetch(`/api/saved-package/${savePackageId}`);

        if (!response.ok) {
          throw new Error("Package not found");
        }

        const data = await response.json();
        setPackageId(data.packageId);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Failed to fetch package"
        );
      } finally {
        setIsLoading(false);
      }
    };

    if (params.id) {
      fetchPackage();
    }
  }, [params.id]);

  const handleClaim = async () => {
    try {
      setIsClaiming(true);
      const response = await fetch("/api/claim", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ address, packageId }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to claim package");
      }

      router.push("/welcome");
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Failed to claim package"
      );
    } finally {
      setIsClaiming(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <p className="text-muted-foreground">Loading package details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center p-4">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen justify-center items-center p-4 bg-white">
      <div className="w-full max-w-md">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center">
            <button
              onClick={handleClaim}
              disabled={isClaiming}
              className="w-full max-w-[400px] aspect-square relative rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-[1.02]"
            >
              {isClaiming ? (
                <div className="flex items-center justify-center h-full bg-gray-100">
                  <h1 className="animate-pulse text-xl font-medium">Claiming...</h1>
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src="/video/gift.gif"
                    alt="Gift Animation"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
                  <ArrowUpWideNarrow className="animate-bounce absolute bottom-8 left-1/2 -translate-x-1/2 text-blue-600" size={32} />
                </div>
              )}
            </button>
            
            <div className="text-center mt-8 space-y-4">
              <p className="text-3xl font-medium text-gray-800">
                Click to Claim Your Package
              </p>
              <CircleArrowUp className="mx-auto text-blue-600" size={28} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Claim;