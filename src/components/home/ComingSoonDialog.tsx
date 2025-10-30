import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const ComingSoonDialog = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show dialog on first load
    const hasSeenDialog = sessionStorage.getItem("hasSeenComingSoonDialog");
    if (!hasSeenDialog) {
      setOpen(true);
      sessionStorage.setItem("hasSeenComingSoonDialog", "true");
    }
  }, []);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bold text-center">
            <span className="gradient-text">HpyRide.Com</span>
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center space-y-4 pt-4">
            <p className="text-lg font-semibold text-foreground">
              We're Coming Soon!
            </p>
            <p className="text-muted-foreground">
              India's All-in-One Mobility Platform
            </p>
            <p className="text-sm text-muted-foreground">
              Join thousands waiting for the future of Indian mobility. Stay tuned for our launch!
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className="w-full bg-gradient-to-r from-[hsl(258,69%,35%)] via-[hsl(330,81%,60%)] to-[hsl(351,89%,60%)] text-white hover:opacity-90">
            Explore Website
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ComingSoonDialog;
