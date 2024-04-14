import { useGlobalErrorContext } from "@/store/globalErrorContext";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

export default function ErrorCard() {
  const errorContext = useGlobalErrorContext();
  useEffect(() => {
    const timeout = setTimeout(() => {
      errorContext.dispatch({ type: "HIDE_ERROR" });
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <>
      {errorContext && errorContext.state.showError && (
        <div className={ErrorCardStyles.cardWrapper}>
          <div className={ErrorCardStyles.iconWrapper}>
            <FontAwesomeIcon icon={faExclamationTriangle} />
          </div>
          <div className={ErrorCardStyles.contentWrapper}>
            <p className={ErrorCardStyles.subTitle}>Error</p>
            <p className={ErrorCardStyles.errorContent}>
              {errorContext.state.error?.message}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

const ErrorCardStyles = {
  cardWrapper:
    "flex items-center gap-4 py-2 px-4 rounded-md shadow bg-slate-300/30",
  iconWrapper: "text-2xl text-sky-magenta",
  contentWrapper: "flex flex-col",
  subTitle: "text-sm text-sky-magenta font-bold",
  errorContent: "",
};
