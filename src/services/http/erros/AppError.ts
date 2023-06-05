import { AxiosError } from "axios";

export class AppError {
  public message: any = 'Erro inesperado, por favor entre em contato com o suporte';
  public statusCode: number = 500;

  constructor(error: unknown) {
    if (error instanceof AxiosError) {
      this.statusCode = error.status || 500;
      this.message = error.message;
    }
    
  }
}