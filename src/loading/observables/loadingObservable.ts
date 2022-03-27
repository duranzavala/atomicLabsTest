import { Subject } from 'rxjs';

const LoadingObservable = () => {
    const subject = new Subject();

    const show = (name = 'root') => {
        subject.next({ name, open: true });
    };

    const hide = (name = 'root') => {
        subject.next({ name, open: false });
    };

    const subscribe = (process: any) => subject.subscribe(process);

    return {
        show,
        hide,
        subscribe,
    };
};

export default LoadingObservable();
