import { Subject } from 'rxjs';

const PhoneVerificationObservable = () => {
    const subject = new Subject();

    const onSuccess = (response: boolean) => {
        subject.next(response);
    };

    const subscribe = (process: any) => subject.subscribe(process);

    return {
        onSuccess,
        subscribe,
    };
};

export default PhoneVerificationObservable();
