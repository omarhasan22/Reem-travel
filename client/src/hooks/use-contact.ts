import { useMutation } from "@tanstack/react-query";
import { api, type ContactInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateContactMessage() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: ContactInput) => {
      const res = await fetch(api.contact.create.path, {
        method: api.contact.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "حدث خطأ أثناء إرسال الرسالة");
      }
      
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "تم الإرسال بنجاح",
        description: "شكراً لتواصلك معنا. سنقوم بالرد عليك في أقرب وقت ممكن.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "خطأ",
        description: error.message,
        variant: "destructive",
      });
    }
  });
}
