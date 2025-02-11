"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { HomeIcon, PhoneCallIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ComingSoon() {
  return (
    <main className="min-h-[70svh] flex flex-col items-center justify-center p-4 space-y-12">
      <div className="space-y-2 text-center">
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
          <h1 className="relative px-7 py-4 bg-background font-heading font-bold text-3xl sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
            Coming Soon!
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-2"
        >
          <h2 className="text-lg lg:text-2xl font-bold tracking-tight">
            We&apos;re crafting something amazing for you!
          </h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            Our team is working hard to bring you an exciting new feature. While
            you wait, sign up for our newsletter to be the first to know when we
            launch!
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Button asChild size="lg">
          <Link href="/dashboard">
            <HomeIcon className="mr-2 h-4 w-4" />
            Back to Dashboard
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
