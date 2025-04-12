import { toast } from "react-toastify"

export const withToastFeedback = async <T>(promise: Promise<T>, successMessage: string, errorMessage: string): Promise<T | undefined> => {
    try {
        const result = await promise;
        toast.success(successMessage);
        return result;
    } catch (e) {
        toast.error(e instanceof Error ? e.message : errorMessage);
        return undefined;
    }
}