import { CustomError, ErrorType } from "@infrastructure/error/CustomError";

export const sqlErrorHandler = async <T>(
  msg: string,
  cb: () => T,
): Promise<T> => {
  try {
    const result = await cb();
    return result;
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }

    console.error(error);
    throw new CustomError(msg, ErrorType.INTERNAL_ERROR);
  }
};
