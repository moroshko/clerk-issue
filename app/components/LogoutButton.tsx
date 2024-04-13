"use client";

import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LogoutButton = () => {
  const { signOut } = useClerk();
  const router = useRouter();
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <button
      className="rounded border px-2 py-1 hover:bg-gray-100"
      type="button"
      disabled={isDisabled}
      onClick={() => {
        setIsDisabled(true);

        signOut(() => {
          router.push("/login");
        });
      }}
    >
      Logout
    </button>
  );
};

export { LogoutButton };
