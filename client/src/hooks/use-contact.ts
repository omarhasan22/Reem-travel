import { useToast } from "@/hooks/use-toast";

export interface ContactInput {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export function useCreateContactMessage() {
  const { toast } = useToast();
  
  return {
    mutate: (data: ContactInput) => {
      // Just show success message - no backend call
      toast({
        title: "تم الإرسال بنجاح",
        description: "شكراً لتواصلك معنا. سنقوم بالرد عليك في أقرب وقت ممكن.",
        variant: "default",
      });
    },
    isPending: false,
  };
}
