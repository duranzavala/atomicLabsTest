interface IConfigRequest {
    baseUrl?: string,
    headers?: any,
    noAuth?: boolean,
    options?: any
    params?: any,
    token?: string,
}

enum RESPONSE_STATUS {
    SUCCESS = 'Success',
    ERROR = 'Error',
}

interface IBaseServerResponse {
    success: boolean,
    status: RESPONSE_STATUS,
    code: number,
}

export type {
    IConfigRequest,
    IBaseServerResponse,
}

export { RESPONSE_STATUS };

export default interface NetworkService {
    delete: (url: string, body: any, config: IConfigRequest) => Promise<any>;
    get: (url: string, config?: IConfigRequest) => Promise<any>;
    patch: (url: string, body: any, config?: IConfigRequest, hasCookies?: boolean) => Promise<any>;
    post: (url: string, body: any, config?: IConfigRequest, hasCookies?: boolean) => Promise<any>;
    put: (url: string, body: any, config?: IConfigRequest, hasCookies?: boolean) => Promise<any>;
};
