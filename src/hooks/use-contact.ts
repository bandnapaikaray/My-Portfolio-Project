import { useState, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";

interface InsertMessage {
  [key: string]: unknown;
}

export function useContact() {
  const { toast } = useToast();
  const [isPending, setIsPending] = useState(false);

  const mutate = useCallback(async (data: InsertMessage) => {
    setIsPending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to send message");
      }

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      return res.json();
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "An error occurred";
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsPending(false);
    }
  }, [toast]);

  return {
    mutate,
    isPending,
  };
}
