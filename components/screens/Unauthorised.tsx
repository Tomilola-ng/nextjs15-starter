"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { HomeIcon, PhoneCallIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Unauthorised() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 space-y-8">
      <div className="space-y-6 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="relative"
        >
          <h1 className="relative px-7 py-4 bg-background font-bold text-6xl sm:text-8xl">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Oops! Access Denied
          </h2>
          <p className="mt-2 text-muted-foreground max-w-[500px]">
            You don&apos;t have permission to access this page. Please contact
            the administrator if you believe you should have access.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Button asChild size="lg">
          <Link href="/">
            <HomeIcon className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/contact-us">
            <PhoneCallIcon className="mr-2 h-4 w-4" />
            Contact Us
          </Link>
        </Button>
      </motion.div>
    </main>
  );
}
