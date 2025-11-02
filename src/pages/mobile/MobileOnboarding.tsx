import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Onboarding from "@/components/mobile/Onboarding";

const MobileOnboarding = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const completed = localStorage.getItem("onboarding_completed");
    if (completed === "true") {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  return <Onboarding />;
};

export default MobileOnboarding;
