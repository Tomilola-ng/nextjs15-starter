"use client";

import { useAuthContext } from "@/provider/auth";
import React from "react";

export default function PrivatePage() {
  const { user } = useAuthContext();
  return (
    <div>
      <h1>Private Page</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        User: {JSON.stringify(user)}
      </p>
    </div>
  );
}
