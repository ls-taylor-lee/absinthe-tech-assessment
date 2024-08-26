"use client";

import { IShowToastProps, IToastProps } from "App/types/global";
import classNames from "classnames";
import { createContext, useContext, useMemo, useState } from "react";

const initialToastContext = { showToast: (_: IShowToastProps) => {} };

// Create Toast Context
const ToastContext = createContext(initialToastContext);

// Toast Provider Component
export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState<IToastProps>({ message: "", show: false, variant: "normal" });

  const showToast = ({ message, duration = 2000, variant = "normal" }: IShowToastProps) => {
    setToast({ message, show: true, variant });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, duration);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast message={toast.message} show={toast.show} variant={toast.variant} />
    </ToastContext.Provider>
  );
};

// Custom hook to use Toast
export const useToast = () => useContext(ToastContext);

// Toast Component
const Toast = ({ message, show, variant = "normal" }: IToastProps) => {
  const contentStyle = useMemo(() => {
    switch (variant) {
      case "success":
        return "bg-success/60 dark:bg-success-dark/60 text-white";
      case "fail":
        return "bg-red-600/60 text-white";
      case "normal":
      default:
        return "bg-black/60 dark:bg-white/60 text-white dark:text-black";
    }
  }, [variant]);

  return (
    <div
      className={classNames(
        "fixed bottom-4 right-4 max-w-sm w-max",
        "p-4 rounded-lg shadow-lg",
        "transform transition-all duration-300",
        show ? "opacity-100" : "opacity-0 pointer-events-none",
        contentStyle
      )}
    >
      {message}
    </div>
  );
};
