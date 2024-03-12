import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Horse } from "./types";
import { differenceInMonths, differenceInYears } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getAdLocation = (horses: Horse[]) => {
  if (horses.length <= 8) return [4, 3];
  return [8, 6];
};

export const getAgeFns = (birthdate: Date) => {
  const ageInYears = differenceInYears(new Date(), birthdate);
  if (ageInYears === 1) return `${ageInYears} año`;
  if (ageInYears >= 1) return `${ageInYears} años`;
  const ageInMonths = differenceInMonths(new Date(), birthdate);
  if (ageInMonths === 1) return `${ageInMonths} mes`;
  if (ageInMonths > 1) return `${ageInMonths} meses`;
};

const senderLength = 500;
const messageLength = 5000;

export const formValidate = (formData: FormData) => {
  const message = formData.get("message");
  const emailSender = formData.get("emailSender");
  const nameSender = formData.get("nameSender");
  if (
    !message ||
    typeof message !== "string" ||
    message.length > messageLength
  ) {
    return { accepted: false, error: "Invalid message" };
  }

  if (
    !emailSender ||
    typeof emailSender !== "string" ||
    emailSender.length > senderLength
  ) {
    return { accepted: false, error: "Invalid sender email" };
  }

  if (
    !nameSender ||
    typeof nameSender !== "string" ||
    nameSender.length > senderLength
  ) {
    return { accepted: false, error: "Invalid sender name" };
  }

  return { accepted: true, emailSender, message, nameSender };
};

export const getErrorMessage = (error: unknown) => {
  let message: string;
  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};
