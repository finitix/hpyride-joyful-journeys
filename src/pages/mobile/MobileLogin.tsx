import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MobileLogin = () => {
  const navigate = useNavigate();
  const [loginMethod, setLoginMethod] = useState<"phone" | "email">("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOTP = () => {
    setOtpSent(true);
  };

  const handleVerifyOTP = () => {
    // Handle OTP verification
    navigate("/mobile/profile");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-[hsl(258,69%,35%)] to-[hsl(330,81%,60%)] text-white px-6 pt-12 pb-24 rounded-b-[2rem]">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-white/90"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
        <h1 className="text-3xl font-bold mb-2">Welcome to HpyRide</h1>
        <p className="text-white/80">Login or create a new account</p>
      </div>

      <div className="px-6 -mt-16 space-y-6 pb-24">
        {/* Login Method Toggle */}
        <div className="bg-card rounded-2xl p-2 flex gap-2 shadow-lg">
          <button
            onClick={() => setLoginMethod("phone")}
            className={`flex-1 py-3 rounded-xl font-medium transition-all ${
              loginMethod === "phone"
                ? "bg-primary text-white"
                : "text-muted-foreground"
            }`}
          >
            <Phone className="w-5 h-5 inline mr-2" />
            Phone
          </button>
          <button
            onClick={() => setLoginMethod("email")}
            className={`flex-1 py-3 rounded-xl font-medium transition-all ${
              loginMethod === "email"
                ? "bg-primary text-white"
                : "text-muted-foreground"
            }`}
          >
            <Mail className="w-5 h-5 inline mr-2" />
            Email
          </button>
        </div>

        {/* Login Form */}
        <div className="bg-card rounded-2xl p-6 space-y-4 shadow-lg">
          {!otpSent ? (
            <>
              {loginMethod === "phone" ? (
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">
                    Phone Number
                  </label>
                  <div className="flex gap-2">
                    <div className="w-16 px-3 py-3 bg-secondary rounded-xl border border-border flex items-center justify-center font-medium">
                      +91
                    </div>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Enter 10 digit number"
                      maxLength={10}
                      className="flex-1 px-4 py-3 bg-secondary/50 rounded-xl border border-border focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-secondary/50 rounded-xl border border-border focus:outline-none focus:border-primary"
                  />
                </div>
              )}

              <Button
                onClick={handleSendOTP}
                variant="gradient"
                className="w-full h-12 rounded-xl text-base mt-4"
                disabled={
                  loginMethod === "phone"
                    ? phoneNumber.length !== 10
                    : !email
                }
              >
                Send OTP
              </Button>
            </>
          ) : (
            <>
              <div className="text-center space-y-2 pb-4">
                <p className="text-sm text-muted-foreground">
                  OTP sent to{" "}
                  {loginMethod === "phone" ? `+91 ${phoneNumber}` : email}
                </p>
                <button
                  onClick={() => setOtpSent(false)}
                  className="text-sm text-primary font-medium"
                >
                  Change
                </button>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">
                  Enter OTP
                </label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="6-digit code"
                  maxLength={6}
                  className="w-full px-4 py-3 bg-secondary/50 rounded-xl border border-border focus:outline-none focus:border-primary text-center text-2xl tracking-widest font-semibold"
                />
              </div>

              <Button
                onClick={handleVerifyOTP}
                variant="gradient"
                className="w-full h-12 rounded-xl text-base mt-4"
                disabled={otp.length !== 6}
              >
                Verify & Continue
              </Button>

              <button className="w-full text-center text-sm text-muted-foreground">
                Didn't receive OTP?{" "}
                <span className="text-primary font-medium">Resend</span>
              </button>
            </>
          )}
        </div>

        {/* Terms */}
        <p className="text-xs text-muted-foreground text-center px-4">
          By continuing, you agree to HpyRide's{" "}
          <span className="text-primary">Terms of Service</span> and{" "}
          <span className="text-primary">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default MobileLogin;
