interface EpicDependencies {
    networkService: any,
};

interface BaseRequestAction<T> {
    type: string,
    payload: T,
};

export type {
    BaseRequestAction,
    EpicDependencies,
};
