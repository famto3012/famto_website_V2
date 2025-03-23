import { useEffect } from "react";

const ReferralAppRedirect = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const referralCode = urlParams.get("code");

    const appLink = `yourapp://auth?code=${referralCode}`;
    const playStoreLink =
      "https://play.google.com/store/apps/details?id=com.famto.customerapp";
    const appStoreLink = "https://apps.apple.com/app/idYOUR_APP_ID";

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
  }, []);

  return <p>Redirecting...</p>;
};

export default ReferralAppRedirect;
