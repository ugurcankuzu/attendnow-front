import { ErrorAction } from "@/store/globalErrorContext";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch } from "react";

export default function handleBadResponse(
  err: Error,
  errorDispatcher: Dispatch<ErrorAction>,
  router?: AppRouterInstance
) {
  switch (err.message) {
    case "AUTH_ERROR":
      return router?.push("/");
    case "SERVER_ERROR": {
      errorDispatcher({
        type: "SHOW_ERROR",
        error: new Error(
          "We can't reach server at the moment. Please try again later."
        ),
      });
      setTimeout(() => {
        errorDispatcher({ type: "HIDE_ERROR" });
      }, 5000);
      break;
    }
    default: {
      errorDispatcher({
        type: "SHOW_ERROR",
        error: new Error(
          "Some problem occured while trying to access our servers. Please try again later."
        ),
      });
      setTimeout(() => {
        errorDispatcher({ type: "HIDE_ERROR" });
      }, 5000);
    }
  }
}
