import axios from 'axios';
import NetworkService, { ConfigRequest } from '@Network/interfaces/networkService';

export default class NetworkAxiosService implements NetworkService {
    static instance: NetworkAxiosService;
    service = axios.create();

    static getInstance() {
        if (this.instance === undefined) {
            this.instance = new NetworkAxiosService();
        }
        return this.instance;
    }
    constructor() {
        this.service.interceptors.response.use(
            (resp: any) => {
                return resp;
            },
        );
    }

    _request = (url: string, method: string, data: any, config: ConfigRequest = {}) => {
        const headers = {...config.headers };
        if (config.noAuth) delete headers['access-token'];
        return this.service({url: config.baseUrl + url, method, data, headers, ...config.options})
            .then((res) => {
                if (res.status === 200 || res.status === 201 || res.status === 204) return res.data;
                else throw (res.data);
            })
            .catch(errorResponse => {
                throw (errorResponse.response || {status: 500});
            });
    };

    delete(url: string, body: any, config: ConfigRequest) {
        return this._request(url, 'DELETE', body, config);
    }

    get(url: string, config?: ConfigRequest) {
        return this._request(url, 'GET', null, config);
    }

    patch(url: string, body: any, config?: ConfigRequest) {
        return this._request(url, 'PATCH', body, config);
    }

    post(url: string, body: any, config?: ConfigRequest) {
        return this._request(url, 'POST', body, config);
    }

    put(url: string, body: any, config?: ConfigRequest) {
        return this._request(url, 'PUT', body, config);
    }
}
