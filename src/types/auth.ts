export interface RegisterResponse {
  data: {
    user: string;
    token: string;
  };
}

export interface LoginResponse {
  data: {
    user: {
      id: number;
      name: string;
      email: string;
    };
    token: string;
  };
}

export interface FormInputs {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}
