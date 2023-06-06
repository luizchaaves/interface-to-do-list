declare global {
  export interface RequestApi {
    title: string;
    description: string;
  }
  export interface DefaultState {
    loading: boolean;
    data: ResponseData;
    error: string;
  }
  export interface Task {
    created_at: string;
    description: string;
    finished: boolean;
    id: number;
    title: string;
    updated_at: string;
  }
  export interface ResponseData {
    length?: number;
    tasks?: Task[];
    message?: string;
  }
}

export default global;
