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
    delete: (url: string, body: any, config: IConfigRequest) => any;
    get: (url: string, config?: IConfigRequest) => any;
    patch: (url: string, body: any, config?: IConfigRequest, hasCookies?: boolean) => any;
    post: (url: string, body: any, config?: IConfigRequest, hasCookies?: boolean) => any;
    put: (url: string, body: any, config?: IConfigRequest, hasCookies?: boolean) => any;
};
