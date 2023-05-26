declare global {
  export interface RequestApi {
    title: string;
    description: string;
  }

  export interface ResponseApi {
    id: number;
    title: string;
    description: string;
    created_at: string;
    updated_at: string;
    finished: boolean;
  }
}

export default global;
