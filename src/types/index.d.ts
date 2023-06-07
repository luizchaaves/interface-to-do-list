declare global {
  export interface RequestApi {
    title: string;
    description: string;
  }
  export interface DefaultState {
    loading: boolean;
    data: ResponseData | ResponseCountData;
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

  export interface ResponseCountData {
    AllTasks: number;
    OpenedTasks: number;
    FinishedTasks: number;
  }
}

export default global;
