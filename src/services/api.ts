export const API_URL = 'http://localhost:3333';

export function GET_TASKS() {
  return {
    url: API_URL + '/tasks',
    options: {
      method: 'GET',
    },
  };
}

export function GET_OPENED_TASKS() {
  return {
    url: API_URL + '/openedTasks',
    options: {
      method: 'GET',
    },
  };
}

export function GET_FINISHED_TASKS() {
  return {
    url: API_URL + '/finishedTasks',
    options: {
      method: 'GET',
    },
  };
}

export function GET_TAKS(taskId: string) {
  return {
    url: API_URL + `/tasks/${taskId}`,
    options: {
      method: 'GET',
    },
  };
}

export function CREATE_TASK(body: RequestApi) {
  return {
    url: API_URL + '/tasks',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function UPDATE_TASK(taskId: string, body: RequestApi) {
  return {
    url: API_URL + `/tasks/${taskId}`,
    options: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function FINISH_TASK(taskId: number) {
  return {
    url: API_URL + `/tasks/${taskId}`,
    options: {
      method: 'PATCH',
    },
  };
}

export function REMOVE_TASK(taskId: number) {
  return {
    url: API_URL + `/tasks/${taskId}`,
    options: {
      method: 'DELETE',
    },
  };
}

export function GET_COUNT_TASKS() {
  return {
    url: API_URL + `/countTasks`,
    options: {
      method: 'GET',
    },
  };
}
