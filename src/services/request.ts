import { baseApiURL } from "./constants";

export type AsyncReturnType<T = unknown> = Promise<{
  data: T | null;
  error: any;
}>;

async function GET<T = unknown>(url: string): AsyncReturnType<T> {
  try {
    const response = await fetch(baseApiURL + url, {
      method: "GET",
      headers: {
        Authorization: `bearer `,
        Accept: "*/*",
      },
    });
    const json = await response.json();
    if (response.status <= 299) return { data: json, error: null };
    return { data: null, error: json };
  } catch (error) {
    return { data: null, error: error };
  }
}

async function POST<T = unknown, P = object | string | number>(
  url: string,
  body: P
): AsyncReturnType<T> {
  try {
    const response = await fetch(baseApiURL + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: `bearer `,
      },

      body: JSON.stringify(body),
    });
    const json: T = await response.json();
    if (response.status <= 299) return { data: json, error: null };

    return { data: null, error: json };
  } catch (error) {
    return { data: null, error: error };
  }
}

async function PUT<T = unknown, P = object | string | number>(
  url: string,
  body: P
): AsyncReturnType<T> {
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `bearer `,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const json = await response.json();
    if (response.status <= 299) return { data: json, error: null };
    return { data: null, error: json };
  } catch (error) {
    return { data: null, error: body };
  }
}

async function DELETE<T = unknown>(url: string): AsyncReturnType<T> {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `bearer `,
        "Content-type": "application/json",
      },
    });
    const json = await response.json();
    if (response.status <= 299) return { data: json, error: null };
    return { data: null, error: json };
  } catch (error) {
    return { data: null, error: error };
  }
}

export { GET, POST, PUT, DELETE };
