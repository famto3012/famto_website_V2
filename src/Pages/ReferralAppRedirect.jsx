import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ReferralAppRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const referralCode = urlParams.get("code");

    const appLink = `famtocustomerapp://auth?code=${referralCode}`;
    const playStoreLink =
      "https://play.google.com/store/apps/details?id=com.famto.customerapp";
    const appStoreLink = "https://apps.apple.com/app/idYOUR_APP_ID";

    // Detect if the user is on a desktop browser
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isMobile) {
      // Redirect to home page if on desktop
      navigate("/");
      return;
    }

    const openApp = () => {
      window.location.href = appLink;

      setTimeout(() => {
        if (document.hidden) return;
        if (/android/i.test(navigator.userAgent)) {
          window.location.href = playStoreLink;
        } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          window.location.href = appStoreLink;
        }
      }, 1000);
    };

    openApp();
  }, [navigate]);

  return <p>Redirecting...</p>;
};

export default ReferralAppRedirect;
