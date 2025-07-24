import { Toast as ArkToast } from "@ark-ui/react/toast";

export const Toast = ArkToast.Root;
export const ToastTitle = ArkToast.Title;
export const ToastDescription = ArkToast.Description;
export const ToastAction = ArkToast.ActionTrigger;
export const ToastClose = ArkToast.CloseTrigger;

// Simple toaster placeholder - in a real app you'd implement a toast provider
export const Toaster = () => null;
